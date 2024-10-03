import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import localFont from "next/font/local";

const Trajan = localFont({
  src: "../../public/fonts/Trajan-Regular.ttf",
  variable: "--font-trajan",
});

export const metadata: Metadata = {
  title: "Historical Figures Quiz",
  description:
    "Take this quiz to find out which historical figure you are most like!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LangProvider>
        <body className={`${Trajan.variable} font-sans`}>{children}</body>
      </LangProvider>
    </html>
  );
}
