/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Category = {
  /**
   * Unique identifier used in the platform to represent the category.
   */
  id: string;
  /**
   * TRUE` identifies the category as default, and should therefore rendered and selected first
   */
  default: boolean;
  /**
   * The name of the category.
   */
  name: string | null;
  /**
   * The title of the category.
   */
  title: string | null;
  /**
   * The description of the category
   */
  shortDescription: string | null;
  /**
   * The URL of the image that represents the category.
   */
  bannerImageUrl: string | null;
  /**
   * The URL of the image that represents the category.
   */
  coverImageUrl: string | null;
  productIds: Array<string>;
};
