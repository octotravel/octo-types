import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCheckSchema } from '../models/AvailabilityCheckSchema';
import { availabilityUnitYupSchema } from './AvailabilityUnit';

export const availabilityCheckSchemaYupSchema = object().shape({
  productId: string().required(),
  optionId: string().required(),
  localDateStart: string().notRequired(),
  localDateEnd: string().notRequired(),
  availabilityIds: array().of(string()).notRequired(),
  units: array().of(availabilityUnitYupSchema).notRequired(),
  currency: string().nullable().notRequired(),
}) as SchemaOf<AvailabilityCheckSchema>;
