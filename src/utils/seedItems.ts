import type { ShoppingItem } from "../types/shopping";

export function seedItems(weekId: string): ShoppingItem[] {
  const now = Date.now();

  return [
    {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: "Banana",
      qty: 6,
      unit: "unid.",
      category: "Hortifruti",
      checked: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: "Pão francês",
      qty: 2,
      unit: "unid.",
      category: "Padaria",
      checked: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: "Queijo Mussarela",
      qty: 300,
      unit: "g",
      category: "Laticínios",
      checked: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: "Coquinha",
      qty: 12,
      unit: "unid.",
      category: "Bebidas",
      checked: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: "Detergente",
      qty: 2,
      unit: "unid.",
      category: "Outros",
      checked: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      weekId: weekId,
      name: "Requeijão",
      qty: 1,
      unit: "unid.",
      category: "Laticínios",
      checked: false,
      createdAt: now,
      updatedAt: now,
    },
  ];
}
