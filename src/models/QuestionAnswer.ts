/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from './Question';
export type QuestionAnswer = {
	/**
	 * Unique identifier used in the platform to represent the question.
	 */
	questionId: string;
	question: Question;
	value: string | null;
};
