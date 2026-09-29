import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { UnitItem } from '../models/UnitItem';
import { bookingStatusYupSchema } from './BookingStatus';
import { contactYupSchema } from './Contact';
import { pricingYupSchema } from './Pricing';
import { ticketYupSchema } from './Ticket';
import { unitYupSchema } from './Unit';

export const unitItemYupSchema = object().shape({
  uuid: string().required(),
  resellerReference: string().nullable().required(),
  supplierReference: string().nullable().required(),
  unitId: string().required(),
  unit: unitYupSchema.notRequired(),
  status: bookingStatusYupSchema.required(),
  utcRedeemedAt: string().nullable().required(),
  contact: contactYupSchema.required(),
  ticket: ticketYupSchema.nullable().required(),
  pricing: pricingYupSchema.notRequired(),
}) as SchemaOf<UnitItem>;
