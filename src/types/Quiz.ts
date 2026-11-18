export type Category = "alexander" | "wars" | "macedonia";

export interface Question {
  id: number;
  category: Category;
  question: string;
  optionA: string;
  optionB: string;
  correctAnswer: "A" | "B";
  explanation: string;
}

export interface QuizCategory {
  id: Category;
  title: string;
  description: string;
}
