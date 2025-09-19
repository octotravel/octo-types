import { type SchemaOf, array, boolean, mixed, object, string } from 'yup';
import { CapabilityId } from '../models/types.gen';

export enum WebhookEvent {
  BookingUpdate = 'booking_update',
  AvailabilityUpdate = 'availability_update',
}

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
