/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingStatus } from './BookingStatus';
import type { Contact } from './Contact';
import type { Pricing } from './Pricing';
import type { Ticket } from './Ticket';
import type { Unit } from './Unit';
export type UnitItem = {
  /**
   * The id of the unit, this will be unique to the option.
   */
  uuid: string;
  /**
   * A reference the reseller uses to identify the unit within all bookings.
   */
  resellerReference: string | null;
  /**
   * A reference the supplier uses to identify the unit within all bookings.
   */
  supplierReference: string | null;
  /**
   * This MUST be a unique identifier within the scope of the option.
   */
  unitId: string;
  unit?: Unit;
  /**
   * The status of the booking, possible values are:
   * `ON_HOLD` The booking is pending confirmation, this is the default value when you first create the booking.
   * `EXPIRED` If the booking is not confirmed before the expiration hold expires, it goes into an expired state.
   * `CONFIRMED` Once the confirmation call is made the booking is ready to be used.
   * `CANCELLED` If the booking is cancelled.
   * `PENDING` If the booking is pending outside availability confirmation.
   * `REDEEMED` If the booking is already redeemed.
   */
  status: BookingStatus;
  /**
   * The ISO8601 date in UTC indicating when the ticket was used at the attraction.
   */
  utcRedeemedAt: string | null;
  /**
   * Contact details for the guests that will attend the tour/attraction. Contact schema can be applied to both the booking object (the main reservation) or the unit object (individual ticket holders - if the supplier requires this information)
   */
  contact: Contact;
  ticket: Ticket | null;
  /**
   * Is on the object when Pricing capability is requested.
   */
  pricing?: Pricing;
};
