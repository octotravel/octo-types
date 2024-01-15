import { object, string, number, boolean } from "yup";
import type { SchemaOf } from "yup";
import { Contact } from "../types/Booking";
import { bookingContactSchema } from "./Booking";
import { CardPaymentGateway } from "../types/CardPayment";

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

export interface OrderCardPaymentBodySchema {
  cardPayment?: {
    gateway: CardPaymentGateway;
    amount?: number;
    currency?: string;
    notes?: string;
    adyen?: {
      sessionId: string;
    };
    vivawallet?: {
      offerCode: string;
      transactionId: string;
    };
    bridgepay?: {
      token: string;
    };
    stripe?: {
      paymentIntent?: string;
      paymentMethod?: string;
      setupIntent?: string;
    };
  };
}

export const orderCardPaymentBodySchema: SchemaOf<OrderCardPaymentBodySchema> =
  object().shape({
    cardPayment: object()
      .shape({
        gateway: string().required(),
        amount: number().integer().optional(),
        currency: string().optional(),
        notes: string().optional(),
        adyen: object()
          .shape({
            sessionId: string().required(),
          })
          .optional(),
        vivawallet: object()
          .shape({
            offerCode: string().required(),
            transactionId: string().required(),
          })
          .optional(),
        bridgepay: object()
          .shape({
            token: string().required(),
          })
          .optional(),
        stripe: object()
          .shape({
            paymentIntent: string().optional(),
            paymentMethod: string().optional(),
            setupIntent: string().optional(),
          })
          .optional(),
      })
      .optional(),
  });

export interface OrderConfirmationBodySchema
  extends OrderCardPaymentBodySchema {
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
  ...orderCardPaymentBodySchema.fields,
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
