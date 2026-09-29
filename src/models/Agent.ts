/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Agent = {
	/**
	 * A unique ID / UUID generated to identify the agent.
	 */
	id: string;
	/**
	 * Agent name.
	 */
	name: string;
	/**
	 * Agent reference.
	 */
	reference: string | null;
	/**
	 * An array of tags that can be used to filter.
	 */
	tags: Array<string>;
};
