import { object, string, number, boolean } from "yup";
import type { SchemaOf } from "yup";
import { Contact } from "../types/Booking";
import { bookingContactSchema } from "./Booking";

export interface CreateOrderBodySchema {
  currency?: string;
  expirationMinutes?: number;
  emailReceipt?: boolean;
  contact?: Contact;
}

export const createOrderBodySchema: SchemaOf<CreateOrderBodySchema> =
  object().shape({
    currency: string().optional(),
    expirationMinutes: number().optional(),
    emailReceipt: boolean().optional(),
    contact: bookingContactSchema.optional(),
  });

export interface RetrieveOrderPathParamsSchema {
  id: string;
}

export const retrieveOrderPathParamsSchema: SchemaOf<RetrieveOrderPathParamsSchema> =
  object().shape({
    id: string().required(),
  });

export interface ExtendOrderBodySchema {
  expirationMinutes: number;
}

export const extendOrderBodySchema: SchemaOf<ExtendOrderBodySchema> =
  object().shape({
    expirationMinutes: number().required(),
  });

export interface ExtendOrderPathParamsSchema {
  id: string;
}

export const extendOrderPathParamsSchema: SchemaOf<ExtendOrderPathParamsSchema> =
  object().shape({
    id: string().required(),
  });

export interface OrderConfirmationBodySchema {
  currency?: string;
  expirationMinutes?: number;
  emailReceipt?: boolean;
  contact?: Contact;
}

export const orderConfirmationBodySchema = object().shape({
  currency: string().optional(),
  expirationMinutes: number().optional(),
  emailReceipt: boolean().optional(),
  contact: bookingContactSchema.optional(),
});

export interface OrderConfirmationPathParamsSchema {
  id: string;
}

export const orderConfirmationPathParamsSchema: SchemaOf<OrderConfirmationPathParamsSchema> =
  object().shape({
    id: string().required(),
  });

export interface OrderCancellationBodySchema {
  reason?: string;
}

export const orderCancellationBodySchema: SchemaOf<OrderCancellationBodySchema> =
  object().shape({
    reason: string().optional(),
  });

export interface OrderCancellationPathParamsSchema {
  id: string;
}

export const orderCancellationPathParamsSchema: SchemaOf<OrderCancellationPathParamsSchema> =
  object().shape({
    id: string().required(),
  });
