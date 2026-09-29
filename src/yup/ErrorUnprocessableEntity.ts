import type { SchemaOf } from 'yup';
import type { ErrorUnprocessableEntity } from '../models/ErrorUnprocessableEntity';
import { baseErrorYupSchema } from './BaseError';

export const errorUnprocessableEntityYupSchema = baseErrorYupSchema as SchemaOf<ErrorUnprocessableEntity>;
