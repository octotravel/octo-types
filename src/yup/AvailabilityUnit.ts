import { number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityUnit } from '../models/AvailabilityUnit';

export const availabilityUnitYupSchema = object().shape({
  id: string().required(),
  quantity: number().required(),
}) as SchemaOf<AvailabilityUnit>;
