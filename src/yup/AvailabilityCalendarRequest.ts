import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCalendarRequest } from '../models/AvailabilityCalendarRequest';
import { availabilityCalendarBodyYupSchema } from './AvailabilityCalendarBody';

export const availabilityCalendarRequestYupSchema = object().shape({
  body: availabilityCalendarBodyYupSchema.required(),
}) as SchemaOf<AvailabilityCalendarRequest>;
