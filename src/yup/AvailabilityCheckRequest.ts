import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCheckRequest } from '../models/AvailabilityCheckRequest';
import { availabilityCheckBodyYupSchema } from './AvailabilityCheckBody';

export const availabilityCheckRequestYupSchema = object().shape({
  body: availabilityCheckBodyYupSchema.required(),
}) as SchemaOf<AvailabilityCheckRequest>;
