import { type ReactNode, useRef, type PropsWithChildren } from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { type NextPage } from "next";
import type { AppProps } from "next/app";

import { theme } from "~/utilities/theme";
import { mplus1p } from "~/utilities/fonts";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (props: PropsWithChildren) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const client = new Client({
  url: "http://localhost:8080/v1/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const queryClient = useRef(new QueryClient()).current;

  const Layout = Component.Layout ?? "div";
  return (
    <>
      <style jsx global>{`
        :root {
          --font-mplus1p: ${mplus1p.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Provider value={client}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </QueryClientProvider>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
};

export default App;
