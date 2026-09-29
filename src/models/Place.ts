/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Identifiers } from './Identifiers';
import type { PostalAddress } from './PostalAddress';
export type Place = {
  /**
   * The latitude of the location, expressed in decimal degrees. Negative values represent southern latitudes.
   */
  latitude: number;
  /**
   * The longitude of the location, expressed in decimal degrees. Negative values represent western longitudes.
   */
  longitude: number;
  /**
   * Structured postal address details for the location.
   */
  postalAddress: PostalAddress;
  /**
   * A list of unique identifiers from third-party platforms (e.g., Google Maps, Yelp, Tripadvisor).
   */
  identifiers: Identifiers;
  /**
   * A list of URLs pointing to web pages or social media profiles for the location.
   */
  sameAs: Array<string>;
};
