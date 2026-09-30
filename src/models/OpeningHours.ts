/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Defines the opening hours for this availability, even for start time-based availability. Supports multiple periods for breaks in the day.
 */
export type OpeningHours = {
  /**
   * The opening time
   */
  from: string;
  /**
   * The closing time
   */
  to: string;
};
