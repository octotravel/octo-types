/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CapabilityId } from './CapabilityId';
import type { WebhookEvent } from './WebhookEvent';
export type Webhook = {
	/**
	 * Unique identifier of the webhook.
	 */
	id: string;
	/**
	 * Event that triggers the webhook.
	 */
	event: WebhookEvent;
	/**
	 * Target URL where the webhook payload is sent.
	 */
	url: string | null;
	/**
	 * A JavaScript function body that runs in place of an HTTP delivery, receiving the payload's top-level fields as arguments.
	 */
	function: string | null;
	/**
	 * Whether to format the payload using the contact's preferred language.
	 */
	useContactLanguage: boolean;
	/**
	 * Custom headers to include in the webhook request.
	 */
	headers: Record<string, string>;
	/**
	 * List of capability identifiers associated with this webhook.
	 */
	capabilities: Array<CapabilityId>;
};
