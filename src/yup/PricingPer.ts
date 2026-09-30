import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { PricingPer } from '../models/PricingPer';

export const pricingPerYupSchema = string().oneOf(Object.values(PricingPer)).required() as SchemaOf<PricingPer>;
