import { string } from 'yup';
import type { SchemaOf } from 'yup';
import { CapabilityId } from '../models/CapabilityId';

export const capabilityIdYupSchema = string().oneOf(Object.values(CapabilityId)).required() as SchemaOf<CapabilityId>;
