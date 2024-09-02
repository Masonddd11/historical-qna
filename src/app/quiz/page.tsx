"use client";

import { useState, useRef } from "react";
import { quizQuestions, quizResults } from "../../const";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/navigation";
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ShareIcon } from "@heroicons/react/24/outline";
import html2canvas from "html2canvas";

interface Option {
  option: string;
  text: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface Results {
  title: string;
  description: string;
  image?: StaticImageData;
}

type ResultKey = keyof typeof quizResults;

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<Results | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const resultRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
    if (currentQuestionIndex === quizQuestions.length - 1) {
      calculateResult();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateResult = () => {
    const count: { [key in ResultKey]: number } = { A: 0, B: 0, C: 0, D: 0 };

    Object.values(answers).forEach((answer) => {
      count[answer as ResultKey]++;
    });

    const finalResult = Object.keys(count).reduce((a, b) =>
      count[a as ResultKey] > count[b as ResultKey] ? a : b
    ) as ResultKey;

    setResult(quizResults[finalResult]);
    setShowResult(true);
  };

  const handleCapture = async () => {
    if (!resultRef.current) return;

    try {
      const canvas = await html2canvas(resultRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      setScreenshot(dataUrl);
      setShowModal(true);
    } catch (error) {
      console.error("Screenshot capture failed", error);
    }
  };

  const handleShare = () => {
    if (!screenshot) return;

    fetch(screenshot)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "quiz-result.png", {
          type: "image/png",
        });

        if (navigator.share) {
          navigator
            .share({
              title: `I am a ${result?.title}!`,
              files: [file],
            })
            .then(() => console.log("Share successful"))
            .catch((error) => console.log("Share failed", error));
        } else {
          alert("Sharing is not supported on this device.");
        }
      });
  };

  if (showResult && result) {
    return (
      <div className="bg-gradient-to-b from-indigo-100 via-white to-indigo-100 min-h-screen flex flex-col justify-center items-center px-4 md:px-0">
        <div
          className="text-center p-4 md:p-10 bg-white shadow-2xl rounded-2xl max-w-sm md:max-w-xl w-full transition-all duration-75 hover:shadow-xl"
          ref={resultRef}
        >
          <div className="w-full aspect-square relative">
            <Image
              src={result.image ? result.image : "/images/quiz-result.jpg"}
              alt={result.title}
              layout="fill"
              className="object-cover object-top rounded-lg absolute"
            />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl mt-2 font-extrabold text-indigo-700 mb-4 md:mb-6">
            {result.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-10 w-fit">
            {result.description}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <button
            className="bg-indigo-700 text-white py-3 px-6 md:py-4 md:px-10 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-bold tracking-wider"
            onClick={() => router.push("/")}
          >
            Retake Quiz
          </button>
          <ShareIcon
            className="h-8 w-8 text-black mx-4 mt-4 md:mt-0 cursor-pointer"
            onClick={handleCapture}
          />
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 px-4 md:px-0">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg text-center max-w-full md:max-w-lg w-full">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Share Your Result
              </h2>
              {screenshot && (
                <div className="h-1/2 aspect-square relative">
                  <Image
                    src={screenshot}
                    alt="Screenshot of your result"
                    className="rounded-lg mb-4 max-w-full h-auto object-contain absolute"
                    fill
                  />
                </div>
              )}
              <button
                className="bg-indigo-700 text-white py-2 px-4 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 text-lg font-bold"
                onClick={handleShare}
              >
                Share
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 text-lg font-bold ml-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      const copiedAnswers = { ...answers };
      delete copiedAnswers[currentQuestionIndex - 1];
      setAnswers(copiedAnswers);

      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion: Question = quizQuestions[currentQuestionIndex];

  return (
    <div className="bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-12 w-full flex items-center justify-end">
        <HomeIcon
          className="h-8 w-8 text-indigo-700 mx-4 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <ArrowUturnLeftIcon
          className="h-8 w-8 text-indigo-700 mx-4 cursor-pointer"
          onClick={handleGoBack}
        />
      </div>
      <div className="container mx-auto px-6 py-12 text-center h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}{" "}
          </h2>
          <ProgressBar
            progress={(currentQuestionIndex / quizQuestions.length) * 100}
          />
        </div>
        <p className="text-xl text-gray-700 mb-10 mt-6">
          {currentQuestion.question}
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl">
          {currentQuestion.options.map((option) => (
            <button
              key={option.option}
              onClick={() => handleAnswer(option.option)}
              className="bg-indigo-600 text-white py-1 px-2 md:py-4 md:px-6 rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:scale-105 flex items-center justify-center h-40 text-md md:text-lg lg:text-xl font-semibold leading-tight md:leading-normal tracking-tight md:tracking-normal"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
