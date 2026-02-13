import { useWeek } from "../../context/useWeek";
import type { WeekId } from "../../types/shopping";

export function WeekPage() {
  const { weekId, setWeekId } = useWeek();

  return (
    <main style={{ padding: 24 }}>
      <h2>Weekly Overview</h2>
      <label>
        Selecione a semana: <br />
        <input
          type="week"
          value={weekId}
          onChange={(e) => {
            const next = e.target.value as WeekId;
            if (!next) return;
            setWeekId(next);
          }}
        />
      </label>
    </main>
  );
}
