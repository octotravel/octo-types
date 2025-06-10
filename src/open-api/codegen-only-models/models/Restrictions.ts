/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Restrictions = {
  /**
   * This is the minumum age this unit can be sold to
   */
  minAge: number;
  /**
   * This is the maximum age this unit can be sold to
   */
  maxAge: number;
  /**
   * This is whether a form of identification will be required at redemption point (eg. student card)
   */
  idRequired: boolean;
  /**
   * This is if there is a minimum amount of units to be chosen for purchase (eg. 2)
   */
  minQuantity: number | null;
  /**
   * This is if there is a maximum amount of units to be chosen for purchase (eg. 7)
   */
  maxQuantity: number | null;
  /**
   * This is the amount of people each unit counts as (eg. family == 4pax)
   */
  paxCount: number;
  /**
   * This is if the unit needs to be accompanied by another unit (eg. Infant with Adult)
   */
  accompaniedBy: Array<string>;
};
