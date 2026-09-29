import { string } from 'yup';
import type { SchemaOf } from 'yup';
import type { RequestHeaders_octoCapabilities } from '../models/RequestHeaders_octoCapabilities';

export const requestHeaders_octoCapabilitiesYupSchema =
  string().required() as SchemaOf<RequestHeaders_octoCapabilities>;
