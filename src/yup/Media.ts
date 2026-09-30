import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Media } from '../models/Media';
import { mediaRelYupSchema } from './MediaRel';
import { mediaTypeYupSchema } from './MediaType';

export const mediaYupSchema = object().shape({
  src: string().required(),
  type: mediaTypeYupSchema.required(),
  rel: mediaRelYupSchema.required(),
  title: string().nullable().required(),
  caption: string().nullable().required(),
  copyright: string().nullable().required(),
}) as SchemaOf<Media>;
