import { array, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { OptionContent } from '../models/OptionContent';
import { categoryLabelYupSchema } from './CategoryLabel';
import { commentaryYupSchema } from './Commentary';
import { fAQYupSchema } from './FAQ';
import { featureYupSchema } from './Feature';
import { locationYupSchema } from './Location';
import { mediaYupSchema } from './Media';

export const optionContentYupSchema = object().shape({
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
}) as SchemaOf<OptionContent>;
