import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { DeliveryOption } from '../models/DeliveryOption';
import { deliveryFormatYupSchema } from './DeliveryFormat';

export const deliveryOptionYupSchema = object().shape({
  deliveryFormat: deliveryFormatYupSchema.required(),
  deliveryValue: string().required(),
}) as SchemaOf<DeliveryOption>;
