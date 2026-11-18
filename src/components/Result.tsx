interface Props {
  score: number;
  total: number;
  onRestart: () => void;
}

export default function Result({ score, total, onRestart }: Props) {
  return (
    <section className="result">
      <h1>Quiz klart!</h1>

      <h2>
        Du fick {score} av {total} rätt!
      </h2>

      <button onClick={onRestart}>Börja om</button>
    </section>
  );
}
