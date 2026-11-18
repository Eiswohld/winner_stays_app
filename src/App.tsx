import { useState, useEffect } from "react";
import { questions } from "./data/Questions";
import type { Category } from "./types/Quiz";

import CategorySelect from "./components/CategorySelect";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | null>(null);

  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const categoryQuestions = questions.filter(
    (question) => question.category === selectedCategory,
  );

  const currentQuestion = categoryQuestions[currentQuestionIndex];

  const handleAnswer = (answer: "A" | "B") => {
    if (selectedAnswer !== null || !currentQuestion) return;

    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  useEffect(() => {
    if (selectedAnswer === null) return;

    const timer = window.setTimeout(
      () => {
        if (currentQuestionIndex < categoryQuestions.length - 1) {
          setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
          setSelectedAnswer(null);
        } else {
          setIsFinished(true);
        }
      },
      selectedAnswer === currentQuestion?.correctAnswer ? 2500 : 5000,
    );

    return () => window.clearTimeout(timer);
  }, [selectedAnswer, currentQuestionIndex, categoryQuestions.length]);

  const startCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  const backToCategories = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <main className="app">
      {!selectedCategory ? (
        <section className="start-page">
          <header className="hero">
            <h1>Alexander den store</h1>
          </header>

          <CategorySelect onSelect={startCategory} />
        </section>
      ) : isFinished ? (
        <Result
          score={score}
          total={categoryQuestions.length}
          onRestart={backToCategories}
        />
      ) : currentQuestion ? (
        <section className="quiz-page">
          <header className="quiz-header">
            <h1>
              {currentQuestion.category === "alexander"
                ? "Alexander den store"
                : currentQuestion.category === "wars"
                  ? "Krigen och erövringarna"
                  : "Makedonien som land"}
            </h1>

            <p>
              Fråga {currentQuestionIndex + 1} av {categoryQuestions.length}
            </p>
          </header>

          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
          />

          <button onClick={backToCategories}>BYT KATEGORI</button>
        </section>
      ) : null}
    </main>
  );
}
