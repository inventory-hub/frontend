import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const secret = "mysecret";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === "testemail@email.com" && password === "testpassword") {
      const token = jwt.sign({ email }, secret, { expiresIn: "1h" });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
