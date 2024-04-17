import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";
import { META } from "../global/constants";

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
        <Header />
        <form className="flex h-full flex-col flex-auto items-center justify-center">
          {children}
          <Footer />
        </form>
      </body>
    </html>
  );
}
