import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { MediaRel } from '../models/MediaRel';

export const mediaRelYupSchema = string().oneOf(Object.values(MediaRel)).required() as SchemaOf<MediaRel>;
