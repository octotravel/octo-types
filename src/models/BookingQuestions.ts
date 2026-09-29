/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionAnswer } from './QuestionAnswer';
export type BookingQuestions = {
	/**
	 * An array of questions and andswers that will be included in the booking.
	 * This field is only present when octo/questions capability is requested.
	 */
	questionAnswers?: Array<QuestionAnswer>;
};
