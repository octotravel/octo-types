/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DependentAnswer = {
	/**
	 * Unique identifier of the question that must be answered first.
	 */
	questionId: string;
	/**
	 * The values of the answer to the other question that make this question available.
	 */
	values: Array<string>;
};
