import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { BookingPricing } from '../models/BookingPricing';
import { pricingYupSchema } from './Pricing';

export const bookingPricingYupSchema = object().shape({
  pricing: pricingYupSchema.notRequired(),
}) as SchemaOf<BookingPricing>;
