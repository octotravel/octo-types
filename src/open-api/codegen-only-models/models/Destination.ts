/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { SupplierContact } from './SupplierContact';
export type Destination = {
  /**
   * Unique identifier used in the platform to represent the destination.
   */
  id: string;
  /**
   * TRUE` identifies the destination as default, and should therefore rendered and selected first
   */
  default: boolean;
  /**
   * The name of the destination
   */
  name: string | null;
  /**
   * The name of the destination
   */
  country: string | null;
  contact: SupplierContact;
  /**
   * The name of the destination
   */
  latitude: number | null;
  /**
   * The name of the destination
   */
  longitude: number | null;
  googlePlaceId: string | null;
  /**
   * The URL of the image that represents the destination.
   */
  bannerImageUrl: string | null;
  /**
   * The URL of the image that represents the DESTINATION.
   */
  coverImageUrl: string | null;
  videoUrl: string | null;
  facebookUrl: string | null;
  googleUrl: string | null;
  tripadvisorUrl: string | null;
  twitterUrl: string | null;
  youtubeUrl: string | null;
  instagramUrl: string | null;
  categories: Array<Category>;
};
