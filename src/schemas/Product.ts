import { object, string } from "yup";
import type { SchemaOf } from "yup";

export type GetProductPathParamsSchema = {
  id: string;
};

export const getProductPathParamsSchema: SchemaOf<GetProductPathParamsSchema> =
  object().shape({
    id: string().required(),
  });
