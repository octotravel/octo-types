import * as yup from "yup";

export interface AvailabilityBodySchema extends AvailabilityPickupBodySchema {
  productId: string;
  optionId: string;
  localDate?: string;
  localDateStart?: string;
  localDateEnd?: string;
  availabilityIds?: string[];
  units?: Array<AvailabilityUnit>;
}

interface AvailabilityPickupBodySchema {
  pickupRequested?: Nullable<boolean>;
  pickupPointId?: Nullable<string>;
}

export type AvailabilityUnit = {
  id: string;
  quantity: number;
};

export const availabilityUnitSchema: yup.SchemaOf<AvailabilityUnit> = yup
  .object()
  .shape({
    id: yup.string().required(),
    quantity: yup.number().required(),
  });

export const availabilityBodySchema: yup.SchemaOf<AvailabilityBodySchema> = yup
  .object()
  .shape({
    productId: yup.string().required(),
    optionId: yup.string().required(),
    localDate: yup.string().notRequired(),
    localDateStart: yup.string().notRequired(),
    localDateEnd: yup.string().notRequired(),
    availabilityIds: yup.array().of(yup.string()).notRequired().min(1),
    units: yup.array().of(availabilityUnitSchema).notRequired().nullable(),
    pickupRequested: yup.bool().notRequired().nullable(),
    pickupPointId: yup.string().notRequired().nullable(),
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
        !(localDateStart || localDate || localDateEnd || availabilityIds)
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
