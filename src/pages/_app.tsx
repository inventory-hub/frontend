import type { AppProps } from "next/app";
import { type ReactElement, type ReactNode, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "~/utilities/theme";
import { mplus1p } from "~/utilities/fonts";
import { type NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const queryClient = useRef(new QueryClient()).current;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-mplus1p: ${mplus1p.style.fontFamily};
        }
      `}</style>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
