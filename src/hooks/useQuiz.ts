import { useState } from "react";
import { questions } from "../data/Questions";
import type { Category } from "../types/Quiz";

export function useQuiz() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | null>(null);

  const [finished, setFinished] = useState(false);

  const categoryQuestions = questions.filter(
    (question) => question.category === selectedCategory,
  );

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    resetQuiz();
  };

  const handleAnswer = (answer: "A" | "B") => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === categoryQuestions[currentQuestion].correctAnswer) {
      setScore((oldScore) => oldScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < categoryQuestions.length) {
      setCurrentQuestion((oldQuestion) => oldQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setFinished(false);
  };

  const handleRestart = () => {
    resetQuiz();
  };

  const handleLeaveQuiz = () => {
    resetQuiz();
    setSelectedCategory(null);
  };

  return {
    selectedCategory,
    currentQuestion,
    score,
    selectedAnswer,
    finished,
    categoryQuestions,
    handleSelectCategory,
    handleAnswer,
    handleNextQuestion,
    handleRestart,
    handleLeaveQuiz,
  };
}
