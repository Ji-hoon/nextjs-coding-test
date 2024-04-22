import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/modules/Header";
import { META } from "../global/constants";
import type { Viewport } from "next";
import SurveyProvider from "../store";

export const metadata: Metadata = {
  title: META.TITLE,
  description: META.DESC,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
