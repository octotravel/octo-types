import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { DurationUnit } from '../models/DurationUnit';

export const durationUnitYupSchema = string().oneOf(Object.values(DurationUnit)).required() as SchemaOf<DurationUnit>;
