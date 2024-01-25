import NextAuth, { type NextAuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { type JWT } from "next-auth/jwt";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import * as jsonwebtoken from "jsonwebtoken";
import { gql } from "graphql-request";

import {
  type GetUserRoleQuery,
  type GetUserRoleQueryVariables,
  type GetUserAccountsByEmailQuery,
  type GetUserAccountsByEmailQueryVariables,
  Roles_Enum,
} from "~/generated/graphql";
import { graphqlRequest } from "~/server/graphql";
import { verifyPassword } from "~/server/auth";

const GET_USER_ACCOUNTS_BY_EMAIL_QUERY = gql`
  query GetUserAccountsByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      accounts(where: { provider: { _eq: "credentials" } }) {
        salt
        password_hash
      }
      id
      name
      email
      role
    }
  }
`;

const GET_USER_ROLE_QUERY = gql`
  query GetUserRole($id: uuid!) {
    user: users_by_pk(id: $id) {
      role
    }
  }
`;

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        const user = await graphqlRequest<
          GetUserAccountsByEmailQuery,
          GetUserAccountsByEmailQueryVariables
        >(GET_USER_ACCOUNTS_BY_EMAIL_QUERY, {
          email,
        }).then((response) => response.users[0]);
        if (!user || !user.accounts[0]) {
          return null;
        }

        const { accounts, id, name, role } = user;
        const { salt, password_hash } = accounts[0];
        const isPasswordValid = await verifyPassword(
          password,
          password_hash!,
          salt!
        );
        if (!isPasswordValid) {
          return null;
        }

        return { id, name, email, role };
      },
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.HASURA_PROJECT_ENDPOINT!,
    adminSecret: process.env.HASURA_API_ENDPOINT!,
  }),
  theme: {
    colorScheme: "auto",
  },
  // Use JWT strategy so we can forward them to Hasura
  session: { strategy: "jwt" },
  // Encode and decode your JWT with the HS256 algorithm
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token!, secret, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken as JWT;
    },
  },
  callbacks: {
    // Add the required Hasura claims
    // https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt/#the-spec
    async jwt({ token }) {
      const { user } = await graphqlRequest<
        GetUserRoleQuery,
        GetUserRoleQueryVariables
      >(GET_USER_ROLE_QUERY, {
        id: token.sub!,
      });

      const role = user?.role || Roles_Enum.User;

      return {
        ...token,
        role: user?.role || role,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": [
            Roles_Enum.Admin,
            Roles_Enum.Manager,
            Roles_Enum.User,
            Roles_Enum.ReadonlyUser,
          ],
          "x-hasura-default-role": role,
          "x-hasura-role": role,
          "x-hasura-user-id": token.sub,
        },
      };
    },
    // Add user ID to the session
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub!;
        const { user } = await graphqlRequest<
          GetUserRoleQuery,
          GetUserRoleQueryVariables
        >(GET_USER_ROLE_QUERY, {
          id: token.sub!,
        });
        session.user.role = user?.role!;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
