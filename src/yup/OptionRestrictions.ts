import { number, object } from 'yup';
import type { SchemaOf } from 'yup';
import type { OptionRestrictions } from '../models/OptionRestrictions';

export const optionRestrictionsYupSchema = object().shape({
  minUnits: number().nullable().required(),
  maxUnits: number().nullable().required(),
}) as SchemaOf<OptionRestrictions>;
