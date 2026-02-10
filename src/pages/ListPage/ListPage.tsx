import { useState } from "react";
import { seedItems } from "../../utils/seedItems";
import { ItemForm } from "../../components/ItemForm/ItemForm";
import { ItemRow } from "../../components/ItemRow/ItemRow";
import type { ShoppingItem } from "../../types/shopping";
import type { NewItemData } from "../../components/ItemForm/ItemForm";

export function ListPage() {
  const weekId = "2026-W07";
  const [items, setItems] = useState<ShoppingItem[]>(seedItems(weekId));

  function handleAdd(data: NewItemData) {
    const now = Date.now();

    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: data.name,
      qty: data.qty,
      unit: data.unit,
      category: data.category,
      checked: false,
      createdAt: now,
      updatedAt: now,
    };

    setItems((prev) => [newItem, ...prev]);
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main style={{ padding: 24 }}>
      <h2>Shopping List</h2>
      <ItemForm onAdd={handleAdd} />
      {items.length === 0 ? (
        <p>Nenhum item...</p>
      ) : (
        items.map((item) => (
          <ItemRow key={item.id} item={item} onDelete={handleDelete} />
        ))
      )}
    </main>
  );
}
