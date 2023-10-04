import { object, string, array } from "yup";
import type { SchemaOf } from "yup";
import { AvailabilityUnit, availabilityUnitSchema } from "./Availability";

export interface AvailabilityResourcesBodySchema {
  productId: string;
  optionId: string;
  availabilityId: string;
  units?: Array<AvailabilityUnit>;
}

export const availabilityBodySchema: SchemaOf<AvailabilityResourcesBodySchema> =
  object().shape({
    productId: string().required(),
    optionId: string().required(),
    availabilityId: string().required(),
    units: array().of(availabilityUnitSchema).notRequired().nullable(),
  });
