import { object, string, number, boolean } from "yup";
import type { SchemaOf } from "yup";
import { Contact } from "../types/Booking";
import { bookingContactSchema } from "./Booking";

export interface GiftReservationBodySchema {
  uuid?: string;
  expirationMinutes?: number;
  amount: number;
  currency: string;
  message?: string;
  recipient?: Recipient;
  resellerReference?: string;
  notes?: string;
  contact?: Contact;
};

interface Recipient {
  fullName?: string;
  emailAddress?: string;
};

const recipentSchema: SchemaOf<Recipient> = 
  object().shape({
    fullName: string().optional(),
    emailAddress: string().optional()
  });

export const giftReservationBodySchema: SchemaOf<GiftReservationBodySchema> =
  object().shape({
    uuid: string().optional(),
    expirationMinutes: number().optional(),
    amount: number().required(),
    currency: string().required(),
    message: string().optional(),
    recipient: recipentSchema.optional(),
    resellerReference: string().optional(),
    notes: string().optional(),
    contact: bookingContactSchema.optional()
  });

export interface GiftUpdateBodySchema {
  uuid?: string;
  expirationMinutes?: number;
  amount?: number;
  currency?: string;
  message?: string;
  recipient?: Recipient;
  resellerReference?: string;
  notes?: string;
  contact?: Contact;
};

export const giftUpdateBodySchema: SchemaOf<GiftUpdateBodySchema> =
  object().shape({
    uuid: string().optional(),
    expirationMinutes: number().optional(),
    amount: number().optional(),
    currency: string().optional(),
    message: string().optional(),
    recipient: recipentSchema.optional(),
    resellerReference: string().optional(),
    notes: string().optional(),
    contact: bookingContactSchema.optional()
  });

export interface GiftUpdatePathParamsSchema {
  uuid: string;
};

export const giftUpdatePathParamsSchema: SchemaOf<GiftUpdatePathParamsSchema> = 
  object().shape({
    uuid: string().required()
  });

export interface GiftConfirmationBodySchema {
  uuid?: string;
  expirationMinutes?: number;
  amount?: number;
  currency?: string;
  message?: string;
  recipient?: Recipient;
  resellerReference?: string;
  notes?: string;
  contact?: Contact;
};

export const giftConfirmationBodySchema: SchemaOf<GiftConfirmationBodySchema> =
  object().shape({
    uuid: string().optional(),
    expirationMinutes: number().optional(),
    amount: number().optional(),
    currency: string().optional(),
    message: string().optional(),
    recipient: recipentSchema.optional(),
    resellerReference: string().optional(),
    notes: string().optional(),
    contact: bookingContactSchema.optional()
  });

export interface GiftConfirmationPathParamsSchema {
  uuid: string;
};

export const giftConfirmationPathParamsSchema: SchemaOf<GiftConfirmationPathParamsSchema> = 
  object().shape({
    uuid: string().required()
  });

export interface GiftCancellationPathParamsSchema {
  uuid: string;
};

export const giftCancellationPathParamsSchema: SchemaOf<GiftCancellationPathParamsSchema> = 
  object().shape({
    uuid: string().required()
  });

export interface GiftExtendBodySchema {
  expirationMinutes?: number;
};

export const giftExtendBodySchema: SchemaOf<GiftExtendBodySchema> = 
  object().shape({
    expirationMinutes: number().optional()
  });

export interface GiftExtendPathParamsSchema {
  uuid: string;
};

export const giftExtendPathParamsSchema: SchemaOf<GiftExtendPathParamsSchema> = 
  object().shape({
    uuid: string().required()
  });

export interface GetGiftPathParamsSchema {
  uuid: string;
};

export const getGiftPathParamsSchema: SchemaOf<GetGiftPathParamsSchema> =
  object().shape({
    uuid: string().required()
  });

export interface ListGiftsBodySchema {
  resellerReference?: string;
  supplierReference?: string;
};

export const listGiftsBodySchema: SchemaOf<ListGiftsBodySchema> =
  object().shape({
    resellerReference: string().optional(),
    supplierReference: string().optional()
  });