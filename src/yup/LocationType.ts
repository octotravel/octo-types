import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { LocationType } from '../models/LocationType';

export const locationTypeYupSchema = string().oneOf(Object.values(LocationType)).required() as SchemaOf<LocationType>;
