import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { PostalAddress } from '../models/PostalAddress';

export const postalAddressYupSchema = object().shape({
  streetAddress: string().nullable().required(),
  addressLocality: string().nullable().required(),
  addressRegion: string().nullable().required(),
  postalCode: string().nullable().required(),
  addressCountry: string().nullable().required(),
  postOfficeBoxNumber: string().nullable().required(),
}) as SchemaOf<PostalAddress>;
