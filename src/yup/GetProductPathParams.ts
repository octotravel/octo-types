import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetProductPathParams } from '../models/GetProductPathParams';

export const getProductPathParamsYupSchema = object().shape({
  id: string().required(),
}) as SchemaOf<GetProductPathParams>;
