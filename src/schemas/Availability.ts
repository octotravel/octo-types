import { object, string, number, array, bool } from "yup";
import type { SchemaOf } from "yup";

export interface AvailabilityBodySchema extends AvailabilityPickupBodySchema, AvailabilityOfferBodySchema {
  productId: string;
  optionId: string;
  localDate?: string;
  localDateStart?: string;
  localDateEnd?: string;
  availabilityIds?: string[];
  units?: Array<AvailabilityUnit>;
}

interface AvailabilityOfferBodySchema {
  offerCode?: string;
}

interface AvailabilityPickupBodySchema {
  pickupRequested?: Nullable<boolean>;
  pickupPointId?: Nullable<string>;
}

export type AvailabilityUnit = {
  id: string;
  quantity: number;
};

export const availabilityUnitSchema: SchemaOf<AvailabilityUnit> =
  object().shape({
    id: string().required(),
    quantity: number().required(),
  });

export const availabilityBodySchema: SchemaOf<AvailabilityBodySchema> = object()
  .shape({
    productId: string().required(),
    optionId: string().required(),
    localDate: string().notRequired(),
    localDateStart: string().notRequired(),
    localDateEnd: string().notRequired(),
    availabilityIds: array().of(string()).notRequired().min(1),
    units: array().of(availabilityUnitSchema).notRequired().nullable(),
    pickupRequested: bool().notRequired().nullable(),
    pickupPointId: string().notRequired().nullable(),
    offerCode: string().notRequired(),
  })
  .test(
    "",
    "cannot use localDate/localDateStart/localDateEnd and availabilityIds in the same request",
    ({ availabilityIds, localDateStart, localDate, localDateEnd }) =>
      !Boolean(
        availabilityIds && (localDateStart || localDate || localDateEnd)
      ).valueOf()
  )
  .test(
    "",
    "cannot use localDate and localDateStart/localDateEnd in the same request",
    ({ localDateStart, localDate, localDateEnd }) =>
      !Boolean((localDateStart || localDateEnd) && localDate).valueOf()
  )
  .test(
    "",
    "either localDate, localDateStart/localDateEnd or availabilityIds is required",
    ({ localDateStart, localDate, localDateEnd, availabilityIds }) =>
      !Boolean(
        !((localDateStart && localDateEnd) || localDate || availabilityIds)
      ).valueOf()
  )
  .test(
    "",
    "cannot request more than 100 availability objects at a time",
    ({ availabilityIds }) => {
      if (availabilityIds) {
        return !Boolean(availabilityIds.length > 100).valueOf();
      }
      return true;
    }
  )
  .test(
    "",
    "cannot request more than 1 year of availability",
    ({ localDateStart, localDateEnd }) => {
      if (localDateStart && localDateEnd) {
        const start = new Date(localDateStart);
        return !Boolean(
          new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) <
            new Date(localDateEnd)
        ).valueOf();
      }
      return true;
    }
  );
