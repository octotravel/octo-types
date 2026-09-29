import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetBookingPathParams } from '../models/GetBookingPathParams';

export const getBookingPathParamsYupSchema = object().shape({
  uuid: string().required(),
}) as SchemaOf<GetBookingPathParams>;
