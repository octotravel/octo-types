import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { ResponseHeadersContent } from '../models/ResponseHeadersContent';

export const responseHeadersContentYupSchema = object() as SchemaOf<ResponseHeadersContent>;
