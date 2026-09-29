import type { SchemaOf } from 'yup';
import type { ErrorBadRequest } from '../models/ErrorBadRequest';
import { baseErrorYupSchema } from './BaseError';

export const errorBadRequestYupSchema = baseErrorYupSchema as SchemaOf<ErrorBadRequest>;
