import type { Question, QuizCategory } from "../types/Quiz";

export const categories: QuizCategory[] = [
  {
    id: "alexander",
    title: "Alexander den store",
    description: "Hans liv, uppväxt och personlighet",
  },
  {
    id: "wars",
    title: "Krigen och erövringarna",
    description: "Hans fälttåg, strategier och militära segrar",
  },
  {
    id: "macedonia",
    title: "Makedonien som land",
    description: "Riket, samhället och dess historia",
  },
];

export const questions: Question[] = [
  // ALEXANDER DEN STORE
  {
    id: 1,
    category: "alexander",
    question: "Alexander den store föddes år 356 f.Kr.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Alexander föddes år 356 f.Kr. i Pella, Makedoniens huvudstad.",
  },
  {
    id: 2,
    category: "alexander",
    question: "Alexander blev kung när han var 30 år gammal.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Han blev kung år 336 f.Kr., när han var ungefär 20 år gammal.",
  },
  {
    id: 3,
    category: "alexander",
    question: "Aristoteles var Alexanders lärare.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Aristoteles undervisade Alexander i bland annat filosofi, vetenskap och litteratur.",
  },
  {
    id: 4,
    category: "alexander",
    question: "Alexanders berömda häst hette Bukefalos.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Bukefalos var Alexanders berömda stridshäst och följde honom under flera fälttåg.",
  },
  {
    id: 5,
    category: "alexander",
    question: "Alexander föddes i Aten.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Han föddes i Pella, som var huvudstad i det antika Makedonien.",
  },
  {
    id: 6,
    category: "alexander",
    question: "Alexanders far hette Filip II.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Filip II var kung av Makedonien och byggde upp den starka armé som Alexander senare använde.",
  },
  {
    id: 7,
    category: "alexander",
    question: "Alexander dog år 323 f.Kr. i Babylon.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation: "Alexander dog i Babylon år 323 f.Kr., endast 32 år gammal.",
  },
  {
    id: 8,
    category: "alexander",
    question: "Alexander förlorade aldrig något av sina stora fältslag.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Alexander vann alla de stora fältslag där han personligen ledde sin armé.",
  },
  {
    id: 9,
    category: "alexander",
    question: "Alexander grundade staden Alexandria i Egypten.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Alexandria grundades år 331 f.Kr. och blev senare ett viktigt centrum för handel, vetenskap och kultur.",
  },
  {
    id: 10,
    category: "alexander",
    question: "Alexander blev kejsare över Romarriket.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Alexander härskade över ett stort makedonskt imperium. Romarriket var en separat makt.",
  },

  // KRIGEN OCH ERÖVRINGARNA
  {
    id: 11,
    category: "wars",
    question: "Alexander inledde sitt fälttåg mot Perserriket år 334 f.Kr.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "År 334 f.Kr. korsade Alexander Hellesponten med sin armé och inledde invasionen av Perserriket.",
  },
  {
    id: 12,
    category: "wars",
    question: "Alexander besegrade Perserriket utan att behöva strida.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Han utkämpade flera stora slag mot perserna, bland annat vid Issos och Gaugamela.",
  },
  {
    id: 13,
    category: "wars",
    question: "Slaget vid Gaugamela ägde rum år 331 f.Kr.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Alexander besegrade den persiske kungen Dareios III vid Gaugamela. Det blev en avgörande seger.",
  },
  {
    id: 14,
    category: "wars",
    question: "Alexander stred mot den persiske kungen Dareios III.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Dareios III var Perserrikets kung och Alexanders främsta motståndare under erövringen av riket.",
  },
  {
    id: 15,
    category: "wars",
    question: "Alexander erövrade aldrig Egypten.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Alexander tog kontroll över Egypten år 332 f.Kr. och grundade senare staden Alexandria.",
  },
  {
    id: 16,
    category: "wars",
    question: "Alexander och hans armé nådde Indien under sina fälttåg.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Alexander invaderade nordvästra Indien och stred bland annat mot kung Poros vid floden Hydaspes år 326 f.Kr.",
  },
  {
    id: 17,
    category: "wars",
    question: "Alexanders armé bestod enbart av soldater från Makedonien.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Under erövringarna anslöt sig även soldater från olika delar av det växande imperiet.",
  },
  {
    id: 18,
    category: "wars",
    question: "Alexander belägrade staden Tyros under sitt fälttåg.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Belägringen av Tyros år 332 f.Kr. varade i ungefär sju månader innan Alexander lyckades inta staden.",
  },
  {
    id: 19,
    category: "wars",
    question:
      "Alexanders soldater vägrade till slut att fortsätta längre österut.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Vid floden Hyphasis år 326 f.Kr. vägrade soldaterna att fortsätta. De var utmattade efter många års krigföring.",
  },
  {
    id: 20,
    category: "wars",
    question: "Alexander förlorade slaget vid Issos mot Dareios III.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Alexander vann slaget vid Issos år 333 f.Kr. och tvingade Dareios III att fly.",
  },

  // MAKEDONIEN SOM LAND
  {
    id: 21,
    category: "macedonia",
    question: "Makedonien låg norr om de stora grekiska stadsstaterna.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Det antika Makedonien låg i norra delen av den grekiska världen, norr om bland annat Aten och Sparta.",
  },
  {
    id: 22,
    category: "macedonia",
    question: "Makedonien var en demokrati under Alexander den stores tid.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Makedonien var en monarki där kungen hade den högsta politiska och militära makten.",
  },
  {
    id: 23,
    category: "macedonia",
    question: "Pella var Makedoniens huvudstad under Alexander.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Pella var kungarikets huvudstad och ett viktigt politiskt och kulturellt centrum.",
  },
  {
    id: 24,
    category: "macedonia",
    question: "Filip II reformerade och stärkte den makedonska armén.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Filip II utvecklade bland annat den makedonska falangen och gjorde armén till en effektiv krigsmakt.",
  },
  {
    id: 25,
    category: "macedonia",
    question: "Makedonien styrdes av en folkvald president.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Landet styrdes av en kung. Alexander ärvde tronen efter sin far Filip II.",
  },
  {
    id: 26,
    category: "macedonia",
    question: "Makedonien hade en stark militär tradition.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Den makedonska armén var känd för sin organisation, sitt kavalleri och sina långa spjut som kallades sarissor.",
  },
  {
    id: 27,
    category: "macedonia",
    question:
      "Makedonien var ett mäktigt kungarike redan innan Alexander blev kung.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Under Filip II växte Makedonien till en stark militärmakt med stort inflytande över den grekiska världen.",
  },
  {
    id: 28,
    category: "macedonia",
    question: "Det antika Makedonien låg i dagens Nordafrika.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "B",
    explanation:
      "Det antika Makedonien låg på Balkanhalvön, i området kring dagens norra Grekland och delar av närliggande Balkan.",
  },
  {
    id: 29,
    category: "macedonia",
    question: "Makedoniens armé hade både infanteri och kavalleri.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "Infanteriet kämpade bland annat i falangformation medan kavalleriet användes för snabba och kraftfulla attacker.",
  },
  {
    id: 30,
    category: "macedonia",
    question: "Alexander ärvde kungamakten efter sin far Filip II.",
    optionA: "Sant",
    optionB: "Falskt",
    correctAnswer: "A",
    explanation:
      "När Filip II mördades år 336 f.Kr. tog Alexander över tronen och blev kung av Makedonien.",
  },
];
