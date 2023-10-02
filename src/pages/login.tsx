import Image from "next/image";
import {
  chakra,
  Button,
  Heading,
  Text,
  Grid,
  Box,
  Flex,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Show,
} from "@chakra-ui/react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import LandingLayout from "~/components/landing/landing-layout";
import authWarehouseImage from "~/assets/images/auth_warehouse.png";
import { PrimaryOutlineInput } from "~/components/ui/inputs";
import { FilledPrimaryButton } from "~/components/ui/buttons";
import { useCallback } from "react";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("Enter your password"),
});

type LoginForm = z.infer<typeof loginFormSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginForm> = useCallback((data) => {
    console.log("wip");
  }, []);

  return (
    <LandingLayout
      pr={{
        base: "1rem",
        md: "6rem",
      }}
    >
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          lg: "1.5fr 1fr",
        }}
      >
        <Center flexDirection="column" color="black">
          <Box w="25rem">
            <Heading fontSize="5xl">Welcome back!</Heading>
            <Heading as="h2" fontSize="2xl" fontWeight="normal" mb="2rem">
              Log in to your account
            </Heading>
            <chakra.form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel color="primary.outline">Email Address</FormLabel>
                <PrimaryOutlineInput type="email" {...register("email")} />
                <FormErrorMessage mt={0} fontSize="xs">
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel color="primary.outline">Password</FormLabel>
                <PrimaryOutlineInput
                  type="password"
                  {...register("password")}
                />
                <FormErrorMessage mt={0} fontSize="xs">
                  {errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FilledPrimaryButton
                mt={4}
                type="submit"
                fontWeight={300}
                w="100%"
                disabled={!isValid}
              >
                Continue
              </FilledPrimaryButton>
            </chakra.form>
          </Box>
        </Center>
        <Show above="md">
          <Center as="aside" p="2rem">
            <Image
              style={{
                objectFit: "contain",
                opacity: 0.8,
              }}
              src={authWarehouseImage}
              alt="Warehouse with authentication"
            />
          </Center>
        </Show>
      </Grid>
    </LandingLayout>
  );
};

export default Login;