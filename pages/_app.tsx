import "styles/index.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux";
import ThePreApplicationLayout from "layouts/pre-app-layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThePreApplicationLayout>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThePreApplicationLayout>
    </Provider>
  );
}

export default MyApp;
