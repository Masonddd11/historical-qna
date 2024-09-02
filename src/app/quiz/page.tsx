"use client";

import { useState } from "react";
import { quizQuestions, quizResults } from "../../const";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/navigation";

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
}

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<Results | null>(null);

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
    const count: { [key: string]: number } = { A: 0, B: 0, C: 0, D: 0 };

    Object.values(answers).forEach((answer) => {
      count[answer]++;
    });

    const finalResult = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    setResult(quizResults[finalResult as keyof typeof quizResults]);
    setShowResult(true);
  };

  if (showResult && result) {
    return (
      <div className="bg-gradient-to-b from-indigo-100 via-white to-indigo-100 h-screen flex flex-col justify-center items-center">
        <div className="text-center p-10 bg-white shadow-2xl rounded-2xl max-w-xl transition-all duration-75 hover:shadow-xl">
          <h2 className="text-6xl font-extrabold text-indigo-700 mb-6">
            {result.title}
          </h2>
          <p className="text-xl text-gray-700 mb-10 w-fit ">{result.description}</p>
          <button
            className="bg-indigo-700 text-white py-4 px-10 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105 text-lg font-bold tracking-wider"
            onClick={() => router.push("/")}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion: Question = quizQuestions[currentQuestionIndex];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 text-center h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </h2>
          <ProgressBar
            progress={(currentQuestionIndex / quizQuestions.length) * 100}
          />
        </div>
        <p className="text-xl text-gray-700 mb-10 mt-6">
          {currentQuestion.question}
        </p>
        <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
          {currentQuestion.options.map((option) => (
            <button
              key={option.option}
              onClick={() => handleAnswer(option.option)}
              className="bg-indigo-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:scale-105 flex items-center justify-center h-40 text-xl font-semibold"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
