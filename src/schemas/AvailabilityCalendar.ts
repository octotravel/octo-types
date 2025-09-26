import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import { availabilityUnitSchema } from './Availability';
import { AvailabilityCalendarBody } from '../models/types.gen';

export const availabilityCalendarBodySchema: SchemaOf<AvailabilityCalendarBody> = object()
  .shape({
    productId: string().required(),
    optionId: string().required(),
    localDateStart: string().required(),
    localDateEnd: string().required(),
    units: array().of(availabilityUnitSchema).notRequired(),
    currency: string().notRequired(),
  })
  .test('', 'cannot request more than 1 year of availability', ({ localDateStart, localDateEnd }) => {
    if (localDateStart && localDateEnd) {
      const start = new Date(localDateStart);
      return !Boolean(
        new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) < new Date(localDateEnd),
      ).valueOf();
    }
    return true;
  });
