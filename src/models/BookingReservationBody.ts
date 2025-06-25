/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingUnitItem } from './BookingUnitItem';
export type BookingReservationBody = {
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
  notes?: string;
  /**
   * An list of unit items that will be included in the booking.
   */
  unitItems: Array<BookingUnitItem>;
  /**
   * Can be used only when pricing capability is used.
   */
  currency?: string;
};
