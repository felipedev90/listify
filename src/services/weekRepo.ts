import type { WeekId } from "../types/shopping";
import { storageGet, storageSet } from "./storageRepo";
import { getWeekId } from "../utils/getWeekId";

const KEY = "listify:selectedWeekId";

// Se não existir nada salvo, ele define uma semana padrão. Ou seja: “a semana atual”.
export function getDefaultWeekId(): WeekId {
  return getWeekId(new Date());
}

// “O usuário já tinha escolhido uma semana antes?”
// Se tiver salvo no localStorage → retorna essa.
// Se não tiver → retorna a semana padrão (semana atual).
export function loadSelectedWeekId(): WeekId {
  return storageGet<WeekId>(KEY) ?? getDefaultWeekId();
}

// Quando o usuário escolhe outra semana, você salva:
export function saveSelectedWeekId(weekId: WeekId): void {
  storageSet<WeekId>(KEY, weekId);
}
