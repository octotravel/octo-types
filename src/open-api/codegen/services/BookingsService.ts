import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Booking } from '../models/Booking';
import type { BookingCancellationBody } from '../models/BookingCancellationBody';
import type { BookingConfirmationBody } from '../models/BookingConfirmationBody';
import type { BookingReservationBody } from '../models/BookingReservationBody';
import type { BookingUpdateBody } from '../models/BookingUpdateBody';
import type { ExtendReservationBody } from '../models/ExtendReservationBody';
export class BookingsService {
  /**
   * Booking Reservation
   * Reserving availability when making a booking. The steps to make a reservation are:
   *
   * 1. **Check Availability**: Check the availability on the [/availability](docs/octo/branches/main/5b08f5f75e75d-availability-check) endpoint to retrieve an `availabilityId`
   * 2. **Booking Reservation** (this step): Create a booking that reserves the availability while you collect payment and contact information from the customer. The booking will remain with status `ON_HOLD` until the booking is confirmed or the reservation hold expires.
   *
   * The availability for the booking is held for the amount of time equal to the`expirationMinutes` parameter (if provided), up to an internal limit set by either the supplier or the OCTo provider. The `utc_expires_at` parameter in the response object will indicate when a reservtion will expire. A reservation can be extended by calling the [/bookings/{uuid}/extend](docs/octo/branches/main/2c7924ab9128f-extend-reservation) endpoint.
   *
   * A reserved booking can be confirmed after the customer finalizes their choice on the [/bookings/{uuid}/confirm](docs/octo/branches/main/614d1613b2d70-booking-confirmation) endpoint provided the reservation had not expired.
   *
   * @param requestBody
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsBookingReservation(requestBody: BookingReservationBody): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/bookings/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Get Bookings
   * This endpoint will fetch the bookings you have made for the given filters.
   *
   * When using this endpoint you must include one of the following query parameters:
   *
   * - `resellerReference`
   * - `supplierReference`
   * - `localDate`
   * - `localDateStart` and `localDateEnd`
   * @param resellerReference The reseller reference on the booking
   * @param supplierReference The reference provided by the supplier
   * @param localDate All bookings made for a specific date
   * @param localDateStart First date of a date range search
   * @param localDateEnd Last date of a date range search
   * @param productId The product id to filter by
   * @param optionId The option id to filter by
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsGetBookings(
    resellerReference?: string,
    supplierReference?: string,
    localDate?: string,
    localDateStart?: string,
    localDateEnd?: string,
    productId?: string,
    optionId?: string,
  ): CancelablePromise<Array<Booking>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bookings/',
      query: {
        resellerReference: resellerReference,
        supplierReference: supplierReference,
        localDate: localDate,
        localDateStart: localDateStart,
        localDateEnd: localDateEnd,
        productId: productId,
        optionId: optionId,
      },
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Get Booking
   * Fetch the status of an existing booking.
   * @param uuid The UUID of the booking
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsGetBooking(uuid: string): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bookings/{uuid}',
      path: {
        uuid: uuid,
      },
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Booking Update
   * Updates a booking before and after it has been confirmed as long as it hasn''t been redeemed or within the cancellation cutoff window. To know if the booking can be updated check the booking''s `cancellable` field. If the booking can be cancelled, it can also be updated. It''s generally preferred to update a booking rather than cancelling it and rebooking
   * @param uuid The UUID of the booking
   * @param requestBody
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsBookingUpdate(uuid: string, requestBody: BookingUpdateBody): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/bookings/{uuid}',
      path: {
        uuid: uuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Booking Cancellation
   * For cancelling bookings. You can only cancel a booking if `booking.cancellable` is `TRUE`, and is within the booking cancellation cut-off window.
   * @param uuid The UUID of the booking
   * @param requestBody
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsBookingCancellation(
    uuid: string,
    requestBody: BookingCancellationBody,
  ): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/bookings/{uuid}/cancel',
      path: {
        uuid: uuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Booking Confirmation
   * This endpoint confirms the booking so it's ready to be used.
   * @param uuid The UUID of the booking
   * @param requestBody
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsBookingConfirmation(
    uuid: string,
    requestBody: BookingConfirmationBody,
  ): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/bookings/{uuid}/confirm',
      path: {
        uuid: uuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Extend Reservation
   * Use this endpoint to hold the availability for a booking longer if the status is `ON_HOLD`.
   * @param uuid The UUID of the booking
   * @param requestBody
   * @returns Booking The request has succeeded.
   * @throws ApiError
   */
  public static bookingsExtendReservation(
    uuid: string,
    requestBody: ExtendReservationBody,
  ): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/bookings/{uuid}/extend',
      path: {
        uuid: uuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
}
