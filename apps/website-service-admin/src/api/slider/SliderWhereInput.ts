import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SliderWhereInput = {
  id?: StringFilter;
  imageFile?: JsonFilter;
  imageUrl?: StringNullableFilter;
  link?: StringNullableFilter;
  title?: StringNullableFilter;
};
