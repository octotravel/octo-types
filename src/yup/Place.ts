import { array, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Place } from '../models/Place';
import { identifiersYupSchema } from './Identifiers';
import { postalAddressYupSchema } from './PostalAddress';

export const placeYupSchema = object().shape({
  latitude: number().required(),
  longitude: number().required(),
  postalAddress: postalAddressYupSchema.required(),
  identifiers: identifiersYupSchema.required(),
  sameAs: array().of(string()).required(),
}) as SchemaOf<Place>;
