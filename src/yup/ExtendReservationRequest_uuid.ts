import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ExtendReservationRequest_uuid } from '../models/ExtendReservationRequest_uuid';

export const extendReservationRequest_uuidYupSchema = string().required() as SchemaOf<ExtendReservationRequest_uuid>;
