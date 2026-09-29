import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCalendarBody } from '../models/AvailabilityCalendarBody';
import { availabilityUnitYupSchema } from './AvailabilityUnit';

export const availabilityCalendarBodyYupSchema = object()
  .shape({
    productId: string().required(),
    optionId: string().required(),
    localDateStart: string().notRequired(),
    localDateEnd: string().notRequired(),
    units: array().of(availabilityUnitYupSchema).notRequired(),
    currency: string().nullable().notRequired(),
  })
  .test('', 'cannot request more than 1 year of availability', (value: Record<string, unknown>) => {
    if (typeof value.localDateStart === 'string' && typeof value.localDateEnd === 'string') {
      const start = new Date(value.localDateStart);
      return !Boolean(
        new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) < new Date(value.localDateEnd),
      ).valueOf();
    }
    return true;
  }) as SchemaOf<AvailabilityCalendarBody>;
