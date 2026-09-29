/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityStatus } from './AvailabilityStatus';
import type { Resource } from './Resource';
import type { Seat } from './Seat';
import type { Seller } from './Seller';
export type AvailabilityResource = {
	/**
	 * Unique identifier for the resource.
	 */
	resourceId: string;
	resource: Resource;
	driver: Seller | null;
	guide: Seller | null;
	availableSeats: Array<Seat>;
	selectedSeats: Array<Seat>;
	available: boolean;
	status: AvailabilityStatus;
	/**
	 * Availability status message
	 */
	statusMessage: string;
	/**
	 * Availability status code
	 */
	statusCode: string;
	vacancies: number | null;
	capacity: number | null;
	maxUnits: number | null;
	totalCapacity: number | null;
	limitCapacity: number | null;
	limitPaxCount: number;
	maxPaxCount: number | null;
	noShows: number;
	paxCount: number;
	totalNoShows: number;
	totalPaxCount: number;
};
