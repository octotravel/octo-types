import { object, string, array } from "yup";
import type { SchemaOf } from "yup";
import { AvailabilityUnit, availabilityUnitSchema } from "./Availability";

export interface AvailabilityCalendarBodySchema {
  productId: string;
  optionId: string;
  localDateStart: string;
  localDateEnd: string;
  units?: Array<AvailabilityUnit>;
}

export const availabilityCalendarBodySchema: SchemaOf<AvailabilityCalendarBodySchema> =
  object()
    .shape({
      productId: string().required(),
      optionId: string().required(),
      localDateStart: string().required(),
      localDateEnd: string().required(),
      units: array().of(availabilityUnitSchema).notRequired().nullable(),
    })
    .test(
      "",
      "cannot request more than 1 year of availability",
      ({ localDateStart, localDateEnd }) => {
        if (localDateStart && localDateEnd) {
          const start = new Date(localDateStart);
          return !Boolean(
            new Date(
              start.getFullYear() + 1,
              start.getMonth(),
              start.getDate()
            ) < new Date(localDateEnd)
          ).valueOf();
        }
        return true;
      }
    );
