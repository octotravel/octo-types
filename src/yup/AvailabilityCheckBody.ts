import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityCheckBody } from '../models/AvailabilityCheckBody';
import { availabilityUnitYupSchema } from './AvailabilityUnit';

export const availabilityCheckBodyYupSchema = object()
  .shape({
    productId: string().required(),
    optionId: string().required(),
    localDateStart: string().notRequired(),
    localDateEnd: string().notRequired(),
    availabilityIds: array().of(string()).notRequired(),
    units: array().of(availabilityUnitYupSchema).notRequired(),
    currency: string().nullable().notRequired(),
  })
  .test(
    '',
    'cannot use localDate/localDateStart/localDateEnd and availabilityIds in the same request',
    (value: Record<string, unknown>) =>
      !Boolean(value.availabilityIds && (value.localDateStart || value.localDate || value.localDateEnd)).valueOf(),
  )
  .test(
    '',
    'cannot use localDate and localDateStart/localDateEnd in the same request',
    (value: Record<string, unknown>) =>
      !Boolean((value.localDateStart || value.localDateEnd) && value.localDate).valueOf(),
  )
  .test(
    '',
    'either localDate, localDateStart/localDateEnd or availabilityIds is required',
    (value: Record<string, unknown>) =>
      !Boolean(!((value.localDateStart && value.localDateEnd) || value.localDate || value.availabilityIds)).valueOf(),
  )
  .test('', 'cannot request more than 100 availability objects at a time', (value: Record<string, unknown>) => {
    if (Array.isArray(value.availabilityIds)) {
      return !Boolean(value.availabilityIds.length > 100).valueOf();
    }
    return true;
  })
  .test('', 'cannot request more than 1 year of availability', (value: Record<string, unknown>) => {
    if (typeof value.localDateStart === 'string' && typeof value.localDateEnd === 'string') {
      const start = new Date(value.localDateStart);
      return !Boolean(
        new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) < new Date(value.localDateEnd),
      ).valueOf();
    }
    return true;
  }) as SchemaOf<AvailabilityCheckBody>;
