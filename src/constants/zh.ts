import ChineseNobel from "/public/chinese-nobel.jpg";
import MughalPrince from "/public/mughal-prince.jpg";
import OttomanSultan from "/public/ottoman-sultan.jpg";
import Samurai from "/public/samurai.jpg";

export const homepageZh = {
  title: "歷史名人測驗",
  description: "找出你最像哪位歷史人物！",
  header: "歷史名人測驗",
  mainTitle: "你是哪位歷史名人",
  mainDescription: "幻想你在300年前出生。你會是一位王子？一位國王？一位武士？",
  joinDescription: "參加這個測驗，看看你最像哪位歷史名人！",
  startButton: "開始測驗",
  footer: `© ${new Date().getFullYear()} CityUHK All rights reserved.`,
};

export const quizQuestionsZh = [
  {
    id: 1,
    question: "你喜歡怎樣度過閒暇時間？",
    options: [
      { option: "A", text: "探索自然，打獵探險" },
      { option: "B", text: "練習武術，沉思冥想" },
      { option: "C", text: "閱讀詩歌，鑽研哲學" },
      { option: "D", text: "主持盛宴，參與政務" },
    ],
  },
  {
    id: 2,
    question: "什麼對你來說最重要？",
    options: [
      { option: "A", text: "藝術和文化" },
      { option: "B", text: "榮譽和責任" },
      { option: "C", text: "智慧和傳統" },
      { option: "D", text: "權力和影響力" },
    ],
  },
  {
    id: 3,
    question: "如果你出生在18世紀，你會如何處理與鄰國的衝突？",
    options: [
      { option: "A", text: "運用外交手段，締結政治婚姻" },
      { option: "B", text: "訓練士兵，投入戰鬥" },
      { option: "C", text: "向顧問和學者尋求建議" },
      { option: "D", text: "展示軍事實力，組建聯盟" },
    ],
  },
  {
    id: 4,
    question: "你理想中的治理形式是什麼？",
    options: [
      {
        option: "A",
        text: "有強大文化認同的中央集權帝國",
      },
      { option: "B", text: "有行為準則的封建制度" },
      { option: "C", text: "以教育為基礎的精英官僚體系" },
      { option: "D", text: "一個著力擴張的朝廷" },
    ],
  },
  {
    id: 5,
    question: "如何看待你與你所統治的人民的關係？",
    options: [
      { option: "A", text: "作為藝術贊助人和文化守護者" },
      {
        option: "B",
        text: "作為體現武士階級價值觀的領袖",
      },
      { option: "C", text: "作為守護傳統的仁慈統治者" },
      { option: "D", text: "作為值得尊重和效忠的君主" },
    ],
  },
  {
    id: 6,
    question: "你希望留下什麼樣的成就？",
    options: [
      {
        option: "A",
        text: "宏偉的建築奇蹟和藝術成就",
      },
      {
        option: "B",
        text: "英勇無畏和嚴格遵守榮譽準則的傳統",
      },
      {
        option: "C",
        text: "在文學、哲學和管治方面有所貢獻",
      },
      {
        option: "D",
        text: "廣闊的領土和強大持久的帝國",
      },
    ],
  },
  {
    id: 7,
    question: "下列哪一項最能引起你的共鳴？",
    options: [
      {
        option: "A",
        text: "孔雀羽毛（代表美麗和不朽）",
      },
      { option: "B", text: "武士刀（代表榮譽和精準）" },
      { option: "C", text: "龍（代表力量和智慧）" },
      {
        option: "D",
        text: "新月和星星（代表信仰和領導力）",
      },
    ],
  },
  {
    id: 8,
    question: "你如何看待教育和知識？",
    options: [
      {
        option: "A",
        text: "資助學者和詩人，促進學習",
      },
      { option: "B", text: "重視特定藝術領域的紀律和技能" },
      {
        option: "C",
        text: "鼓勵學術追求和科舉考試",
      },
      {
        option: "D",
        text: "將實際管治與戰略知識相結合",
      },
    ],
  },
  {
    id: 9,
    question: "你最欣賞他人的哪種品質？",
    options: [
      { option: "A", text: "藝術才華" },
      { option: "B", text: "忠誠勇敢" },
      { option: "C", text: "智力才能" },
      { option: "D", text: "政治智慧" },
    ],
  },
  {
    id: 10,
    question: "怎樣的環境讓你覺得最舒適自在？",
    options: [
      { option: "A", text: "富麗堂皇的宮殿和鬱鬱蔥蔥的花園" },
      { option: "B", text: "寧靜的寺廟和戰場" },
      { option: "C", text: "優雅的宮廷和學者的靜修處" },
      { option: "D", text: "宏偉的清真寺和熱鬧的市集" },
    ],
  },
];

export const quizResultsZh = {
  A: {
    title: "莫臥兒王子",
    description:
      "你是莫臥兒王子！你重視藝術、文化和生活中美好的事物。你是藝術的贊助者，深入參與自己帝國的文化和建築發展。締結外交和戰略聯盟是你維持權力的工具。",
    image: MughalPrince,
  },
  B: {
    title: "武士",
    description:
      "你是武士！榮譽、責任和武藝精湛是你的強項。遵守嚴格的行為準則，並相信以身作則的領導方式。你的生活充滿紀律，您最重視的是忠誠和勇氣。",
    image: Samurai,
  },
  C: {
    title: "中國貴族",
    description:
      "你是中國貴族！智慧、傳統和學術追求是你的核心特質。你秉承祖先的價值觀，並相信透過精英制度進行治理。你欣賞藝術並為你那個時代的知識遺產作出貢獻。",
    image: ChineseNobel,
  },
  D: {
    title: "鄂圖曼蘇丹",
    description:
      "你是鄂圖曼蘇丹！權力、影響力和策略管理是您的強項。你贏得了周圍人的尊重和效忠，並相信透過軍事力量和外交技巧來擴張你的帝國。您留下的是一份偉大且具有持久影響力的遺產。",
    image: OttomanSultan,
  },
};
