import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ErrorInvalidAvailabilityID } from '../models/ErrorInvalidAvailabilityID';
import { baseErrorYupSchema } from './BaseError';

export const errorInvalidAvailabilityIDYupSchema = baseErrorYupSchema.concat(
  object().shape({
    availabilityId: string().required(),
  }),
) as SchemaOf<ErrorInvalidAvailabilityID>;
