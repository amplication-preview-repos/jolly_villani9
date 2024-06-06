import { JsonValue } from "type-fest";

export type Page = {
  content: string | null;
  contentJson: JsonValue;
  contentOld: string | null;
  createdAt: Date;
  id: string;
  slug: string | null;
  title: string | null;
  updatedAt: Date;
};
