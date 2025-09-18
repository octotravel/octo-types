import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import { availabilityUnitSchema } from './Availability';
import { AvailabilityUnit } from '../models/types.gen';

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
