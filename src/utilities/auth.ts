import { z } from "zod";

export const decodeJwt = <T>(token: string) =>
  JSON.parse(atob(token.split(".")[1])) as T;

export const signUpSchema = z
  .object({
    username: z.string().min(3).max(20),
    password: z
      .string()
      .min(8, "must be at least 8 characters long")
      .max(100)
      .regex(/[a-z]/i, "must contain at least one letter")
      .regex(/[0-9]/, "must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpInput = z.infer<typeof signUpSchema>;
