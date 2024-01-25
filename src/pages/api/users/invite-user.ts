import { type NextApiHandler } from "next";
import { gql } from "graphql-request";

import { graphqlRequest } from "~/server/graphql";
import {
  type InviteUserOutput,
  type InviteUserInput,
  type GetUsersEmailExistsQuery,
  type GetUsersEmailExistsQueryVariables,
  type CreateDraftUserMutation,
  type CreateDraftUserMutationVariables,
  Roles_Enum,
} from "~/generated/graphql";
import { generateInvitationToken, withAuth } from "~/server/auth";
import { queueClient } from "~/server/azure";

type InvitationEmailMessage = {
  to: string;
  fullName: string;
  token: string;
  callbackUrl: string;
};

const CREATE_DRAFT_USER = gql`
  mutation CreateDraftUser($user: draft_users_insert_input!) {
    user: insert_draft_users_one(object: $user) {
      id
    }
  }
`;

const GET_USERS_EMAIL_EXISTS = gql`
  query GetUsersEmailExists($email: String!) {
    users_aggregate(where: { email: { _eq: $email } }) {
      aggregate {
        count
      }
    }
  }
`;

const handler: NextApiHandler<InviteUserOutput> = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const input = req.body.input?.data as InviteUserInput;
  const { email, first_name, last_name, role } = input;
  const emailsCount = await graphqlRequest<
    GetUsersEmailExistsQuery,
    GetUsersEmailExistsQueryVariables
  >(GET_USERS_EMAIL_EXISTS, {
    email,
  }).then((response) => response.users_aggregate.aggregate?.count);
  const emailExists = (emailsCount ?? 0) > 0;
  if (emailExists) {
    res.status(400).json({ error: "Email already exists" });
    return;
  }

  const invitation_token = generateInvitationToken();

  try {
    const { user } = await graphqlRequest<
      CreateDraftUserMutation,
      CreateDraftUserMutationVariables
    >(CREATE_DRAFT_USER, {
      user: {
        email,
        first_name,
        last_name,
        role: role as any as Roles_Enum,
        invitation_token,
      },
    });

    if (!user) {
      res.status(500).json({ error: "Failed to create user" });
      return;
    }

    const callbackUrl = `${process.env.NEXTAUTH_URL}/sign-up?token=${invitation_token}`;

    const message: InvitationEmailMessage = {
      to: email,
      fullName: `${first_name} ${last_name}`,
      token: invitation_token,
      callbackUrl,
    };

    await queueClient.sendMessage(JSON.stringify(message));
    res.status(200).json({ id: user.id });
  } catch (error) {
    res.status(409).json({ error: "User with this email already invited" });
  }
};

export default withAuth([Roles_Enum.Admin, Roles_Enum.Manager])(handler);
