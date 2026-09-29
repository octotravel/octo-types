import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { AvailabilityStatus } from '../models/AvailabilityStatus';

export const availabilityStatusYupSchema = string()
  .oneOf(Object.values(AvailabilityStatus))
  .required() as SchemaOf<AvailabilityStatus>;
