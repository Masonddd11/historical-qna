"use client";

import Head from "next/head";
import Link from "next/link";

import { homepageEn } from "../constants/en";
import { homepageZh } from "../constants/zh";
import { useLang } from "@/context/LangContext";

const homepage = {
  en: homepageEn,
  zh: homepageZh,
};

export default function Home() {
  const { language, setLanguage } = useLang();

  console.log(language, setLanguage); // Debugging to check if useLang is working

  const currentTexts = homepage[language as "en" | "zh"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>{currentTexts.title}</title>
        <meta name="description" content={currentTexts.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center h-[80px]">
          <h1 className="text-4xl font-bold">{currentTexts.header}</h1>
          <button className="w-fit py-1 px-2 bg-white rounded-xl">
            {language === "en" ? (
              <p
                className="w-fit cursor-pointer font-semibold text-blue-600"
                onClick={() => setLanguage("zh")}
              >
                中文
              </p>
            ) : (
              <p
                className="w-fit cursor-pointer font-semibold text-blue-600"
                onClick={() => setLanguage("en")}
              >
                ENG{" "}
              </p>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 text-center flex-grow flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {currentTexts.mainTitle}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          {currentTexts.mainDescription}
        </p>
        <Link href="/quiz">
          <button className="bg-blue-600 text-white py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-xl font-semibold">
            {currentTexts.startButton}
          </button>
        </Link>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>{currentTexts.footer}</p>
        </div>
      </footer>
    </div>
  );
}
