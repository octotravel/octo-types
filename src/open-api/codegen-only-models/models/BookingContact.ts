/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookingContact = {
  /**
   * The full name of the booking holder or the ticket holder. Can also be retrieved as an alias for the concatenation of `firstName` and `lastName`
   */
  fullName?: string;
  /**
   * The first name of the booking holder or the ticket holder.
   */
  firstName?: string;
  /**
   * The last name of the booking holder or the ticket holder.
   */
  lastName?: string;
  /**
   * The email address of the booking holder or the ticket holder.
   */
  emailAddress?: string;
  /**
   * The phone number of the booking holder or the ticket holder.
   */
  phoneNumber?: string;
  /**
   * An array of locale values, equivalent to navigator.languages in a browsers environment.
   */
  locales?: Array<string>;
  /**
   * The PO Box of the booking holder or the ticket holder.
   */
  postalCode?: string;
  /**
   * The country of the booking holder or the ticket holder.
   */
  country?: string;
  /**
   * Optional notes for the booking.
   */
  notes?: string;
};
