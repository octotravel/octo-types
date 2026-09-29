import { object, string } from 'yup';
import type { SchemaOf } from 'yup';

export interface GetSupplierPathParamsSchema {
  id: string;
}

export const getSupplierPathParamsYupSchema = object().shape({
  id: string().required(),
}) as SchemaOf<GetSupplierPathParamsSchema>;
