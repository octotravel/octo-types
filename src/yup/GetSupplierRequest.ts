import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetSupplierRequest } from '../models/GetSupplierRequest';

export const getSupplierRequestYupSchema = object() as SchemaOf<GetSupplierRequest>;
