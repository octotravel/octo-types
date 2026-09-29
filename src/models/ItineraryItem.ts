/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DurationUnit } from './DurationUnit';
import type { ItineraryItemType } from './ItineraryItemType';
export type ItineraryItem = {
	/**
	 * The name of the itinerary.
	 */
	name: string;
	/**
	 * The type of the itinerary.
	 * Possible values are `START`, `POI`, `END`, `EVENT`. The default is `START`.
	 */
	type: ItineraryItemType;
	/**
	 * The description of the itinerary.
	 */
	description: string | null;
	/**
	 * The address of the itinerary.
	 */
	address: string | null;
	/**
	 * The Google Place ID of the itinerary.
	 */
	googlePlaceId: string | null;
	/**
	 * The latitude of the itinerary.
	 */
	latitude: number | null;
	/**
	 * The longitude of the itinerary.
	 */
	longitude: number | null;
	/**
	 * The travel time of the itinerary.
	 */
	travelTime: string | null;
	/**
	 * The travel time amount of the itinerary.
	 */
	travelTimeAmount: number | null;
	/**
	 * The travel time unit of the itinerary.
	 */
	travelTimeUnit: DurationUnit | null;
	/**
	 * Human readable duration of the option. Duration starts to count on redemption.
	 * This field can be hidden by `hide_duration`.
	 */
	duration: string | null;
	/**
	 * The duration amount of the option.
	 * This field can be hidden by `hide_duration`.
	 */
	durationAmount: number;
	/**
	 * The duration unit. Possible values are `hour`, `minute`, `day`.
	 * This field can be hidden by `hide_duration`.
	 */
	durationUnit: DurationUnit;
};
