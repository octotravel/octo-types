import { object, string } from "yup";
import type { SchemaOf } from "yup";

export type GetSupplierPathParamsSchema = {
  id: string;
};

export const getSupplierPathParamsSchema: SchemaOf<GetSupplierPathParamsSchema> =
  object().shape({
    id: string().required(),
  });
