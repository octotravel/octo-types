import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { GetProductRequest_id } from '../models/GetProductRequest_id';

export const getProductRequest_idYupSchema = string().required() as SchemaOf<GetProductRequest_id>;
