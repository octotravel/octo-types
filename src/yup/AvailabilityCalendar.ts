import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCalendar } from '../models/AvailabilityCalendar';
import { availabilityStatusYupSchema } from './AvailabilityStatus';
import { openingHoursYupSchema } from './OpeningHours';
import { pricingYupSchema } from './Pricing';
import { pricingUnitYupSchema } from './PricingUnit';

export const availabilityCalendarYupSchema = object().shape({
  localDate: string().required(),
  available: bool().required(),
  status: availabilityStatusYupSchema.required(),
  vacancies: number().nullable().required(),
  capacity: number().nullable().required(),
  openingHours: array().of(openingHoursYupSchema).required(),
  unitPricingFrom: array().of(pricingUnitYupSchema).notRequired(),
  pricingFrom: pricingYupSchema.notRequired(),
}) as SchemaOf<AvailabilityCalendar>;
