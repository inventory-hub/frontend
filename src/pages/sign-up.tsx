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
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { gql } from "graphql-request";

import LandingLayout from "~/components/landing/landing-layout";
import { PrimaryOutlineInput } from "~/components/ui/inputs";
import { FilledSecondaryButton } from "~/components/ui/buttons";
import { type GetServerSideProps } from "next";
import { graphqlRequest } from "~/server/graphql";
import {
  type GetInvitationInfoQuery,
  type GetInvitationInfoQueryVariables,
} from "~/generated/graphql";
import { signUpSchema } from "~/utilities/auth";
import { signIn } from "next-auth/react";
import axios from "axios";

const GET_INVITATION_INFO = gql`
  query GetInvitationInfo($token: String!) {
    invitation_info: draft_users(where: { invitation_token: { _eq: $token } }) {
      email
      first_name
    }
  }
`;

type Props = {
  invitationInfo: GetInvitationInfoQuery["invitation_info"][0] | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { token } = ctx.query;
  if (typeof token !== "string") {
    return {
      props: {
        invitationInfo: null,
      },
    };
  }
  const { invitation_info } = await graphqlRequest<
    GetInvitationInfoQuery,
    GetInvitationInfoQueryVariables
  >(GET_INVITATION_INFO, {
    token,
  });
  if (!invitation_info.length) {
    return {
      props: {
        invitationInfo: null,
      },
    };
  }
  return {
    props: {
      invitationInfo: invitation_info[0],
    },
  };
};

type SignUpForm = z.infer<typeof signUpSchema>;

const SignUpPage = ({ invitationInfo }: Props) => {
  const router = useRouter();
  const toast = useToast();
  const registrationToken = router.query.token as string;
  const {
    register,
    handleSubmit,
    getValues,
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

  const signUpMutation = useMutation({
    mutationFn: (data: SignUpForm | { token: string }) =>
      axios.post("/api/auth/sign-up", data),
    onSuccess: () => {
      signIn(
        "credentials",
        {
          callbackUrl: "/app",
        },
        {
          email: invitationInfo?.email!,
          password: getValues("password"),
        }
      );
    },
    onError: (response: { error: string }) =>
      setError("root", { message: response?.error ?? "Network Error" }),
  });
  const onSubmit: SubmitHandler<SignUpForm> = useCallback(
    (data) => signUpMutation.mutate({ ...data, token: registrationToken }),
    [signUpMutation, registrationToken]
  );

  if (!invitationInfo) {
    toast({
      title: "Invalid invitation link",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
    router.push("/");
  }

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
          mb={4}
        >
          Hi {invitationInfo?.first_name}, you are invited to Inventory Hub!
          Complete the sign up form below to get started.
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.root?.message && (
            <Alert status="error">
              <AlertDescription>{errors.root?.message}</AlertDescription>
            </Alert>
          )}
          <FormControl>
            <FormLabel color="primary.outline">Email Address</FormLabel>
            <PrimaryOutlineInput
              type="email"
              defaultValue={invitationInfo?.email}
              disabled
            />
          </FormControl>
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
