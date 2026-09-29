import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { MediaType } from '../models/MediaType';

export const mediaTypeYupSchema = string().oneOf(Object.values(MediaType)).required() as SchemaOf<MediaType>;
