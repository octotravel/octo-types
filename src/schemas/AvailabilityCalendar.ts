import { array, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import { AvailabilityExtraUnit, availabilityUnitSchema } from './Availability';
import { AvailabilityCalendarBody, AvailabilityUnit } from '../models/types.gen';

interface AvailabilityCalendarCapabilitiesBodySchema {
  currency?: string | null;
  extras?: AvailabilityExtraUnit[];
  offerCode?: string;
}

const availabilityCalendarCapabilitiesBodySchema: SchemaOf<AvailabilityCalendarCapabilitiesBodySchema> = object().shape(
  {
    currency: string().notRequired().nullable(),
    extras: array()
      .of(
        object().shape({
          id: string().required(),
          quantity: number().required(),
        }),
      )
      .notRequired(),
    offerCode: string().notRequired(),
  },
);

export interface AvailabilityCalendarBodySchema extends AvailabilityCalendarCapabilitiesBodySchema {
  productId: string;
  optionId: string;
  localDateStart: string;
  localDateEnd: string;
  units?: AvailabilityUnit[];
}

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
