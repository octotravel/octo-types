import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { Refund } from '../models/Refund';

export const refundYupSchema = string().oneOf(Object.values(Refund)).required() as SchemaOf<Refund>;
