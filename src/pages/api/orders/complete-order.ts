import { type NextApiHandler } from "next";
import { type CompleteOrderOutput, Roles_Enum } from "~/generated/graphql";
import { withAuth } from "~/server/auth";
import { type GraphQLErrors } from "~/server/graphql";

const handler: NextApiHandler<CompleteOrderOutput | GraphQLErrors> = async (
  req,
  res
) => {};

export default withAuth([Roles_Enum.Admin, Roles_Enum.Manager])(handler);
