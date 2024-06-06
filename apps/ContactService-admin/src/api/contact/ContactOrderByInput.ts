import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
