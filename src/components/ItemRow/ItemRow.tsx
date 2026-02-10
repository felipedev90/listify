import type { ShoppingItem } from "../../types/shopping";

type ItemRowProps = {
  item: ShoppingItem;
  onDelete: (id: string) => void;
};

export function ItemRow({ item, onDelete }: ItemRowProps) {
  return (
    <div>
      <input type="checkbox" checked={item.checked} readOnly />
      <h3>{item.name}</h3>
      <span>
        {item.qty} {item.unit}
      </span>
      <p>{item.category}</p>
      <button type="button" onClick={() => onDelete(item.id)}>
        🗑️
      </button>
    </div>
  );
}
