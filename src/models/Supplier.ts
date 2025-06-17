/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Media } from './Media';
import type { SupplierContact } from './SupplierContact';
export type Supplier = {
  /**
   * Unique identifier for the supplier, used across the platform to represent this supplier entity. This identifier must be unique within the supplier system.
   */
  id: string;
  /**
   * Name used to identify the supplier within the platform. This name is typically recognized by end customers as the official name of the supplier's business entity. It should clearly represent the supplier's brand or identity to ensure consistency across platforms. For larger multi-venue suppliers, this represents the parent entity's name. Other associated entities or sub-divisions can be specified using the octo/content capability through the venues field.
   */
  name: string;
  /**
   * The base URL that is prepended to all other API paths. The value should not contain a trailing slash and must follow URI format.
   */
  endpoint: string;
  /**
   * A structured object containing defined contact fields related to the supplier. This includes various communication methods (e.g., website, email, phone) and address information. It ensures standardized contact details that facilitate seamless communication with the supplier for both customers and partners.
   */
  contact: SupplierContact;
  /**
   * A brief, customer-facing description of the supplier. This field provides a concise overview of the supplier's business and may be null if no description is available.
   */
  shortDescription?: string | null;
  /**
   * A list of supplier media files hosted at stable URLs. Media enhances the visual and informational representation of the supplier, such as logos and supporting images. This array can be null if no media is available. Note: Media details are intentionally repeated at various levels.
   */
  media?: Array<Media>;
};
