import { AvailabilityType } from "./Availability";
import { PickupPoint } from "./PickupPoint";
import { PricingPer } from "./Pricing";
import { Option } from "./Option";
import { Question } from "./Question";

export enum DeliveryFormat {
  PDF_URL = "PDF_URL",
  QRCODE = "QRCODE",
  CODE128 = "CODE128",
}

export enum DeliveryMethod {
  VOUCHER = "VOUCHER",
  TICKET = "TICKET",
}

export enum RedemptionMethod {
  DIGITAL = "DIGITAL",
  PRINT = "PRINT",
}

export type Image = {
  url: string;
  title: Nullable<string>;
  caption: Nullable<string>;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Destination = {
  id: string;
  default: boolean;
  name: string;
  country: string;
  contact: DestinationContact;
  latitude: number;
  longitude: number;
};

type DestinationContact = {
  website: Nullable<string>;
  email: Nullable<string>;
  telephone: Nullable<string>;
  address: Nullable<string>;
};

export type Category = {
  id: string;
  default: boolean;
  title: string;
  shortDescription: Nullable<string>;
  coverImageUrl: Nullable<string>;
  bannerImageUrl: Nullable<string>;
};

export interface Product
  extends ProductContent,
    ProductPricing,
    ProductQuestions {
  id: string;
  internalName: string;
  reference: Nullable<string>;
  locale: string;
  timeZone: string;
  allowFreesale: boolean;
  instantConfirmation: boolean;
  instantDelivery: boolean;
  availabilityRequired: boolean;
  availabilityType: AvailabilityType;
  deliveryFormats: Array<DeliveryFormat>;
  deliveryMethods: Array<DeliveryMethod>;
  redemptionMethod: RedemptionMethod;
  options: Array<Option>;
}

export interface ProductContent {
  title?: string;
  country?: string;
  location?: Nullable<string>;
  subtitle?: Nullable<string>;
  shortDescription?: Nullable<string>;
  description?: Nullable<string>;
  highlights?: Array<string>;
  inclusions?: Array<string>;
  exclusions?: Array<string>;
  bookingTerms?: Nullable<string>;
  redemptionInstructions?: Nullable<string>;
  cancellationPolicy?: Nullable<string>;
  destination?: Destination;
  categories?: Array<Category>;
  faqs?: Array<FAQ>;
  coverImageUrl?: Nullable<string>;
  bannerImageUrl?: Nullable<string>;
  videoUrl?: Nullable<string>;
  galleryImages?: Array<Image>;
  bannerImages?: Array<Image>;
}

export interface ProductPricing {
  defaultCurrency?: string;
  availableCurrencies?: Array<string>;
  pricingPer?: PricingPer;
}

export interface ProductQuestions {
  questions?: Question[];
}
