import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { UnitContent } from '../models/UnitContent';
import { featureYupSchema } from './Feature';

export const unitContentYupSchema = object().shape({
  title: string().nullable().notRequired(),
  shortDescription: string().notRequired(),
  features: array().of(featureYupSchema).notRequired(),
}) as SchemaOf<UnitContent>;
