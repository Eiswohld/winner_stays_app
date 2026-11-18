import { categories } from "../data/Questions";
import type { Category } from "../types/Quiz";

interface CategorySelectProps {
  onSelect: (category: Category) => void;
}

export default function CategorySelect({ onSelect }: CategorySelectProps) {
  return (
    <section>
      <h2>Välj en kategori</h2>

      {categories.map((category) => (
        <button key={category.id} onClick={() => onSelect(category.id)}>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </button>
      ))}
    </section>
  );
}
