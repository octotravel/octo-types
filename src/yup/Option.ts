import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Option } from '../models/Option';
import { categoryLabelYupSchema } from './CategoryLabel';
import { commentaryYupSchema } from './Commentary';
import { contactFieldYupSchema } from './ContactField';
import { durationUnitYupSchema } from './DurationUnit';
import { fAQYupSchema } from './FAQ';
import { featureYupSchema } from './Feature';
import { locationYupSchema } from './Location';
import { mediaYupSchema } from './Media';
import { optionRestrictionsYupSchema } from './OptionRestrictions';
import { pricingYupSchema } from './Pricing';
import { unitYupSchema } from './Unit';

export const optionYupSchema = object().shape({
  id: string().required(),
  default: bool().required(),
  internalName: string().required(),
  reference: string().nullable().required(),
  availabilityLocalStartTimes: array().of(string()).required(),
  cancellationCutoff: string().required(),
  cancellationCutoffAmount: number().required(),
  cancellationCutoffUnit: durationUnitYupSchema.required(),
  requiredContactFields: array().of(contactFieldYupSchema).required(),
  restrictions: optionRestrictionsYupSchema.required(),
  units: array().of(unitYupSchema).required(),
  pricingFrom: array().of(pricingYupSchema).notRequired(),
  pricing: array().of(pricingYupSchema).notRequired(),
  title: string().notRequired(),
  shortDescription: string().nullable().notRequired(),
  description: string().nullable().notRequired(),
  features: array().of(featureYupSchema).notRequired(),
  faqs: array().of(fAQYupSchema).notRequired(),
  media: array().of(mediaYupSchema).notRequired(),
  locations: array().of(locationYupSchema).notRequired(),
  categoryLabels: array().of(categoryLabelYupSchema).notRequired(),
  durationMinutesFrom: number().notRequired(),
  durationMinutesTo: number().nullable().notRequired(),
  commentary: array().of(commentaryYupSchema).notRequired(),
}) as SchemaOf<Option>;
