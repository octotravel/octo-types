import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityPricingBody } from '../models/AvailabilityPricingBody';

export const availabilityPricingBodyYupSchema = object().shape({
  currency: string().nullable().notRequired(),
}) as SchemaOf<AvailabilityPricingBody>;
