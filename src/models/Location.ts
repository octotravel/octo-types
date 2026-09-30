/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationType } from './LocationType';
import type { Place } from './Place';
export type Location = {
  /**
   * The name of the location, providing a recognizable identifier for customers (e.g., "Statue of Liberty"). This field can be null if no name is available.
   */
  title: string | null;
  /**
   * A brief description of the location, summarizing its significance or role in the product (e.g., "Historic landmark and popular tourist destination"). This field can be null if no description is provided.
   */
  shortDescription: string | null;
  /**
   * Specifies the roles or purposes of the location within the product. START: The starting point or meeting location for the product or experience. This is where customers are expected to gather before the activity begins.
   * REDEMPTION: A location where customers must go to exchange tickets, collect passes, or redeem vouchers before proceeding to the starting point or experience (if applicable).
   * ITINERARY_ITEM: A designated stop or location within the itinerary, typically where customers pause or spend time during a moving tour or activity.
   * POINT_OF_INTEREST: A notable location or attraction that customers may see or pass by without stopping. Generally used for sightseeing locations.
   * ADMISSION_INCLUDED: A location where entry is included in the product price, often highlighting an attraction or event that customers can access as part of the experience.
   * END: The final point or drop-off location where the activity concludes.
   */
  types: Array<LocationType>;
  /**
   * The travel time, in minutes, needed to reach this location from the previous one in the itinerary. Useful for building schedules or itineraries. Set to null if travel time is unknown, not relevant, or not required.
   */
  minutesTo: number | null;
  /**
   * The approximate duration, in minutes, spent at this location. Helps provide clarity on the itinerary or scheduling details. Set to null if the time spent is flexible, unknown, or not applicable.
   */
  minutesAt: number | null;
  /**
   * An object containing detailed geospatial and postal address data for the location.
   */
  place: Place;
};
