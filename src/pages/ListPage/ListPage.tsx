import { useWeek } from "../../context/useWeek";
import { ListPageInner } from "./ListPageInner";

export function ListPage() {
  const { weekId } = useWeek();
  return <ListPageInner key={weekId} weekId={weekId} />;
}
