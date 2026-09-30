import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { RedemptionMethod } from '../models/RedemptionMethod';

export const redemptionMethodYupSchema = string()
  .oneOf(Object.values(RedemptionMethod))
  .required() as SchemaOf<RedemptionMethod>;
