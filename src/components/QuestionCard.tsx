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
  return (
    <article className="question-card">
      <h2>{question.question}</h2>

      <button onClick={() => onAnswer("A")} disabled={selectedAnswer !== null}>
        A. {question.optionA}
      </button>

      <button onClick={() => onAnswer("B")} disabled={selectedAnswer !== null}>
        B. {question.optionB}
      </button>

      {selectedAnswer !== null && (
        <div>
          <h3>
            {selectedAnswer === question.correctAnswer
              ? "Rätt svar!"
              : "Fel svar!"}
          </h3>

          <p>{question.explanation}</p>
        </div>
      )}
    </article>
  );
}
