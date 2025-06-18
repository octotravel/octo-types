import type { SchemaOf } from 'yup';
import { object, string } from 'yup';

export interface GetSupplierPathParamsSchema {
  id: string;
}

export const getSupplierPathParamsSchema: SchemaOf<GetSupplierPathParamsSchema> = object().shape({
  id: string().required(),
});
