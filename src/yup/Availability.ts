import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Availability } from '../models/Availability';
import { availabilityStatusYupSchema } from './AvailabilityStatus';
import { openingHoursYupSchema } from './OpeningHours';
import { pricingYupSchema } from './Pricing';
import { pricingUnitYupSchema } from './PricingUnit';

export const availabilityYupSchema = object().shape({
  id: string().required(),
  localDateTimeStart: string().required(),
  localDateTimeEnd: string().required(),
  utcCutoffAt: string().required(),
  allDay: bool().required(),
  available: bool().required(),
  status: availabilityStatusYupSchema.required(),
  vacancies: number().nullable().required(),
  capacity: number().nullable().required(),
  maxUnits: number().nullable().required(),
  openingHours: array().of(openingHoursYupSchema).required(),
  unitPricing: array().of(pricingUnitYupSchema).notRequired(),
  pricing: pricingYupSchema.notRequired(),
  title: string().nullable().notRequired(),
  shortDescription: string().notRequired(),
}) as SchemaOf<Availability>;
