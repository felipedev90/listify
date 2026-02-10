import type { Category, ShoppingItem, Unit } from "../../types/shopping";

const itemId = crypto.randomUUID();
const unit: Unit = "unid";
const category: Category = "Padaria";

const items: ShoppingItem[] = [
  {
    id: itemId,
    weekId: "2026-W07",
    name: "Pão de forma",
    qty: 1,
    unit: unit,
    category: category,
    checked: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export function ListPage() {
  return (
    <main style={{ padding: 24 }}>
      <h2>Shopping List</h2>
      <p>Em construção</p>
    </main>
  );
}
