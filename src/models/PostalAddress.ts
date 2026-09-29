/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PostalAddress = {
  /**
   * The primary address line, such as a street address, P.O. box, or company name. Null if not provided.
   */
  streetAddress: string | null;
  /**
   * The city or locality associated with the address.
   */
  addressLocality: string | null;
  /**
   * The state, province, or region associated with the address.
   */
  addressRegion: string | null;
  /**
   * The postal code or ZIP code for the address.
   */
  postalCode: string | null;
  /**
   * The postal code or ZIP code for the address.
   */
  addressCountry: string | null;
  /**
   * The post office box number associated with the address, if applicable.
   */
  postOfficeBoxNumber: string | null;
};
