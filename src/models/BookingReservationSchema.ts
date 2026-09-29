/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingContact } from './BookingContact';
import type { BookingUnitItem } from './BookingUnitItem';
export type BookingReservationSchema = {
  /**
   * A unique UUID to identify the booking. Setting this value acts like an idempotency key preventing you from double booking.
   */
  uuid?: string;
  /**
   * The product ID for this booking.
   */
  productId: string;
  /**
   * The option ID for this booking.
   */
  optionId: string;
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
  notes?: string | null;
  /**
   * An list of unit items that will be included in the booking.
   */
  unitItems: Array<BookingUnitItem>;
  /**
   * Your reference for this booking. Also known as a Voucher Number.
   */
  resellerReference?: string;
  /**
   * Contact details for the main guest who will attend the tour/attraction. Contact BODY can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information).
   */
  contact?: BookingContact;
  /**
   * Can be used only when pricing capability is used.
   */
  currency?: string | null;
};
