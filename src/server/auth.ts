import { randomBytes, pbkdf2 as _pbkdf2 } from "node:crypto";
import { promisify } from "node:util";

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
