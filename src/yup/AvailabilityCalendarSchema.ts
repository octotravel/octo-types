import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCalendarSchema } from '../models/AvailabilityCalendarSchema';
import { availabilityUnitYupSchema } from './AvailabilityUnit';

export const availabilityCalendarSchemaYupSchema = object().shape({
  productId: string().required(),
  optionId: string().required(),
  localDateStart: string().notRequired(),
  localDateEnd: string().notRequired(),
  units: array().of(availabilityUnitYupSchema).notRequired(),
  currency: string().nullable().notRequired(),
}) as SchemaOf<AvailabilityCalendarSchema>;
