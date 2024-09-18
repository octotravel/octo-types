import { object, string, number, boolean, ObjectSchema } from 'yup';
import { BookingContactSchema, bookingContactSchema } from './Booking';
import { CardPaymentGateway } from '../types/CardPayment';

export interface CreateOrderBodySchema {
  currency?: string;
  expirationMinutes?: number;
  emailReceipt?: boolean;
  contact?: BookingContactSchema;
}

export const createOrderBodySchema: ObjectSchema<CreateOrderBodySchema> = object().shape({
  currency: string().optional(),
  expirationMinutes: number().optional(),
  emailReceipt: boolean().optional(),
  contact: bookingContactSchema.optional(),
});

export interface RetrieveOrderPathParamsSchema {
  id: string;
}

export const retrieveOrderPathParamsSchema: ObjectSchema<RetrieveOrderPathParamsSchema> = object().shape({
  id: string().required(),
});

export interface ExtendOrderBodySchema {
  expirationMinutes: number;
}

export const extendOrderBodySchema: ObjectSchema<ExtendOrderBodySchema> = object().shape({
  expirationMinutes: number().required(),
});

export interface ExtendOrderPathParamsSchema {
  id: string;
}

export const extendOrderPathParamsSchema: ObjectSchema<ExtendOrderPathParamsSchema> = object().shape({
  id: string().required(),
});

export interface OrderCardPaymentBodySchema {
  cardPayment?: {
    gateway?: CardPaymentGateway;
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

export const orderCardPaymentBodySchema: ObjectSchema<OrderCardPaymentBodySchema> = object().shape({
  cardPayment: object()
    .shape({
      gateway: string().oneOf(Object.values(CardPaymentGateway)).optional(),
      amount: number().integer().optional(),
      currency: string().optional(),
      notes: string().optional(),
      adyen: object()
        .shape({
          sessionId: string().required(),
        })
        .optional()
        .default(undefined),
      vivawallet: object()
        .shape({
          offerCode: string().required(),
          transactionId: string().required(),
        })
        .optional()
        .default(undefined),
      bridgepay: object()
        .shape({
          token: string().required(),
        })
        .optional()
        .default(undefined),
      stripe: object()
        .shape({
          paymentIntent: string().optional(),
          paymentMethod: string().optional(),
          setupIntent: string().optional(),
        })
        .optional()
        .default(undefined),
    })
    .optional()
    .default(undefined),
});

export interface OrderConfirmationBodySchema extends OrderCardPaymentBodySchema {
  currency?: string;
  expirationMinutes?: number;
  emailReceipt?: boolean;
  contact?: BookingContactSchema;
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

export const orderConfirmationPathParamsSchema: ObjectSchema<OrderConfirmationPathParamsSchema> = object().shape({
  id: string().required(),
});

export interface OrderCancellationBodySchema {
  reason?: string;
}

export const orderCancellationBodySchema: ObjectSchema<OrderCancellationBodySchema> = object().shape({
  reason: string().optional(),
});

export interface OrderCancellationPathParamsSchema {
  id: string;
}

export const orderCancellationPathParamsSchema: ObjectSchema<OrderCancellationPathParamsSchema> = object().shape({
  id: string().required(),
});
