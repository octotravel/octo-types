import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { UnitType } from '../models/UnitType';

export const unitTypeYupSchema = string().oneOf(Object.values(UnitType)).required() as SchemaOf<UnitType>;
