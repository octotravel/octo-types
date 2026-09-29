import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingRequest_uuid } from '../models/GetBookingRequest_uuid';

export const getBookingRequest_uuidYupSchema = string().required() as SchemaOf<GetBookingRequest_uuid>;
