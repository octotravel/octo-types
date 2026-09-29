import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { DeliveryMethod } from '../models/DeliveryMethod';

export const deliveryMethodYupSchema = string()
  .oneOf(Object.values(DeliveryMethod))
  .required() as SchemaOf<DeliveryMethod>;
