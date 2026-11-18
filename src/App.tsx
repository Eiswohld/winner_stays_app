import CategorySelect from "./components/CategorySelect";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import { useQuiz } from "./hooks/useQuiz";

export default function App() {
  const {
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
  } = useQuiz();

  if (selectedCategory === null) {
    return (
      <main className="app">
        <h1>Alexander den store</h1>
        <CategorySelect onSelect={handleSelectCategory} />
      </main>
    );
  }

  return (
    <main className="app">
      <h1>Alexander den store</h1>

      {!finished ? (
        <section>
          <p>
            Fråga {currentQuestion + 1} av {categoryQuestions.length}
          </p>

          <QuestionCard
            question={categoryQuestions[currentQuestion]}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
          />

          {selectedAnswer !== null && (
            <button onClick={handleNextQuestion}>
              {currentQuestion + 1 === categoryQuestions.length
                ? "Visa resultat"
                : "Nästa fråga"}
            </button>
          )}
        </section>
      ) : (
        <Result
          score={score}
          total={categoryQuestions.length}
          onRestart={handleRestart}
        />
      )}

      <button onClick={handleLeaveQuiz}>Lämna quizet och byt kategori</button>
    </main>
  );
}
