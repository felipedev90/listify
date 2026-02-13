import { useContext } from "react";
import { WeekContext } from "./WeekContext";

export function useWeek() {
  const ctx = useContext(WeekContext);
  if (!ctx) throw new Error("useWeek must be used within a WeekProvider");
  return ctx;
}
