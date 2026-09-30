import { object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Commentary } from '../models/Commentary';
import { commentaryFormatYupSchema } from './CommentaryFormat';

export const commentaryYupSchema = object().shape({
  format: commentaryFormatYupSchema.required(),
  language: string().required(),
}) as SchemaOf<Commentary>;
