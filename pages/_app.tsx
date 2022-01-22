import type { AppProps } from "next/app";

import "../styles/index.css";

/**
 * Provider
 * https://react-redux.js.org/introduction/getting-started#api-overview
 */
import { Provider } from "react-redux";
import store from "../redux";

/**
 * AnimatePresence
 * https://www.framer.com/docs/animate-presence/
 */
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
