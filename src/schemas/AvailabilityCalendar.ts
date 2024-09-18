import { object, string, array, number, ObjectSchema } from 'yup';
import { AvailabilityUnit, availabilityUnitSchema } from './Availability';
import { AvailabilityExtraUnit } from '../types/Extras';

interface AvailabilityCalendarCapabilitiesBodySchema {
  currency?: string | null;
  extras?: AvailabilityExtraUnit[];
  offerCode?: string;
}

const availabilityCalendarCapabilitiesBodySchema: ObjectSchema<AvailabilityCalendarCapabilitiesBodySchema> =
  object().shape({
    currency: string().optional().nullable(),
    extras: array()
      .of(
        object().shape({
          id: string().required(),
          quantity: number().required(),
        }),
      )
      .optional(),
    offerCode: string().optional(),
  });

export interface AvailabilityCalendarBodySchema extends AvailabilityCalendarCapabilitiesBodySchema {
  productId: string;
  optionId: string;
  localDateStart: string;
  localDateEnd: string;
  units?: AvailabilityUnit[];
}

export const availabilityCalendarBodySchema: ObjectSchema<AvailabilityCalendarBodySchema> = object()
  .shape({
    productId: string().required(),
    optionId: string().required(),
    localDateStart: string().required(),
    localDateEnd: string().required(),
    units: array().of(availabilityUnitSchema).optional(),
  })
  .concat(availabilityCalendarCapabilitiesBodySchema)
  .test('', 'cannot request more than 1 year of availability', ({ localDateStart, localDateEnd }) => {
    if (localDateStart && localDateEnd) {
      const start = new Date(localDateStart);
      return !Boolean(
        new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) < new Date(localDateEnd),
      ).valueOf();
    }
    return true;
  });
