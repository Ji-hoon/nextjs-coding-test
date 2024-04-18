import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/modules/Header";
import { META } from "../global/constants";
import SurveyProvider from "../store";

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
      <body className="flex flex-col min-h-screen ">
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
