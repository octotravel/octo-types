export interface GoogleOptions {
  operator: Nullable<GoogleOperator>;
  rating: Nullable<GoogleRating>;
  landing_page: GoogleUrl;
  inventory_types: string[];
  landing_page_list_view: GoogleUrl;
  option_categories: GoogleOptionCategories[];
  related_locations: GoogleRelatedLocations[];
}
interface GoogleUrl {
  url: Nullable<string>;
}

interface GoogleOperator {
  name: string;
  google_business_profile_name: {
    localized_texts: GoogleLocalizedText[];
  };
  phone_number: string;
  locations: GoogleLocation[];
}
interface GoogleOptionCategories {
  label: string;
}
interface GoogleRelatedLocations {
  location: {
    location: {
      place_id: string;
    };
  };
  relation_type: string;
}

interface GoogleLocation {
  location: {
    place_id: string;
  };
}
interface GoogleRating {
  average_value: Nullable<number>;
  rating_count: Nullable<number>;
}
interface GoogleLocalizedText {
  text: string;
  language_code: string;
}
