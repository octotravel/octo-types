import { number, object } from 'yup';
import type { SchemaOf } from 'yup';
import type { ExtendReservationBody } from '../models/ExtendReservationBody';

export const extendReservationBodyYupSchema = object().shape({
  expirationMinutes: number().integer().notRequired(),
}) as SchemaOf<ExtendReservationBody>;
