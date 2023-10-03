import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

const ideas = sqliteTable("ideas", {
  id: text("id").primaryKey(),
  description: text("description"),
});

export const tables = {
  ideas: ideas,
};

export type Idea = InferSelectModel<typeof ideas>;
export type NewIdea = InferInsertModel<typeof ideas>;
