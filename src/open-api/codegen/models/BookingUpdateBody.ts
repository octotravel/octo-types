/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { BookingUnitItem } from './BookingUnitItem';
export type BookingUpdateBody = {
  /**
   * Your reference for this booking. Also known as a Voucher Number.
   */
  resellerReference?: string;
  /**
   * The product ID.
   */
  productId?: string;
  /**
   * The option id.
   */
  optionId?: string;
  /**
   * The availability ID for the selected timeslot.
   */
  availabilityId?: string;
  /**
   * How many minutes to reserve the availability, otherwise defaults to the supplier default amount.
   */
  expirationMinutes?: number;
  /**
   * Optional notes for the booking.
   */
  notes?: string;
  /**
   * Whether you want OCTO Cloud to email the guest a copy of their receipt and tickets. (defaults to false).
   */
  emailReceipt?: boolean;
  /**
   * An array of unit items in the booking. To retain or modify existing unit items, you must include the unit item with the associated uuid, otherwise that unit item will be removed.
   */
  unitItems?: Array<BookingUnitItem>;
  /**
   * Contact details for the main guest who will attend the tour/attraction. Contact schema can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information).
   */
  contact?: BookingContact;
};
