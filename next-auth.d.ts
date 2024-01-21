// https://github.com/nextauthjs/next-auth/discussions/536#discussioncomment-1932922
import type { DefaultUser } from "next-auth";
import type { Roles_Enum } from "~/generated/graphql";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
      role: Roles_Enum;
    };
  }
}
