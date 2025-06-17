/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityUnit } from './AvailabilityUnit';
export type AvailabilityCheckBody = {
  /**
   * The product id.
   */
  productId: string;
  /**
   * The option id.
   */
  optionId: string;
  /**
   * Start date to query for (YYYY-MM-DD). Required if `localDateEnd` is set.
   */
  localDateStart?: string;
  /**
   * End date to query for (YYYY-MM-DD). Required if `localDateStart` is set.
   */
  localDateEnd?: string;
  /**
   * Filter the results by the given ids.
   */
  availabilityIds?: Array<string>;
  /**
   * A list of units.
   */
  units?: Array<AvailabilityUnit>;
  /**
   * Can be used only when pricing capability is used.
   */
  currency?: string;
};
