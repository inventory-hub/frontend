import { type NextApiHandler } from "next";
import { gql } from "graphql-request";
import { signUpSchema, type SignUpInput } from "~/utilities/auth";
import { graphqlRequest } from "~/server/graphql";
import {
  type UpgradeUserMutation,
  type UpgradeUserMutationVariables,
  type GetDraftUserQuery,
  type GetDraftUserQueryVariables,
  type Users_Insert_Input,
} from "~/generated/graphql";
import { generateHashAndSalt } from "~/server/auth";

const GET_DRAFT_USER_QUERY = gql`
  query GetDraftUser($token: String!) {
    draft_users(where: { invitation_token: { _eq: $token } }) {
      id
      email
      first_name
      last_name
      role
    }
  }
`;

const UPGRADE_USER_MUTATION = gql`
  mutation UpgradeUser($user: users_insert_input!, $draft_user_id: uuid!) {
    user: insert_users_one(object: $user) {
      id
    }
    deleted_draft_user: delete_draft_users_by_pk(id: $draft_user_id) {
      id
    }
  }
`;

type Data = SignUpInput & {
  token: string;
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const input = req.body as Data;
  const validationResult = signUpSchema.safeParse(input);
  if (!validationResult.success) {
    res.status(400).json({ error: "Password not strong enough" });
    return;
  }

  const { token, username, password } = input;

  const draftUser = await graphqlRequest<
    GetDraftUserQuery,
    GetDraftUserQueryVariables
  >(GET_DRAFT_USER_QUERY, {
    token,
  }).then((response) => response.draft_users[0]);

  if (!draftUser) {
    res.status(400).json({ error: "Invalid token" });
    return;
  }

  const { id, email, first_name, last_name, role } = draftUser;
  const { salt, hash } = await generateHashAndSalt(password);
  const user: Users_Insert_Input = {
    name: username,
    email,
    first_name,
    last_name,
    role,
    accounts: {
      data: [
        {
          type: "credentials",
          provider: "credentials",
          providerAccountId: id,
          salt,
          password_hash: hash,
        },
      ],
    },
  };

  await graphqlRequest<UpgradeUserMutation, UpgradeUserMutationVariables>(
    UPGRADE_USER_MUTATION,
    {
      user,
      draft_user_id: id,
    }
  );

  res.status(200).send("ok");
};

export default handler;
