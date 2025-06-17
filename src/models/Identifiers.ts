/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the type or source of the identifier for the location. This field defines the platform or system where the identifier is valid, allowing for seamless integration with third-party systems or mapping platforms. Common examples include:
 * googlePlaceId: A unique identifier for locations on Google Maps.
 * applePlaceId: A unique identifier for locations on Apple Maps.
 * tripadvisorLocationId: A unique identifier for listings on TripAdvisor.
 * yelpPlaceId: A unique identifier for locations on Yelp.
 * facebookPlaceId: A unique identifier for places on Facebook.
 * foursquarePlaceId: A unique identifier for venues on Foursquare.
 * baiduPlaceId: A unique identifier for locations on Baidu Maps.
 * amapPlaceId: A unique identifier for locations on Amap (China-based mapping platform).
 */
export type Identifiers = {
  googlePlaceId: string | null;
  applePlaceId: string | null;
  tripadvisorLocationId: string | null;
  yelpPlaceId: string | null;
  facebookPlaceId: string | null;
  foursquarePlaceId: string | null;
  baiduPlaceId: string | null;
  amapPlaceId: string | null;
};
