import { type AppType } from "next/dist/shared/lib/utils";
import IndexLayout from "../layouts/index";
import { type AppProps } from "next/app";
import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import React from "react";


type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType ;
  } ;
};

const MyApp: AppType = ({ Component, pageProps }: ComponentWithPageLayout) => {
  return (
      <IndexLayout>
        {Component.PageLayout ? (
          // @ts-expect-error - Weird type error 
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </IndexLayout>
  );
};

export default MyApp;
