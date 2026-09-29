import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ErrorInvalidBookingUUID } from '../models/ErrorInvalidBookingUUID';
import { baseErrorYupSchema } from './BaseError';

export const errorInvalidBookingUUIDYupSchema = baseErrorYupSchema.concat(
  object().shape({
    uuid: string().required(),
  }),
) as SchemaOf<ErrorInvalidBookingUUID>;
