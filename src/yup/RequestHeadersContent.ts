import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { RequestHeadersContent } from '../models/RequestHeadersContent';

export const requestHeadersContentYupSchema = string().required() as SchemaOf<RequestHeadersContent>;
