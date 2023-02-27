export interface GoogleOptions {
    operator: Operator;
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
    google_business_profile_name: string;
    phone_number: string;
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
