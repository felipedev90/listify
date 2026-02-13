import { createContext } from "react";
import type { WeekId } from "../types/shopping";

export type WeekContextValue = {
  weekId: WeekId;
  setWeekId: (next: WeekId) => void;
};

export const WeekContext = createContext<WeekContextValue | null>(null);
