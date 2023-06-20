import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "../components/AppContainer";
import theme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <meta name="robots" content="noindex"></meta>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
