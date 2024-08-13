import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/store/config/store";
import { NextPageWithLayout } from "next";
import UserLayout from "src/layout/UserLayout";
import WindowWrapper from "src/components/Window-Wrapper";
import NProgress from "nprogress";
import { Router, useRouter } from "next/router";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { getCurrentUser } from "src/utils/Constant";
import { ROUTES } from "src/utils/routes";
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     console.log("service");
  //     navigator.serviceWorker
  //       .register("service-worker.js")
  //       .then(
  //         function (registration) {
  //           console.log("Worker registration successful", registration.scope);
  //         },
  //         function (err) {
  //           console.log("Worker registration failed", err);
  //         }
  //       )
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   } else {
  //     console.log("Service Worker is not supported by browser.");
  //   }
  // }, []);
  useEffect(() => {
    let token = getCurrentUser();
    if (!token) {
      router.push("/");
    }
  }, []);
  const getLayout =
    Component.getLayout || ((page: any) => <UserLayout>{page}</UserLayout>);
  return (
    <Provider store={store}>
      <Head>
        {/* <link rel="shortcut icon" type="ico" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" /> */}
        <title>Donatuz</title>
      </Head>
      <WindowWrapper>{getLayout(<Component {...pageProps} />)}</WindowWrapper>

      <Toaster
        position="bottom-right"
        toastOptions={{ className: "react-hot-toast" }}
      />
    </Provider>
  );
}
