import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { UnitRestrictions } from '../models/UnitRestrictions';

export const unitRestrictionsYupSchema = object().shape({
  minAge: number().required(),
  maxAge: number().required(),
  idRequired: bool().required(),
  minQuantity: number().nullable().required(),
  maxQuantity: number().nullable().required(),
  paxCount: number().required(),
  accompaniedBy: array().of(string()).required(),
  minHeight: number().notRequired(),
  maxHeight: number().notRequired(),
  heightUnit: string().notRequired(),
  minWeight: number().notRequired(),
  maxWeight: number().notRequired(),
  weightUnit: string().notRequired(),
}) as SchemaOf<UnitRestrictions>;
