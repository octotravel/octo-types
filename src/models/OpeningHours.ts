/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DurationUnit } from './DurationUnit';
/**
 * Defines the opening hours for this availability, even for start time-based availability. Supports multiple periods for breaks in the day.
 */
export type OpeningHours = {
	/**
	 * The opening time
	 */
	from: string;
	/**
	 * The closing time
	 */
	to: string;
	/**
	 * Optional label for how frequently the event occurs (e.g., daily, weekly).
	 */
	frequency?: string | null;
	/**
	 * Optional numeric amount representing the interval frequency.
	 */
	frequencyAmount?: number | null;
	/**
	 * Optional unit for frequency (e.g., day, week, month).
	 */
	frequencyUnit?: DurationUnit;
};
