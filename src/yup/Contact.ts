import { array, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Contact } from '../models/Contact';

export const contactYupSchema = object().shape({
  fullName: string().nullable().required(),
  firstName: string().nullable().required(),
  lastName: string().nullable().required(),
  emailAddress: string().nullable().required(),
  phoneNumber: string().nullable().required(),
  locales: array().of(string()).required(),
  postalCode: string().nullable().required(),
  country: string().nullable().required(),
  notes: string().nullable().required(),
}) as SchemaOf<Contact>;
