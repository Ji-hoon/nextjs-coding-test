import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/modules/Header";
import { META } from "../global/constants";
import SurveyProvider from "../store";
import Head from "next/head";

export const metadata: Metadata = {
  title: META.TITLE,
  description: META.DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
      </Head>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <SurveyProvider>
          <Header />
          <div className="flex h-full flex-col flex-auto items-center justify-center">
            {children}
          </div>
        </SurveyProvider>
      </body>
    </html>
  );
}
