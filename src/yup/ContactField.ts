import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { ContactField } from '../models/ContactField';

export const contactFieldYupSchema = string().oneOf(Object.values(ContactField)).required() as SchemaOf<ContactField>;
