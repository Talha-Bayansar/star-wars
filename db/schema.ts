import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ideas = sqliteTable("ideas", {
  id: integer("id").primaryKey(),
  description: text("description"),
});

export const tables = {
  ideas: ideas,
};

export type Idea = typeof ideas.$inferInsert;
export type NewIdea = typeof ideas.$inferInsert;
