import { array, boolean, mixed, object, SchemaOf, string } from 'yup';
import { CapabilityId } from '../types/Capability';
import { WebhookEvent } from '../types/Webhook';

export interface CreateWebhookBodyParamsSchema {
  url?: string;
  event: WebhookEvent;
  retryOnError?: boolean;
  useContactLanguage?: boolean;
  headers?: Record<string, string>;
  capabilities?: CapabilityId[];
}

export const createWebhookBodyParamsSchema: SchemaOf<CreateWebhookBodyParamsSchema> = object({
  url: string().notRequired(),
  event: mixed().oneOf(Object.values(WebhookEvent)).required(),
  retryOnError: boolean().optional(),
  useContactLanguage: boolean().optional(),
  headers: object().optional(),
  capabilities: array()
    .of(mixed().oneOf(Object.values(CapabilityId)))
    .optional(),
});

export interface DeleteWebhookPathParamsSchema {
  id: string;
}

export const deleteWebhookPathParamsSchema: SchemaOf<DeleteWebhookPathParamsSchema> = object({
  id: string().required(),
});
