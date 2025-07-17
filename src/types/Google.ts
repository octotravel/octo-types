export interface GoogleOptions {
  operator: Nullable<Operator>;
  rating: Nullable<Rating>;
  landing_page: Url;
  inventory_types: string[];
  landing_page_list_view: Url;
  option_categories: OptionCategories[];
  related_locations: RelatedLocations[];
}
interface Url {
  url: Nullable<string>;
}
interface Operator {
  name: string;
  google_business_profile_name: {
    localized_texts: LocalizedText[];
  };
  phone_number: string;
  locations: Location[];
}
interface OptionCategories {
  label: string;
}
interface RelatedLocations {
  location: {
    location: {
      place_id: string;
    };
  };
  relation_type: string;
}
interface Location {
  location: {
    place_id: string;
  };
}
interface Rating {
  average_value: Nullable<number>;
  rating_count: Nullable<number>;
}
interface LocalizedText {
  text: string;
  language_code: string;
}
