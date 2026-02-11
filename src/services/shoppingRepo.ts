import type { ShoppingItem, WeekId } from "../types/shopping";
import { storageGet, storageSet } from "./storageRepo";

function itemsKey(weekId: WeekId) {
  return `listify:items:${weekId}`;
}

export function loadItems(weekId: WeekId): ShoppingItem[] | null {
  return storageGet<ShoppingItem[]>(itemsKey(weekId));
}

export function saveItems(weekId: WeekId, items: ShoppingItem[]): void {
  storageSet(itemsKey(weekId), items);
}
