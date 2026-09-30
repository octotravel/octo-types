import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { UnitItemPricing } from '../models/UnitItemPricing';
import { pricingYupSchema } from './Pricing';

export const unitItemPricingYupSchema = object().shape({
  pricing: pricingYupSchema.notRequired(),
}) as SchemaOf<UnitItemPricing>;
