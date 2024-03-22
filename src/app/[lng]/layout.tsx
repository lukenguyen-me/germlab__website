import "@/app/globals.scss";
import Script from "next/script";
import classNames from "classnames";
import { dir } from "i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/app/[lng]/components/Header/client";
import Sidebar from "@/app/[lng]/components/Sidebar";
import { fallbackLng, languages } from "@/i18n/settings";
import { useTranslation } from "@/i18n";
import { FontSourceCodePro } from "../fonts";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return {
    title: "GermLab",
    description: t("GermLab - Make things real"),
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
    <html lang={lng} dir={dir(lng)} className={FontSourceCodePro.className}>
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
        <ToastContainer theme="dark" />
      </body>
    </html>
  );
}
