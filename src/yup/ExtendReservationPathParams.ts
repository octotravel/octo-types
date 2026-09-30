import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ExtendReservationPathParams } from '../models/ExtendReservationPathParams';

export const extendReservationPathParamsYupSchema = object().shape({
  uuid: string().required(),
}) as SchemaOf<ExtendReservationPathParams>;
