import { InputJsonValue } from "../../types";

export type SliderCreateInput = {
  imageFile?: InputJsonValue;
  imageUrl?: string | null;
  link?: string | null;
  title?: string | null;
};
