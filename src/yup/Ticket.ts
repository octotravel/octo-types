import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Ticket } from '../models/Ticket';
import { deliveryOptionYupSchema } from './DeliveryOption';
import { redemptionMethodYupSchema } from './RedemptionMethod';

export const ticketYupSchema = object().shape({
  redemptionMethod: redemptionMethodYupSchema.required(),
  utcRedeemedAt: string().nullable().required(),
  deliveryOptions: array().of(deliveryOptionYupSchema).required(),
}) as SchemaOf<Ticket>;
