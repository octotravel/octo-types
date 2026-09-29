/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FAQ = {
	/**
	 * The text of the frequently asked question. This should be a well-phrased question that reflects typical customer concerns or queries about the product (e.g., "Is hotel pickup included?", "What is the cancellation policy?"). Note: FAQs are intentionally repeated at both product and option levels, enabling suppliers to address questions specific to each context. Resellers must combine FAQs from both levels for customer presentation.
	 */
	question: string;
	/**
	 * The detailed response to the corresponding question. Answers should be accurate, informative, and written in a way that resolves customer uncertainty (e.g., "Yes, hotel pickup is included within a 10-mile radius of the city center.", "Cancellations are free up to 24 hours before the activity.").
	 */
	answer: string;
};
