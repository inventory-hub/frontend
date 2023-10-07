import type { AppProps } from "next/app";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "~/utilities/theme";
import { mplus1p } from "~/utilities/fonts";
import { AuthProvider } from "~/context/AuthProvider";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(new QueryClient()).current;

  return (
    <>
      <style jsx global>{`
        :root {
          --font-mplus1p: ${mplus1p.style.fontFamily};
        }
      `}</style>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Component {...pageProps} />\
          </AuthProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
