import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { FeatureType } from '../models/FeatureType';

export const featureTypeYupSchema = string().oneOf(Object.values(FeatureType)).required() as SchemaOf<FeatureType>;
