import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { OpeningHours } from '../models/OpeningHours';

export const openingHoursYupSchema = object().shape({
  from: string().required(),
  to: string().required(),
}) as SchemaOf<OpeningHours>;
