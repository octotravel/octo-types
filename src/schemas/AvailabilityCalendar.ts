import * as yup from "yup";
import { AvailabilityUnit, availabilityUnitSchema } from "./Availability";

export interface AvailabilityCalendarSchema {
  productId: string;
  optionId: string;
  localDateStart: string;
  localDateEnd: string;
  units?: Array<AvailabilityUnit>;
}

export const availabilityCalendarSchema: yup.SchemaOf<AvailabilityCalendarSchema> =
  yup
    .object()
    .shape({
      productId: yup.string().required(),
      optionId: yup.string().required(),
      localDateStart: yup.string().required(),
      localDateEnd: yup.string().required(),
      units: yup.array().of(availabilityUnitSchema).notRequired().nullable(),
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
