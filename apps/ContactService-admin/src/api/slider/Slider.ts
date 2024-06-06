import { JsonValue } from "type-fest";

export type Slider = {
  createdAt: Date;
  id: string;
  imageFile: JsonValue;
  imageUrl: string | null;
  link: string | null;
  title: string | null;
  updatedAt: Date;
};
