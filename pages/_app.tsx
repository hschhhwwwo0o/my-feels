import type { AppProps } from "next/app";

import "styles/index.css";

/**
 * Provider
 * https://react-redux.js.org/introduction/getting-started#api-overview
 */
import { Provider } from "react-redux";
import store from "../redux";

import ThePreApplicationLayout from "layouts/pre-app-layout";

/**
 * AnimatePresence
 * https://www.framer.com/docs/animate-presence/
 */
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <ThePreApplicationLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThePreApplicationLayout>
    </Provider>
  );
}

export default MyApp;
