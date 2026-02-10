import { useState } from "react";
import type { Category, Unit } from "../../types/shopping";

export type NewItemData = {
  name: string;
  qty: number;
  unit: Unit;
  category: Category;
};

type ItemFormProps = {
  onAdd: (data: NewItemData) => void;
};

export function ItemForm({ onAdd }: ItemFormProps) {
  const [name, setName] = useState<string>("");
  const [qty, setQty] = useState<number>(1);
  const [unit, setUnit] = useState<Unit>("unid.");
  const [category, setCategory] = useState<Category>("Outros");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name.trim() === "") return;
    if (qty <= 0) return;

    onAdd({ name: name.trim(), qty, unit, category });

    setName("");
    setQty(1);
    setUnit("unid.");
    setCategory("Outros");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Item"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={qty}
          min={1}
          onChange={(e) => setQty(Number(e.target.value))}
        />
        <select value={unit} onChange={(e) => setUnit(e.target.value as Unit)}>
          <option value={"unid."}>Unidade</option>
          <option value={"g"}>Grama</option>
          <option value={"ml"}>ml</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          <option value={"Hortifruti"}>Hortifruti</option>
          <option value={"Laticínios"}>Laticínios</option>
          <option value={"Padaria"}>Padaria</option>
          <option value={"Bebidas"}>Bebidas</option>
          <option value={"Outros"}>Outros</option>
        </select>
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
}
