/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UnitRestrictions = {
  /**
   * Minimum age to purchase the unit.
   */
  minAge: number;
  /**
   * Maximum age to purchase the unit.
   */
  maxAge: number;
  /**
   * Indicates if identification (e.g., student ID) is required for redemption.
   */
  idRequired: boolean;
  /**
   * Minimum number of units that must be purchased (e.g., 2 tickets). Null means no minimum.
   */
  minQuantity: number | null;
  /**
   * Maximum number of units allowed in a single booking. Null means unlimited.
   */
  maxQuantity: number | null;
  /**
   * The number of people each unit represents (e.g., 1 family ticket = 4 pax).
   */
  paxCount: number;
  /**
   * Specifies if this unit must be accompanied by another unit (e.g., an infant ticket must be purchased with an adult ticket). Array of unit IDs which must be booked together.
   */
  accompaniedBy: Array<string>;
  /**
   * Minimum height required for this unit (e.g., for amusement park rides).
   */
  minHeight?: number;
  /**
   * Maximum height allowed.
   */
  maxHeight?: number;
  /**
   * Unit of height measurement (e.g., "cm" or "in") used for values of minHeight, maxHeight.
   */
  heightUnit?: string;
  /**
   * Minimum weight required.
   */
  minWeight?: number;
  /**
   * Maximum weight allowed.
   */
  maxWeight?: number;
  /**
   * Unit of weight measurement (e.g., "kg" or "lb") used for values of minWeight, maxWeight.
   */
  weightUnit?: string;
};
