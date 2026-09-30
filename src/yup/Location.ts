import { array, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Location } from '../models/Location';
import { locationTypeYupSchema } from './LocationType';
import { placeYupSchema } from './Place';

export const locationYupSchema = object().shape({
  title: string().nullable().required(),
  shortDescription: string().nullable().required(),
  types: array().of(locationTypeYupSchema).required(),
  minutesTo: number().nullable().required(),
  minutesAt: number().nullable().required(),
  place: placeYupSchema.required(),
}) as SchemaOf<Location>;
