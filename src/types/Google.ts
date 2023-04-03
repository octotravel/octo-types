export interface GoogleOptions {
    operator: Nullable<Operator>;
    rating: Nullable<Rating>;
    landing_page: Url;
    inventory_type: string;
    landing_page_list_view: Url;
    option_categories: Array<OptionCategories>;
    related_locations: Array<RelatedLocations>;
}
interface Url {
    url: Nullable<string>;
}
interface Operator {
    name: string;
    google_business_profile_name: {
        localized_text: Array<LocalizedText>;
    };
    phone_number: string;
    localtions: Array<Location>;
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