/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookingCancellationSchema = {
  /**
   * The UUID of the booking
   */
  uuid: string;
  /**
   * A text value describing why the cancellation happened.
   */
  reason?: string | null;
  /**
   * Whether you want OCTO Cloud to email the guest a copy of their receipt and tickets. (defaults to false)
   */
  force?: boolean;
};
