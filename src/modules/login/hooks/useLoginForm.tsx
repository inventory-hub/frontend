import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEventHandler } from "react";
import { AuthApi } from "~/pages/api/auth.api";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("Enter your password"),
});

type LoginForm = {
  email: string;
  password: string;
  handleLogin: (event: React.FormEvent) => Promise<void>;
  handleEmailChange: ChangeEventHandler<HTMLInputElement>;
  handlePasswordChange: ChangeEventHandler<HTMLInputElement>;
  errors: Record<string, string>;
  error: string | null;
};

export const useLoginForm = (): LoginForm => {
  const router = useRouter();
  const authApi = AuthApi.getInstance();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPassword(event.target.value);
  };

  const validateForm = (): boolean => {
    try {
      loginFormSchema.parse({
        email,
        password,
      });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        await authApi.login(email, password);

        if (authApi.isLoggedIn()) {
          await router.push("/profile");
        }
      } catch (error) {
        // Handle login error here
        setError("Incorrect email or password. Please try again.");
      }
    }
  };

  return {
    email,
    password,
    handleLogin,
    handleEmailChange,
    handlePasswordChange,
    errors,
    error,
  };
};
