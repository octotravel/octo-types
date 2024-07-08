import { object, string, array, number } from 'yup';
import type { SchemaOf } from 'yup';
import { AvailabilityUnit, availabilityUnitSchema } from './Availability';
import { AvailabilityExtraUnit } from '../types/Extras';

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

export const availabilityCalendarBodySchema: SchemaOf<AvailabilityCalendarBodySchema> = object()
  .shape({
    productId: string().required(),
    optionId: string().required(),
    localDateStart: string().required(),
    localDateEnd: string().required(),
    units: array().of(availabilityUnitSchema).notRequired().nullable(),
    ...availabilityCalendarCapabilitiesBodySchema.fields,
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
