/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DurationUnit } from './DurationUnit';
import type { Notice } from './Notice';
export type BookingContent = {
	duration?: string;
	durationAmount?: number;
	durationUnit?: DurationUnit;
	meetingLocalDateTime?: string | null;
	meetingPoint?: string | null;
	meetingPointCoordinates?: string | null;
	meetingPointDirections?: string | null;
	meetingPointLatitude?: number | null;
	meetingPointLongitude?: number | null;
	notices?: Array<Notice>;
	termsAccepted?: boolean;
};
