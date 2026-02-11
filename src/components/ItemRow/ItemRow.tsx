import type { ShoppingItem } from "../../types/shopping";
import { ItemForm, type NewItemData } from "../ItemForm/ItemForm";

type ItemRowProps = {
  item: ShoppingItem;
  onDelete: (id: string) => void;
  onTogglePurchased: (id: string) => void;

  isEditing: boolean;
  onStartEditing: (id: string) => void;
  onCancelEdit: () => void;
  onUpdate: (id: string, data: NewItemData) => void;
};

export function ItemRow({
  item,
  onDelete,
  onTogglePurchased,
  isEditing,
  onStartEditing,
  onUpdate,
  onCancelEdit,
}: ItemRowProps) {
  if (isEditing) {
    return (
      <ItemForm
        key={item.id}
        onSubmit={(data) => onUpdate(item.id, data)}
        initialValues={{
          name: item.name,
          qty: item.qty,
          unit: item.unit,
          category: item.category,
        }}
        onCancel={onCancelEdit}
        submitLabel="Salvar"
      />
    );
  }

  return (
    <div>
      <strong>{item.name}</strong>
      <span>
        {item.qty} {item.unit}
      </span>
      <p>{item.category}</p>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => {
          onTogglePurchased(item.id);
        }}
      />

      <button type="button" onClick={() => onStartEditing(item.id)}>
        ✏️
      </button>

      <button type="button" onClick={() => onDelete(item.id)}>
        🗑️
      </button>
    </div>
  );
}
