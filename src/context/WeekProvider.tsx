import { useState, useMemo } from "react";
import { loadSelectedWeekId, saveSelectedWeekId } from "../services/weekRepo";
import { WeekContext } from "./WeekContext";
import type { WeekId } from "../types/shopping";
import type { ReactNode } from "react";

export type WeekContextValue = {
  weekId: WeekId;
  setWeekId: (next: WeekId) => void;
};

export function WeekProvider({ children }: { children: ReactNode }) {
  const [weekId, setWeekIdState] = useState<WeekId>(() => loadSelectedWeekId());

  function setWeekId(next: WeekId) {
    setWeekIdState(next);
    saveSelectedWeekId(next);
  }

  const value = useMemo(() => ({ weekId, setWeekId }), [weekId]);

  return <WeekContext.Provider value={value}>{children}</WeekContext.Provider>;
}
