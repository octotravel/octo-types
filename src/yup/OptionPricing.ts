import { array, object } from 'yup';
import type { SchemaOf } from 'yup';
import type { OptionPricing } from '../models/OptionPricing';
import { pricingYupSchema } from './Pricing';

export const optionPricingYupSchema = object().shape({
  pricingFrom: array().of(pricingYupSchema).notRequired(),
  pricing: array().of(pricingYupSchema).notRequired(),
}) as SchemaOf<OptionPricing>;
