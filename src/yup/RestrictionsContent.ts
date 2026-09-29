import { number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { RestrictionsContent } from '../models/RestrictionsContent';

export const restrictionsContentYupSchema = object().shape({
  minHeight: number().notRequired(),
  maxHeight: number().notRequired(),
  heightUnit: string().notRequired(),
  minWeight: number().notRequired(),
  maxWeight: number().notRequired(),
  weightUnit: string().notRequired(),
}) as SchemaOf<RestrictionsContent>;
