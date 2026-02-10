import { seedItems } from "../../utils/seedItems";
import { ItemRow } from "../../components/ItemRow/ItemRow";

export function ListPage() {
  const weekId = "2026-W07";
  const items = seedItems(weekId);

  return (
    <main style={{ padding: 24 }}>
      <h2>Shopping List</h2>
      {items.length === 0 ? (
        <p>Nenhum item...</p>
      ) : (
        items.map((item) => <ItemRow key={item.id} item={item} />)
      )}
    </main>
  );
}
