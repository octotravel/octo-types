import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { CategoryLabel } from '../models/CategoryLabel';

export const categoryLabelYupSchema = string()
  .oneOf(Object.values(CategoryLabel))
  .required() as SchemaOf<CategoryLabel>;
