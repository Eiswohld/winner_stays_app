import type { Question } from "../types/Quiz";

interface Props {
  question: Question;
  onAnswer: (answer: "A" | "B") => void;
  selectedAnswer: "A" | "B" | null;
}

export default function QuestionCard({
  question,
  onAnswer,
  selectedAnswer,
}: Props) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <article className="question-card">
      <h2>{question.question}</h2>

      <section className="answer-options">
        <button
          className={`answer-button ${
            selectedAnswer === "A"
              ? question.correctAnswer === "A"
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => onAnswer("A")}
          disabled={selectedAnswer !== null}
        >
          {question.optionA}
        </button>

        <button
          className={`answer-button ${
            selectedAnswer === "B"
              ? question.correctAnswer === "B"
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => onAnswer("B")}
          disabled={selectedAnswer !== null}
        >
          {question.optionB}
        </button>
      </section>

      {selectedAnswer !== null && (
        <section className="feedback">
          <h3 className={isCorrect ? "feedback-correct" : "feedback-incorrect"}>
            {isCorrect ? "Rätt svar!" : "Fel svar!"}
          </h3>

          <p>{question.explanation}</p>
        </section>
      )}
    </article>
  );
}
