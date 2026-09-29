import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ErrorInvalidUnitID } from '../models/ErrorInvalidUnitID';
import { baseErrorYupSchema } from './BaseError';

export const errorInvalidUnitIDYupSchema = baseErrorYupSchema.concat(
  object().shape({
    unitId: string().required(),
  }),
) as SchemaOf<ErrorInvalidUnitID>;
