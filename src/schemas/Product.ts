import { object, string } from 'yup';
import type { SchemaOf } from 'yup';

export interface GetProductPathParamsSchema {
  id: string;
}

export const getProductPathParamsSchema: SchemaOf<GetProductPathParamsSchema> = object().shape({
  id: string().required(),
});
