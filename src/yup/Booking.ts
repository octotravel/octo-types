import { array, bool, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Booking } from '../models/Booking';
import { availabilityYupSchema } from './Availability';
import { bookingCancellationYupSchema } from './BookingCancellation';
import { bookingStatusYupSchema } from './BookingStatus';
import { contactYupSchema } from './Contact';
import { deliveryMethodYupSchema } from './DeliveryMethod';
import { optionYupSchema } from './Option';
import { pricingYupSchema } from './Pricing';
import { productYupSchema } from './Product';
import { ticketYupSchema } from './Ticket';
import { unitItemYupSchema } from './UnitItem';

export const bookingYupSchema = object().shape({
  id: string().required(),
  uuid: string().required(),
  testMode: bool().required(),
  resellerReference: string().nullable().required(),
  supplierReference: string().nullable().required(),
  status: bookingStatusYupSchema.required(),
  utcCreatedAt: string().required(),
  utcUpdatedAt: string().required(),
  utcExpiresAt: string().nullable().required(),
  utcRedeemedAt: string().nullable().required(),
  utcConfirmedAt: string().nullable().required(),
  productId: string().required(),
  product: productYupSchema.notRequired(),
  optionId: string().required(),
  option: optionYupSchema.notRequired(),
  cancellable: bool().required(),
  cancellation: bookingCancellationYupSchema.nullable().required(),
  freesale: bool().required(),
  availabilityId: string().nullable().required(),
  availability: availabilityYupSchema.nullable().required(),
  contact: contactYupSchema.required(),
  notes: string().nullable().required(),
  deliveryMethods: array().of(deliveryMethodYupSchema).required(),
  voucher: ticketYupSchema.nullable().required(),
  unitItems: array().of(unitItemYupSchema).required(),
  pricing: pricingYupSchema.notRequired(),
}) as SchemaOf<Booking>;
