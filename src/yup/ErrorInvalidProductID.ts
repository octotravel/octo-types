import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ErrorInvalidProductID } from '../models/ErrorInvalidProductID';
import { baseErrorYupSchema } from './BaseError';

export const errorInvalidProductIDYupSchema = baseErrorYupSchema.concat(
  object().shape({
    productId: string().required(),
  }),
) as SchemaOf<ErrorInvalidProductID>;
