import { object, string } from 'yup';
import type { ObjectSchema } from 'yup';

export interface GetSupplierPathParamsSchema {
  id: string;
}

export const getSupplierPathParamsSchema: ObjectSchema<GetSupplierPathParamsSchema> = object().shape({
  id: string().required(),
});
