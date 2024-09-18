import { array, boolean, mixed, object, ObjectSchema, string } from 'yup';
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

export const createWebhookBodyParamsSchema: ObjectSchema<CreateWebhookBodyParamsSchema> = object({
  url: string().optional(),
  event: string().oneOf(Object.values(WebhookEvent)).required(),
  retryOnError: boolean().optional(),
  useContactLanguage: boolean().optional(),
  headers: object().optional(),
  capabilities: array()
    .of(string().oneOf(Object.values(CapabilityId)).required())
    .optional(),
});

export interface DeleteWebhookPathParamsSchema {
  id: string;
}

export const deleteWebhookPathParamsSchema: ObjectSchema<DeleteWebhookPathParamsSchema> = object({
  id: string().required(),
});
