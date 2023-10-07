import Image from "next/image";
import {
  chakra,
  Heading,
  Grid,
  Box,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Show,
} from "@chakra-ui/react";

import LandingLayout from "~/components/landing/landing-layout";
import authWarehouseImage from "~/assets/images/auth_warehouse.png";
import { PrimaryOutlineInput } from "~/components/ui/inputs";
import { FilledPrimaryButton } from "~/components/ui/buttons";
import { useLoginForm } from "~/modules/login/hooks/useLoginForm";

const Login = () => {
  const {
    email,
    password,
    handleLogin,
    handleEmailChange,
    handlePasswordChange,
    errors,
    error,
  } = useLoginForm();

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
            <chakra.form onSubmit={(e) => handleLogin(e)}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel color="primary.outline">Email Address</FormLabel>
                <PrimaryOutlineInput
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <FormErrorMessage mt={0} fontSize="xs">
                  {errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel color="primary.outline">Password</FormLabel>
                <PrimaryOutlineInput
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <FormErrorMessage mt={0} fontSize="xs">
                  {errors.password}
                </FormErrorMessage>
              </FormControl>
              {error && (
                <Box color="red" mt={2} fontSize="sm">
                  {error}
                </Box>
              )}
              <FilledPrimaryButton
                mt={4}
                type="submit"
                fontWeight={300}
                w="100%"
                disabled={!!errors.email || !!errors.password}
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
