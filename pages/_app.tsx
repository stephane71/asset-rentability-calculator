import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("../mocks/browser");
    return worker.start();
  }
  return Promise.resolve();
}

export default function App({ Component, pageProps }: AppProps) {
  const [loadingSW, setLoadingSW] = useState(true);

  useEffect(() => {
    prepare().then(() => setLoadingSW(false));
  }, []);

  if (loadingSW) {
    return <></>;
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
