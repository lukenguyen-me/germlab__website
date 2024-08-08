import Script from "next/script";
import classNames from "classnames";
import { dir } from "i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/app/globals.scss";
import Header from "@/components/Header/client";
import Sidebar from "@/components/Sidebar";
import { languages } from "@/i18n/settings";
import { FontSourceCodePro } from "@/fonts";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return {
    title: "Germlab",
    description: "Germlab - Make things real",
  };
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang="en-us" className={FontSourceCodePro.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00FBF4" />
      </head>
      <body className={classNames("relative text-white")}>
        <Header />
        <Sidebar />
        {children}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></Script>
        <Script
          defer
          data-domain="germlab.dev"
          src="https://plausible.io/js/script.js"
        />
        <ToastContainer theme="dark" />
      </body>
    </html>
  );
}
