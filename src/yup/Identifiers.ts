import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Identifiers } from '../models/Identifiers';

export const identifiersYupSchema = object().shape({
  googlePlaceId: string().nullable().required(),
  applePlaceId: string().nullable().required(),
  tripadvisorLocationId: string().nullable().required(),
  yelpPlaceId: string().nullable().required(),
  facebookPlaceId: string().nullable().required(),
  foursquarePlaceId: string().nullable().required(),
  baiduPlaceId: string().nullable().required(),
  amapPlaceId: string().nullable().required(),
}) as SchemaOf<Identifiers>;
