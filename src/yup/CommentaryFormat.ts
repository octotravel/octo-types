import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { CommentaryFormat } from '../models/CommentaryFormat';

export const commentaryFormatYupSchema = string()
  .oneOf(Object.values(CommentaryFormat))
  .required() as SchemaOf<CommentaryFormat>;
