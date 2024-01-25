import { randomBytes, pbkdf2 as _pbkdf2 } from "node:crypto";
import { promisify } from "node:util";
import { customAlphabet } from "nanoid";
import {
  type NextApiRequest,
  type NextApiResponse,
  type NextApiHandler,
} from "next";
import * as jsonwebtoken from "jsonwebtoken";

import { type GraphQLErrors } from "./graphql";
import { Roles_Enum } from "~/generated/graphql";

const ITERATIONS = 1000;
const pbkdf2 = promisify(_pbkdf2);

export const generateHashAndSalt = async (password: string) => {
  const salt = randomBytes(16).toString("hex");
  const hash = await pbkdf2(password, salt, ITERATIONS, 64, "sha512");
  return { salt, hash: hash.toString("hex") };
};

export const verifyPassword = async (
  password: string,
  hash: string,
  salt: string
) => {
  const verifyHash = await pbkdf2(password, salt, ITERATIONS, 64, "sha512");
  return verifyHash.toString("hex") === hash;
};

const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16);

export const generateInvitationToken = () => nanoid(16);

export const withAuth =
  (
    roles: Roles_Enum[] = [
      Roles_Enum.Admin,
      Roles_Enum.Manager,
      Roles_Enum.User,
      Roles_Enum.ReadonlyUser,
    ]
  ) =>
  <T>(fn: NextApiHandler<T>) =>
  async (req: NextApiRequest, res: NextApiResponse<T | GraphQLErrors>) => {
    const encodedJwt = req.cookies["next-auth.session-token"];
    if (!encodedJwt) {
      return res.status(401).json({ errors: [{ message: "Unauthorized" }] });
    }
    const isJwtValid = jsonwebtoken.verify(
      encodedJwt,
      process.env.NEXTAUTH_SECRET!
    );
    if (!isJwtValid) {
      return res
        .status(401)
        .json({ errors: [{ message: "Invalid signature for JWT" }] });
    }

    const jwt = jsonwebtoken.decode(encodedJwt) as jsonwebtoken.JwtPayload;

    const role = jwt.role as Roles_Enum;
    if (!roles.includes(role)) {
      return res.status(403).json({ errors: [{ message: "Forbidden" }] });
    }

    return fn(req, res);
  };
