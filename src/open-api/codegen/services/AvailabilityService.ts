import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Availability } from '../models/Availability';
import type { AvailabilityCalendar } from '../models/AvailabilityCalendar';
import type { AvailabilityCalendarBody } from '../models/AvailabilityCalendarBody';
import type { AvailabilityCheckBody } from '../models/AvailabilityCheckBody';
export class AvailabilityService {
  /**
   * Availability Check
   * This endpoint is slightly slower as it will return an object for each individual departure time (or day). You have to perform this step to retrieve an `availabilityId` in order to confirm a sale, so if you just want to use this endpoint and skip the calendar endpoint then that's perfectly ok.
   *
   * You must pass in one of the following combinations of parameters for this endpoint:
   * - `localDate`
   * - `localeDateStart` and `localDateEnd`
   * - `availabilityIds`
   * @param requestBody
   * @returns Availability The request has succeeded.
   * @throws ApiError
   */
  public static availabilitiesAvailabilityCheck(
    requestBody: AvailabilityCheckBody,
  ): CancelablePromise<Array<Availability>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/availability/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Availability Calendar
   * This endpoint is highly optimised and will return a single object per day. It's designed to be queried for large date ranges and the result is used to populate an availability calendar.
   *
   * When the end user selects an open date you can call on `/availability` endpoint to get the `availabilityId` to create the booking
   * @param requestBody
   * @returns AvailabilityCalendar The request has succeeded.
   * @throws ApiError
   */
  public static availabilitiesAvailabilityCalendar(
    requestBody: AvailabilityCalendarBody,
  ): CancelablePromise<Array<AvailabilityCalendar>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/availability/calendar',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
}
