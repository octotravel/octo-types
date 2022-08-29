export interface PickupPoint {
  id: string;
  name: string;
  direction: Nullable<string>;
  address: string,
  latitude: Nullable<number>;
  longitude: Nullable<number>;
  googlePlaceId: Nullable<string>;
  street: Nullable<string>;
  postalCode: Nullable<string>;
  locality: Nullable<string>;
  region: Nullable<string>;
  state: Nullable<string>;
  country: Nullable<string>;
}
