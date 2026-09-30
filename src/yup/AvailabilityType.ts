import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { AvailabilityType } from '../models/AvailabilityType';

export const availabilityTypeYupSchema = string()
  .oneOf(Object.values(AvailabilityType))
  .required() as SchemaOf<AvailabilityType>;
