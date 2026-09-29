/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DependentAnswer } from './DependentAnswer';
import type { QuestionInputType } from './QuestionInputType';
import type { SelectOption } from './SelectOption';
export type Question = {
	/**
	 * Unique identifier used in the platform to represent the question.
	 */
	id: string;
	/**
	 * The question that should be asked to the customer.
	 */
	label: string | null;
	/**
	 * The maximum length of the answer to the question.
	 */
	maxLength: number | null;
	/**
	 * The type of input that should be used to answer the question. Possible values are `radio`, `select`, `textarea`.
	 */
	inputType: QuestionInputType;
	/**
	 * `TRUE` identifies the question as required, and should therefore be answered by the customer
	 */
	required: boolean;
	/**
	 * The options that the customer can select from. Only present when `inputType` is `radio` or `select`.
	 */
	selectOptions: Array<SelectOption>;
	/**
	 * The answers to other questions that must be given before this question becomes available.
	 */
	dependentAnswers: Array<DependentAnswer>;
	coverImageUrl: string | null;
	/**
	 * Description A hint to help the customer answer the question.
	 */
	description: string | null;
	shortDescription: string | null;
	internalName: string | null;
	/**
	 * Title The question that should be asked to the customer.
	 */
	title: string | null;
	pattern: string | null;
};
