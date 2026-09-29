import { number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ExtendReservationSchema } from '../models/ExtendReservationSchema';

export const extendReservationSchemaYupSchema = object().shape({
  uuid: string().required(),
  expirationMinutes: number().integer().notRequired(),
}) as SchemaOf<ExtendReservationSchema>;
