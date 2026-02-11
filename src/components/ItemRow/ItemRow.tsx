import type { ShoppingItem } from "../../types/shopping";
import { ItemForm, type NewItemData } from "../ItemForm/ItemForm";
import styles from "./ItemRow.module.css";

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
    <div className={`${styles.row} ${item.checked ? styles.rowChecked : ""}`}>
      <label className={styles.left}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => {
            onTogglePurchased(item.id);
          }}
        />

        <div className={styles.text}>
          <div
            className={`${styles.title} ${item.checked ? styles.titleChecked : ""}`}
          >
            {item.name}
          </div>
          <div className={styles.meta}>
            {item.qty} {item.unit} • {item.category}
          </div>
        </div>
      </label>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={() => onStartEditing(item.id)}
          className={`${styles.iconBtn} ${styles.editBtn}`}
        >
          ✏️
        </button>
        <button
          type="button"
          onClick={() => onDelete(item.id)}
          className={`${styles.iconBtn} ${styles.deleteBtn}`}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
