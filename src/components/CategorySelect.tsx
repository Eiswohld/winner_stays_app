import { categories } from "../data/Questions";
import type { Category } from "../types/Quiz";

interface CategorySelectProps {
  onSelect: (category: Category) => void;
}

export default function CategorySelect({ onSelect }: CategorySelectProps) {
  return (
    <section className="categories">
      <h2>Välj en kategori</h2>

      <section className="category-grid">
        {categories.map((category) => (
          <button key={category.id} onClick={() => onSelect(category.id)}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </button>
        ))}
      </section>
    </section>
  );
}
