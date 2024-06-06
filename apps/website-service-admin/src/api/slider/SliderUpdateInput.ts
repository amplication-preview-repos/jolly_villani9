import { InputJsonValue } from "../../types";

export type SliderUpdateInput = {
  imageFile?: InputJsonValue;
  imageUrl?: string | null;
  link?: string | null;
  title?: string | null;
};
