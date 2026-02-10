export type Unit = "unid" | "g" | "ml";

export type Category =
  | "Hortifruti"
  | "Laticínios"
  | "Padaria"
  | "Bebidas"
  | "Outros";

export type WeekId = string;

export type ShoppingItem = {
  id: string;
  weekId: WeekId;
  name: string;
  qty: number;
  unit: Unit;
  category: Category;
  checked: boolean;
  createdAt: number;
  updatedAt: number;
};
