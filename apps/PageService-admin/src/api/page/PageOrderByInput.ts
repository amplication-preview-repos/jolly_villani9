import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  content?: SortOrder;
  contentJson?: SortOrder;
  contentOld?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
