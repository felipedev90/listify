import type { ShoppingItem } from "../../types/shopping";

type ItemRowProps = {
  item: ShoppingItem;
};

export function ItemRow({ item }: ItemRowProps) {
  return (
    <div>
      <input type="checkbox" checked={item.checked} readOnly />
      <h3>{item.name}</h3>
      <span>
        {item.qty} {item.unit}
      </span>
      <p>{item.category}</p>
    </div>
  );
}
