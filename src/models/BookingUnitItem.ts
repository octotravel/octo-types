/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
export type BookingUnitItem = {
  /**
   * The unit item unit ID.
   */
  uuid?: string;
  /**
   * A unique UUID to identify the unit, same as the booking uuid except per unit.
   */
  unitId: string;
  resellerReference?: string;
  contact?: BookingContact;
};
