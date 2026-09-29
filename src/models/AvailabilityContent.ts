/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Fare } from './Fare';
import type { Notice } from './Notice';
import type { TourGroup } from './TourGroup';
export type AvailabilityContent = {
	/**
	 * Optional text for the meeting point location.
	 */
	meetingPoint?: string | null;
	/**
	 * Optional meeting point coordinates as an string: longitude, latitude
	 */
	meetingPointCoordinates?: string | null;
	/**
	 * Optional meeting point direstions
	 */
	meetingPointDirections?: string | null;
	/**
	 * Latitude component of the meeting point.
	 */
	meetingPointLatitude?: number | null;
	/**
	 * Longitude component of the meeting point.
	 */
	meetingPointLongitude?: number | null;
	/**
	 * Local datetime string (ISO 8601) for when to meet.
	 */
	meetingLocalDateTime?: string | null;
	/**
	 * Optional reference to the tour group this availability belongs to.
	 */
	tourGroup?: TourGroup | null;
	fare?: Fare | null;
	/**
	 * List of important notices related to the availability.
	 */
	notices?: Array<Notice>;
};
