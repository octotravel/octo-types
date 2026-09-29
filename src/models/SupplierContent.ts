/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Media } from './Media';
export type SupplierContent = {
  /**
   * A brief, customer-facing description of the supplier. This field provides a concise overview of the supplier's business and may be null if no description is available.
   */
  shortDescription?: string | null;
  /**
   * A list of supplier media files hosted at stable URLs. Media enhances the visual and informational representation of the supplier, such as logos and supporting images. This array can be null if no media is available. Note: Media details are intentionally repeated at various levels.
   */
  media?: Array<Media>;
};
