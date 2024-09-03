import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>{children}</body>
      </LangProvider>
    </html>
  );
}
