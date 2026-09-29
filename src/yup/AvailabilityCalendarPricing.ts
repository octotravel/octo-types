import { array, object } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCalendarPricing } from '../models/AvailabilityCalendarPricing';
import { pricingYupSchema } from './Pricing';
import { pricingUnitYupSchema } from './PricingUnit';

export const availabilityCalendarPricingYupSchema = object().shape({
  unitPricingFrom: array().of(pricingUnitYupSchema).notRequired(),
  pricingFrom: pricingYupSchema.notRequired(),
}) as SchemaOf<AvailabilityCalendarPricing>;
