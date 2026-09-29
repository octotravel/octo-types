import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Capability } from '../models/Capability';
import { capabilityIdYupSchema } from './CapabilityId';

export const capabilityYupSchema = object().shape({
  id: capabilityIdYupSchema.required(),
  revision: number().required(),
  required: bool().required(),
  dependencies: array().of(capabilityIdYupSchema).required(),
  docs: string().nullable().required(),
}) as SchemaOf<Capability>;
