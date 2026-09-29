import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { ProductPricing } from '../models/ProductPricing';
import { pricingPerYupSchema } from './PricingPer';

export const productPricingYupSchema = object().shape({
  defaultCurrency: string().notRequired(),
  availableCurrencies: array().of(string()).notRequired(),
  pricingPer: pricingPerYupSchema.notRequired(),
}) as SchemaOf<ProductPricing>;
