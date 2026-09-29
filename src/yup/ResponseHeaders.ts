import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { ResponseHeaders } from '../models/ResponseHeaders';

export const responseHeadersYupSchema = object() as SchemaOf<ResponseHeaders>;
