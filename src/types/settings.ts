export type SortOrder = "createdAt_desc" | "createdAt_asc" | "name_asc";

export type GroupMode = "category" | "none";

export type Settings = {
  sortOrder: SortOrder;
  groupMode: GroupMode;
};
