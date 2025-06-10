/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capability } from './Capability';
import type { Destination } from './Destination';
import type { SupplierContact } from './SupplierContact';
export type Supplier = {
  /**
   * Unique identifier used in the platform to represent the supplier.
   */
  id: string;
  /**
   * Name the supplier uses to identify itsel. Usually what the end customer will know the supplier as.
   */
  name: string;
  /**
   * This is the base URL that will be prepended to ALL other paths. The value SHOULD NOT contain a trailing /.
   */
  endpoint: string;
  contact: SupplierContact;
  /**
   * An array of capabilities that the supplier has. Possible values are:`octo/content` The supplier can provide pricing information
   */
  capabilities: Array<Capability>;
  /**
   * The country the supplier is based in.
   */
  country?: string | null;
  /**
   * An array of destinations the supplier operates in.
   */
  destinations?: Array<Destination>;
};
