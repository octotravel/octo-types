import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { ListCapabilitiesRequestHeaders } from '../models/ListCapabilitiesRequestHeaders';

export const listCapabilitiesRequestHeadersYupSchema = object() as SchemaOf<ListCapabilitiesRequestHeaders>;
