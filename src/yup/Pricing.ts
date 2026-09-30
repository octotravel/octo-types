import { array, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Pricing } from '../models/Pricing';
import { taxYupSchema } from './Tax';

export const pricingYupSchema = object().shape({
  original: number().required(),
  retail: number().required(),
  net: number().nullable().required(),
  currency: string().required(),
  currencyPrecision: number().required(),
  includedTaxes: array().of(taxYupSchema).required(),
}) as SchemaOf<Pricing>;
