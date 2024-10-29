import ChineseNobel from "/public/chinese-nobel.png";
import MughalPrince from "/public/mughal-prince.png";
import OttomanSultan from "/public/ottoman-sultan.png";
import Samurai from "/public/samurai.png";

// homepage constants
export const homepageEn = {
  title: "Historical Figure Quiz",
  description: "Discover which historical figure you resemble the most!",
  header: "Which historical figure are you?",
  mainTitle: "What Historical Figure Are You?",
  mainDescription:
    "Imagine you were born 300 years ago. Are you a prince? A king? A samurai?",
  joinDescription:
    "Take this quiz to find out and see which historical figure you resemble the most!",
  startButton: "Start Quiz",
  footer: `© ${new Date().getFullYear()} CityUHK All rights reserved.`,
};

// questions constants

export const quizQuestionsEn = [
  {
    id: 1,
    question: "How do you prefer to spend your leisure time?",
    options: [
      { option: "A", text: "Exploring nature and hunting expeditions" },
      { option: "B", text: "Practicing martial arts and meditating" },
      { option: "C", text: "Reading poetry and studying philosophy" },
      {
        option: "D",
        text: "Hosting lavish banquets and engaging in statecraft",
      },
    ],
  },
  {
    id: 2,
    question: "What is most important to you?",
    options: [
      { option: "A", text: "Art and culture" },
      { option: "B", text: "Honor and duty" },
      { option: "C", text: "Wisdom and tradition" },
      { option: "D", text: "Power and influence" },
    ],
  },
  {
    id: 3,
    question:
      "If you were born in the 18th century, how would you handle a conflict with a neighbouring state?",
    options: [
      { option: "A", text: "Use diplomacy and strategic marriages" },
      { option: "B", text: "Prepare your warriors and engage in battle" },
      { option: "C", text: "Seek counsel from advisors and scholars" },
      { option: "D", text: "Demonstrate military might and form alliances" },
    ],
  },
  {
    id: 4,
    question: "What is your ideal form of governance?",
    options: [
      {
        option: "A",
        text: "A centralized empire with a strong cultural identity",
      },
      { option: "B", text: "A feudal system with a code of conduct" },
      { option: "C", text: "A meritocratic bureaucracy based on education" },
      { option: "D", text: "An imperial court with a focus on expansion" },
    ],
  },
  {
    id: 5,
    question: "How do you view your relationship with the people you govern?",
    options: [
      { option: "A", text: "As a patron of the arts and protector of culture" },
      {
        option: "B",
        text: "As a leader who embodies the values of the warrior class",
      },
      { option: "C", text: "As a benevolent ruler who upholds traditions" },
      { option: "D", text: "As a sovereign who commands respect and loyalty" },
    ],
  },
  {
    id: 6,
    question: "What type of legacy would you like to leave behind?",
    options: [
      {
        option: "A",
        text: "Magnificent architectural wonders and artistic achievements",
      },
      {
        option: "B",
        text: "A legacy of bravery and strict adherence to a code of honor",
      },
      {
        option: "C",
        text: "Contributions to literature, philosophy, and governance",
      },
      {
        option: "D",
        text: "Expansive territories and a powerful, enduring empire",
      },
    ],
  },
  {
    id: 7,
    question: "Which of these symbols resonates most with you?",
    options: [
      {
        option: "A",
        text: "A peacock feather (symbol of beauty and immortality)",
      },
      { option: "B", text: "A katana (symbol of honour and precision)" },
      { option: "C", text: "A dragon (symbol of power and wisdom)" },
      {
        option: "D",
        text: "A crescent moon and star (symbol of faith and leadership)",
      },
    ],
  },
  {
    id: 8,
    question: "What is your approach to education and knowledge?",
    options: [
      {
        option: "A",
        text: "Patronize scholars and poets, and promote learning",
      },
      { option: "B", text: "Value discipline and skill in specific arts" },
      {
        option: "C",
        text: "Encourage scholarly pursuits and civil service exams",
      },
      {
        option: "D",
        text: "Blend practical governance with strategic knowledge",
      },
    ],
  },
  {
    id: 9,
    question: "Which quality do you most admire in others?",
    options: [
      { option: "A", text: "Artistic talent" },
      { option: "B", text: "Loyalty and bravery" },
      { option: "C", text: "Intellectual prowess" },
      { option: "D", text: "Political acumen" },
    ],
  },
  {
    id: 10,
    question: "What kind of environment do you feel most at home in?",
    options: [
      { option: "A", text: "Opulent palaces and lush gardens" },
      { option: "B", text: "Tranquil temples and battlefields" },
      { option: "C", text: "Elegant courts and scholarly retreats" },
      { option: "D", text: "Grand mosques and bustling marketplaces" },
    ],
  },
];

// result constants
export const quizResultsEn = {
  A: {
    title: "Mughal Prince",
    description:
      "You are a Mughal prince! You value art, culture, and the finer things in life. You are a patron of the arts and deeply involved in the cultural and architectural advancements of your empire. Diplomacy and strategic alliances are your tools of choice in maintaining power.",
    image: MughalPrince,
  },
  B: {
    title: "Samurai",
    description:
      "You are a Samurai! Honor, duty, and martial prowess define you. You adhere to a strict code of conduct and believe in leading by example. Your life is one of discipline, and you value loyalty and bravery above all else.",
    image: Samurai,
  },
  C: {
    title: "Chinese Noble",
    description:
      "You are a Chinese noble! Wisdom, tradition, and scholarly pursuits are central to your identity. You uphold the values of your ancestors and believe in governing through a meritocratic system. You appreciate the arts and contribute to the intellectual legacy of your time.",
    image: ChineseNobel,
  },
  D: {
    title: "Ottoman Sultan",
    description:
      "You are an Ottoman Sultan! Power, influence, and strategic governance are your strengths. You command respect and loyalty from those around you and believe in expanding your empire through both military might and diplomatic skill. Your legacy is one of grandeur and enduring influence.",
    image: OttomanSultan,
  },
};
