import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import { type AvailabilityUnit, availabilityUnitSchema } from './Availability';

export interface AvailabilityResourcesBodySchema {
  productId: string;
  optionId: string;
  availabilityId: string;
  units?: AvailabilityUnit[];
}

export const availabilityResourcesBodySchema: SchemaOf<AvailabilityResourcesBodySchema> = object().shape({
  productId: string().required(),
  optionId: string().required(),
  availabilityId: string().required(),
  units: array().of(availabilityUnitSchema).notRequired().nullable(),
});
