/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feature } from './Feature';
export type UnitContent = {
  /**
   * The public-facing name of the unit, designed to be displayed to customers. This should clearly convey the nature of the unit, such as "Adult" or "Student".
   */
  title?: string | null;
  /**
   * A concise summary of the unit, offering key details to customers. This helps in differentiating units and highlighting important characteristics.
   */
  shortDescription?: string;
  /**
   * An array of structured objects describing various aspects of the unit's features, grouped into clear categories. These include details about what is included, excluded, emphasized, essential, or safety-related, ensuring transparency and enhancing the option’s appeal to customers. Note: Features are intentionally repeated at both product and option levels, allowing suppliers to specify details where most applicable. Resellers must combine information from both levels for a comprehensive customer view.
   */
  features?: Array<Feature>;
};
