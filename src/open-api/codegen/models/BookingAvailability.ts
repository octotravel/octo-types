/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OpeningHours } from './OpeningHours';
export type BookingAvailability = {
  /**
   * The availability id that was used in the request.
   */
  id: string;
  /**
   * The `localDateTimeStart` value from the original availability object.
   */
  localDateTimeStart: string;
  /**
   * The `localDateTimeEnd` value from the original availability object.
   */
  localDateTimeEnd: string;
  /**
   * A boolean value indicating whether the availability is all day.
   */
  allDay: boolean;
  /**
   * The opening hours from the original availability object.
   */
  openingHours: Array<OpeningHours>;
};
