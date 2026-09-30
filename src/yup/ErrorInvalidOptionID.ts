import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ErrorInvalidOptionID } from '../models/ErrorInvalidOptionID';
import { baseErrorYupSchema } from './BaseError';

export const errorInvalidOptionIDYupSchema = baseErrorYupSchema.concat(
  object().shape({
    optionId: string().required(),
  }),
) as SchemaOf<ErrorInvalidOptionID>;
