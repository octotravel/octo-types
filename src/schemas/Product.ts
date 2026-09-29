import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import { GetProductPathParams } from '../models/types.gen';

export const getProductPathParamsSchema: SchemaOf<GetProductPathParams> = object().shape({
  id: string().required(),
});
