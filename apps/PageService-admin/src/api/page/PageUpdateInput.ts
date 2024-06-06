import { InputJsonValue } from "../../types";

export type PageUpdateInput = {
  content?: string | null;
  contentJson?: InputJsonValue;
  contentOld?: string | null;
  slug?: string | null;
  title?: string | null;
};
