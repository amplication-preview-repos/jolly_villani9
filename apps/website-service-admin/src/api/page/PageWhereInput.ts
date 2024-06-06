import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type PageWhereInput = {
  content?: StringNullableFilter;
  contentJson?: JsonFilter;
  contentOld?: StringNullableFilter;
  id?: StringFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
};
