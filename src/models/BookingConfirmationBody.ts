/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { BookingUnitItem } from './BookingUnitItem';
export type BookingConfirmationBody = {
  /**
   * Whether you want OCTO Cloud to email the guest a copy of their receipt and tickets. (defaults to false)
   */
  emailReceipt?: boolean;
  /**
   * Your reference for this booking. Also known as a Voucher Number.
   */
  resellerReference?: string;
  /**
   * Contact details for the main guest who will attend the tour/attraction. Contact BODY can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information).
   */
  contact: BookingContact;
  /**
   * An array of unit items that will be included in the booking. This allows you to provide contact details or a reseller reference for each unit item. Be careful to make sure you include ALL unit items that you also had in the original booking reservation request, if you provide more or less than in the booking reservation call this will change the number of unit items being purchased also.
   */
  unitItems?: Array<BookingUnitItem>;
};
