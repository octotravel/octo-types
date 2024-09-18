import { object, string, array, ObjectSchema } from 'yup';
import { AvailabilityUnit, availabilityUnitSchema } from './Availability';

export interface AvailabilityResourcesBodySchema {
  productId: string;
  optionId: string;
  availabilityId: string;
  units?: AvailabilityUnit[];
}

export const availabilityResourcesBodySchema: ObjectSchema<AvailabilityResourcesBodySchema> = object().shape({
  productId: string().required(),
  optionId: string().required(),
  availabilityId: string().required(),
  units: array().of(availabilityUnitSchema).optional(),
});
