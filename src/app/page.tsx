"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { homepageEn } from "../constants/en";
import { homepageZh } from "../constants/zh";
import { useLang } from "@/context/LangContext";
import { TypewriterEffect } from "@/components/TypeWriterEffect";

const homepage = {
  en: homepageEn,
  zh: homepageZh,
};

export default function Home() {
  const { language, setLanguage } = useLang();

  const currentTexts = homepage[language as "en" | "zh"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <Head>
        <title>{currentTexts.title}</title>
        <meta name="description" content={currentTexts.description} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="bg-blue-700 text-white py-6 shadow-lg relative h-[80px]">
        <Image
          src="/question-banner.jpeg"
          alt="background"
          fill
          className="object-cover z-0"
        />
        <div className="relative container mx-auto flex justify-end items-center h-[40px] px-2 z-10">
          <button className="w-fit py-2 px-4 bg-white rounded-full shadow-md hover:bg-blue-200 transition duration-300">
            {language === "en" ? (
              <p
                className="cursor-pointer font-semibold text-purple-900 whitespace-nowrap text-sm"
                onClick={() => {
                  setLanguage("zh");
                }}
              >
                中文
              </p>
            ) : (
              <p
                className="cursor-pointer font-semibold text-blue-700 whitespace-nowrap text-sm"
                onClick={() => {
                  setLanguage("en");
                }}
              >
                ENG
              </p>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container relative mx-auto px-6 py-12 text-center flex-grow flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-6xl font-extrabold text-gray-800 mb-8 leading-tight">
          <TypewriterEffect
            key={language}
            lang={language}
            words={
              language === "en"
                ? currentTexts.mainTitle
                    .split(" ")
                    .map((word) => ({ text: word }))
                : currentTexts.mainTitle
                    .split("")
                    .map((word) => ({ text: word }))
            }
          />
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
          {currentTexts.mainDescription}
          <br />
          {currentTexts.joinDescription}
        </p>
        <Link href="/quiz">
          <button className="bg-purple-800 text-white py-4 px-10 rounded-full shadow-xl hover:bg-purple-900 transition duration-300 text-xl flex items-center justify-center font-bold transform hover:scale-105">
            {currentTexts.startButton}
          </button>
        </Link>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[1400px] bg-gradient-to-br from-purple-800 to-transparent opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-purple-800 to-transparent opacity-20 rounded-full"></div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">{currentTexts.footer}</p>
        </div>
      </footer>
    </div>
  );
}
