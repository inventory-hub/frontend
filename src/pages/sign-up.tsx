import { useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Alert,
  AlertDescription,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

import LandingLayout from "~/components/landing/landing-layout";
import { useAuthStore } from "~/stores/auth-store";
import { signUp } from "~/services/auth-service";
import { PrimaryOutlineInput } from "~/components/ui/inputs";
import { FilledSecondaryButton } from "~/components/ui/buttons";

const signUpSchema = z
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

type SignUpForm = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const router = useRouter();
  const registrationToken = router.query.token as string;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const setTokens = useAuthStore((state) => state.setTokens);
  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (tokens) => {
      setTokens(tokens);
      router.push("/app");
    },
    onError: (response: { error: string }) =>
      setError("root", { message: response?.error ?? "Network Error" }),
  });
  const onSubmit: SubmitHandler<SignUpForm> = useCallback(
    (data) => signUpMutation.mutate({ ...data, token: registrationToken }),
    [signUpMutation, registrationToken]
  );

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <LandingLayout display="flex" flexDirection="column" alignItems="center">
        <Heading
          fontFamily="fonts.heading"
          textAlign="center"
          as="h1"
          size="2xl"
          lineHeight={1.2}
        >
          Sign up
        </Heading>
        <Heading
          textAlign="center"
          as="h2"
          size="md"
          color="primary.main"
          maxW="40rem"
        >
          You are invited to Inventory Hub! Complete the sign up form below to
          get started.
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.root?.message && (
            <Alert status="error">
              <AlertDescription>{errors.root?.message}</AlertDescription>
            </Alert>
          )}
          <FormControl isInvalid={!!errors.username}>
            <FormLabel color="primary.outline">Username</FormLabel>
            <PrimaryOutlineInput type="text" {...register("username")} />
            <FormErrorMessage mt={0} fontSize="xs">
              {errors.username?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel color="primary.outline">Password</FormLabel>
            <PrimaryOutlineInput type="password" {...register("password")} />
            <FormErrorMessage mt={0} fontSize="xs">
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel color="primary.outline">Confirm Password</FormLabel>
            <PrimaryOutlineInput
              type="password"
              {...register("confirmPassword")}
            />
            <FormErrorMessage mt={0} fontSize="xs">
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          </FormControl>
          <FilledSecondaryButton
            mt={4}
            type="submit"
            fontWeight={300}
            w="100%"
            disabled={!isValid}
            isLoading={signUpMutation.isPending}
          >
            Continue
          </FilledSecondaryButton>
        </form>
      </LandingLayout>
    </>
  );
};

export default SignUpPage;
