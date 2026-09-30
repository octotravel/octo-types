import { object } from 'yup';
import type { SchemaOf } from 'yup';
import type { ListCapabilitiesRequest } from '../models/ListCapabilitiesRequest';

export const listCapabilitiesRequestYupSchema = object() as SchemaOf<ListCapabilitiesRequest>;
