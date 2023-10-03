import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const idea = sqliteTable("idea", {
  id: text("id").primaryKey(),
  description: text("description"),
});
