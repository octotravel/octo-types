import * as yup from "yup";

export type BookingContactSchema = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  country?: string;
  notes?: string;
  locales?: Array<string>;
};

export const bookingContactSchema: yup.SchemaOf<BookingContactSchema> = yup
  .object()
  .shape({
    fullName: yup.string().notRequired(),
    firstName: yup.string().notRequired(),
    lastName: yup.string().notRequired(),
    emailAddress: yup.string().notRequired(),
    phoneNumber: yup.string().notRequired(),
    country: yup.string().notRequired(),
    notes: yup.string().notRequired(),
    locales: yup.array().of(yup.string()).notRequired(),
  });

export interface BookingUnitItemSchema {
  uuid?: string;
  unitId: string;
  resellerReference?: string;
  contact?: BookingContactSchema;
}

export const bookingUnitItemSchema: yup.SchemaOf<BookingUnitItemSchema> = yup
  .object()
  .shape({
    uuid: yup.string().notRequired(),
    unitId: yup.string().required(),
    resellerReference: yup.string().notRequired(),
    contact: bookingContactSchema.notRequired(),
  });

export interface CreateBookingSchema extends BookingPickupSchema {
  uuid?: string;
  resellerReference?: string;
  productId: string;
  optionId: string;
  availabilityId: string;
  expirationMinutes?: number;
  notes?: string;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

interface BookingPickupSchema {
  pickupRequested?: boolean;
  pickupPointId?: string;
  pickupHotel?: string;
}

export const createBookingSchema: yup.SchemaOf<CreateBookingSchema> = yup
  .object()
  .shape({
    uuid: yup.string().notRequired(),
    resellerReference: yup.string().notRequired(),
    productId: yup.string().required(),
    optionId: yup.string().required(),
    availabilityId: yup.string().required(),
    expirationMinutes: yup.number().integer().notRequired(),
    notes: yup.string().notRequired(),
    emailReceipt: yup.bool().notRequired(),
    unitItems: yup.array().of(bookingUnitItemSchema).required(),
    contact: bookingContactSchema.notRequired().default(undefined),
    // pickups
    pickupRequested: yup.bool().notRequired(),
    pickupPointId: yup.string().notRequired(),
    pickupHotel: yup.string().notRequired(),
  });

export interface UpdateBookingSchema extends BookingPickupSchema {
  resellerReference?: string;
  productId?: string;
  optionId?: string;
  availabilityId?: string;
  expirationMinutes?: number;
  notes?: string;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

export const updateBookingSchema: yup.SchemaOf<UpdateBookingSchema> = yup
  .object()
  .shape({
    resellerReference: yup.string().notRequired(),
    productId: yup.string().notRequired(),
    optionId: yup.string().notRequired(),
    availabilityId: yup.string().notRequired(),
    expirationMinutes: yup.number().integer().notRequired(),
    notes: yup.string().notRequired(),
    emailReceipt: yup.bool().notRequired(),
    unitItems: yup.array().of(bookingUnitItemSchema).notRequired(),
    contact: bookingContactSchema.notRequired().default(undefined),
    // pickups
    pickupRequested: yup.bool().notRequired(),
    pickupPointId: yup.string().notRequired(),
    pickupHotel: yup.string().notRequired(),
  });

export interface ConfirmBookingSchema extends BookingPickupSchema {
  resellerReference?: string;
  notes?: string;
  emailReceipt?: boolean;
  unitItems: BookingUnitItemSchema[];
  contact?: BookingContactSchema;
}

export const confirmBookingSchema: yup.SchemaOf<ConfirmBookingSchema> = yup
  .object()
  .shape({
    resellerReference: yup.string().notRequired(),
    notes: yup.string().notRequired(),
    emailReceipt: yup.bool().notRequired(),
    unitItems: yup.array().of(bookingUnitItemSchema).notRequired(),
    contact: bookingContactSchema.notRequired().default(undefined),
    // pickups
    pickupRequested: yup.bool().notRequired(),
    pickupPointId: yup.string().notRequired(),
    pickupHotel: yup.string().notRequired(),
  });

export type CancelBookingSchema = {
  reason?: string;
  force?: boolean;
};

export const cancelBookingSchema: yup.SchemaOf<CancelBookingSchema> = yup
  .object()
  .shape({
    reason: yup.string().notRequired(),
    force: yup.boolean().notRequired(),
  });

export type ExtendBookingSchema = {
  expirationMinutes?: number;
};

export const extendBookingSchema: yup.SchemaOf<ExtendBookingSchema> = yup
  .object()
  .shape({
    expirationMinutes: yup.number().integer().notRequired(),
  });
