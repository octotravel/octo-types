/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DurationUnit } from './DurationUnit';
import type { ItineraryItem } from './ItineraryItem';
import type { Point } from './Point';
export type OptionContent = {
	/**
	 * The title of the option. Only present when octo/content capability is requested.
	 */
	title?: string;
	/**
	 * The subtitle of the option. Only present when octo/content capability is requested.
	 */
	subtitle?: string | null;
	/**
	 * The language of the option. Only present when octo/content capability is requested.
	 */
	language?: string;
	/**
	 * The description of the option. Only present when octo/content capability is requested.
	 */
	shortDescription?: string | null;
	/**
	 * Human readable duration of the option. Duration starts to count on redemption.
	 * This field can be hidden by `hide_duration`.
	 * Only present when octo/content capability is requested.
	 */
	duration?: string | null;
	/**
	 * The duration amount of the option.
	 * This field can be hidden by `hide_duration`.
	 * Only present when octo/content capability is requested.
	 */
	durationAmount?: number | null;
	/**
	 * The duration unit. Possible values are `hour`, `minute`, `day`.
	 * This field can be hidden by `hide_duration`.
	 * Only present when octo/content capability is requested.
	 */
	durationUnit?: DurationUnit | null;
	/**
	 * The cover image URL of the option. Only present when octo/content capability is requested.
	 */
	coverImageUrl?: string | null;
	/**
	 * The itinerary of the option. Only present when octo/content capability is requested.
	 */
	itinerary?: Array<ItineraryItem> | null;
	/**
	 * The origin point of the option. Only present when octo/content capability is requested.
	 */
	fromPoint?: Point | null;
	/**
	 * The destination point of the option. Only present when octo/content capability is requested.
	 */
	toPoint?: Point | null;
	meetingPoint?: string | null;
	meetingPointCoordinates?: string | null;
	meetingPointDirections?: string | null;
	meetingPointLatitude?: number | null;
	meetingPointLongitude?: number | null;
};
