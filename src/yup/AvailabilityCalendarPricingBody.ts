import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCalendarPricingBody } from '../models/AvailabilityCalendarPricingBody';

export const availabilityCalendarPricingBodyYupSchema = object().shape({
  currency: string().nullable().notRequired(),
}) as SchemaOf<AvailabilityCalendarPricingBody>;
