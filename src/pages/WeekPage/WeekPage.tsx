import { useState } from "react";
import type { WeekId } from "../../types/shopping";
import {
  loadSelectedWeekId,
  saveSelectedWeekId,
} from "../../services/weekRepo";

export function WeekPage() {
  const [weekId, setWeekId] = useState<WeekId>(() => loadSelectedWeekId());

  return (
    <main style={{ padding: 24 }}>
      <h2>Weekly Overview</h2>
      <input
        type="week"
        value={weekId}
        onChange={(e) => {
          const next = e.target.value as WeekId;
          setWeekId(next);
          saveSelectedWeekId(next);
        }}
      />
    </main>
  );
}
