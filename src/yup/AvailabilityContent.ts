import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityContent } from '../models/AvailabilityContent';

export const availabilityContentYupSchema = object().shape({
  title: string().nullable().notRequired(),
  shortDescription: string().notRequired(),
}) as SchemaOf<AvailabilityContent>;
