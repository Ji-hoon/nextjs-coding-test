import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "설문조사 서비스",
  description: "운동에 관한 설문에 응답하시고 본인의 신체 점수를 측정해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
