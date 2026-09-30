import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { PricingUnit } from '../models/PricingUnit';
import { pricingYupSchema } from './Pricing';

export const pricingUnitYupSchema = pricingYupSchema.concat(
  object().shape({
    unitId: string().required(),
  }),
) as SchemaOf<PricingUnit>;
