import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Feature } from '../models/Feature';
import { featureTypeYupSchema } from './FeatureType';

export const featureYupSchema = object().shape({
  shortDescription: string().nullable().required(),
  type: featureTypeYupSchema.required(),
}) as SchemaOf<Feature>;
