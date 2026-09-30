import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetProductsRequest } from '../models/GetProductsRequest';

export const getProductsRequestYupSchema = object() as SchemaOf<GetProductsRequest>;
