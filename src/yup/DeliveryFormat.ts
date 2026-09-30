import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { DeliveryFormat } from '../models/DeliveryFormat';

export const deliveryFormatYupSchema = string()
  .oneOf(Object.values(DeliveryFormat))
  .required() as SchemaOf<DeliveryFormat>;
