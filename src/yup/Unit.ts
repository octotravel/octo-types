import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Unit } from '../models/Unit';
import { contactFieldYupSchema } from './ContactField';
import { featureYupSchema } from './Feature';
import { pricingYupSchema } from './Pricing';
import { unitRestrictionsYupSchema } from './UnitRestrictions';
import { unitTypeYupSchema } from './UnitType';

export const unitYupSchema = object().shape({
  id: string().required(),
  internalName: string().required(),
  reference: string().nullable().required(),
  type: unitTypeYupSchema.required(),
  restrictions: unitRestrictionsYupSchema.required(),
  requiredContactFields: array().of(contactFieldYupSchema).required(),
  pricingFrom: array().of(pricingYupSchema).notRequired(),
  pricing: array().of(pricingYupSchema).notRequired(),
  title: string().nullable().notRequired(),
  shortDescription: string().notRequired(),
  features: array().of(featureYupSchema).notRequired(),
}) as SchemaOf<Unit>;
