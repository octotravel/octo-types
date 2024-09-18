import { object, string, number, ObjectSchema } from 'yup';
import { BookingContactSchema, bookingContactSchema } from './Booking';

export interface GiftReservationBodySchema {
  uuid?: string;
  expirationMinutes?: number;
  amount: number;
  currency: string;
  message?: string;
  recipient?: RecipientSchema;
  resellerReference?: string;
  notes?: string;
  contact?: BookingContactSchema;
}

interface RecipientSchema {
  fullName?: string;
  emailAddress?: string;
}

const recipentSchema: ObjectSchema<RecipientSchema> = object().shape({
  fullName: string().optional(),
  emailAddress: string().optional(),
});

export const giftReservationBodySchema: ObjectSchema<GiftReservationBodySchema> = object().shape({
  uuid: string().optional(),
  expirationMinutes: number().optional(),
  amount: number().required(),
  currency: string().required(),
  message: string().optional(),
  recipient: recipentSchema.optional(),
  resellerReference: string().optional(),
  notes: string().optional(),
  contact: bookingContactSchema.optional(),
});

export interface GiftUpdateBodySchema {
  uuid?: string;
  expirationMinutes?: number;
  amount?: number;
  currency?: string;
  message?: string;
  recipient?: RecipientSchema;
  resellerReference?: string;
  notes?: string;
  contact?: BookingContactSchema;
}

export const giftUpdateBodySchema: ObjectSchema<GiftUpdateBodySchema> = object().shape({
  uuid: string().optional(),
  expirationMinutes: number().optional(),
  amount: number().optional(),
  currency: string().optional(),
  message: string().optional(),
  recipient: recipentSchema.optional(),
  resellerReference: string().optional(),
  notes: string().optional(),
  contact: bookingContactSchema.optional(),
});

export interface GiftUpdatePathParamsSchema {
  uuid: string;
}

export const giftUpdatePathParamsSchema: ObjectSchema<GiftUpdatePathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface GiftConfirmationBodySchema {
  uuid?: string;
  expirationMinutes?: number;
  amount?: number;
  currency?: string;
  message?: string;
  recipient?: RecipientSchema;
  resellerReference?: string;
  notes?: string;
  contact?: BookingContactSchema;
}

export const giftConfirmationBodySchema: ObjectSchema<GiftConfirmationBodySchema> = object().shape({
  uuid: string().optional(),
  expirationMinutes: number().optional(),
  amount: number().optional(),
  currency: string().optional(),
  message: string().optional(),
  recipient: recipentSchema.optional(),
  resellerReference: string().optional(),
  notes: string().optional(),
  contact: bookingContactSchema.optional(),
});

export interface GiftConfirmationPathParamsSchema {
  uuid: string;
}

export const giftConfirmationPathParamsSchema: ObjectSchema<GiftConfirmationPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface GiftCancellationPathParamsSchema {
  uuid: string;
}

export const giftCancellationPathParamsSchema: ObjectSchema<GiftCancellationPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface GiftExtendBodySchema {
  expirationMinutes?: number;
}

export const giftExtendBodySchema: ObjectSchema<GiftExtendBodySchema> = object().shape({
  expirationMinutes: number().optional(),
});

export interface GiftExtendPathParamsSchema {
  uuid: string;
}

export const giftExtendPathParamsSchema: ObjectSchema<GiftExtendPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface GetGiftPathParamsSchema {
  uuid: string;
}

export const getGiftPathParamsSchema: ObjectSchema<GetGiftPathParamsSchema> = object().shape({
  uuid: string().required(),
});

export interface ListGiftsBodySchema {
  resellerReference?: string;
  supplierReference?: string;
}

export const listGiftsBodySchema: ObjectSchema<ListGiftsBodySchema> = object().shape({
  resellerReference: string().optional(),
  supplierReference: string().optional(),
});
