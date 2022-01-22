import type { AppProps } from "next/app";

/**
 * AnimatePresence
 * https://www.framer.com/docs/animate-presence/
 */
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
