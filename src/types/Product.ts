import type { AvailabilityType } from './Availability';
import type { GoogleOptions } from './Google';
import type { Option } from './Option';
import type { PricingPer } from './Pricing';
import type { Question } from './Question';

export enum DeliveryFormat {
  PDF_URL = 'PDF_URL',
  QRCODE = 'QRCODE',
  CODE128 = 'CODE128',
  PKPASS_URL = 'PKPASS_URL',
  AZTECCODE = 'AZTECCODE',
  GOOGLE_WALLET_URL = 'GOOGLE_WALLET_URL',
}

export enum DeliveryMethod {
  VOUCHER = 'VOUCHER',
  TICKET = 'TICKET',
}

export enum RedemptionMethod {
  DIGITAL = 'DIGITAL',
  PRINT = 'PRINT',
  MANIFEST = 'MANIFEST',
}

export interface Image {
  url: string;
  title: Nullable<string>;
  caption: Nullable<string>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Destination {
  id: string;
  default: boolean;
  name: string;
  country: string;
  contact: DestinationContact;
  latitude: number;
  longitude: number;
}

interface DestinationContact {
  website: Nullable<string>;
  email: Nullable<string>;
  telephone: Nullable<string>;
  address: Nullable<string>;
}

export interface Category {
  id: string;
  default: boolean;
  title: string;
  shortDescription: Nullable<string>;
  coverImageUrl: Nullable<string>;
  bannerImageUrl: Nullable<string>;
}

export interface Product extends ProductContent, ProductPricing, ProductQuestions, ProductGoogle, ProductPackage {
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
  deliveryFormats: DeliveryFormat[];
  deliveryMethods: DeliveryMethod[];
  redemptionMethod: RedemptionMethod;
  freesaleDurationAmount: number;
  freesaleDurationUnit: string;
  options: Option[];
}

export interface ProductContent {
  title?: string;
  country?: string;
  location?: Nullable<string>;
  subtitle?: Nullable<string>;
  shortDescription?: Nullable<string>;
  description?: Nullable<string>;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  bookingTerms?: Nullable<string>;
  redemptionInstructions?: Nullable<string>;
  cancellationPolicy?: Nullable<string>;
  destination?: Destination;
  categories?: Category[];
  faqs?: FAQ[];
  coverImageUrl?: Nullable<string>;
  bannerImageUrl?: Nullable<string>;
  videoUrl?: Nullable<string>;
  galleryImages?: Image[];
  bannerImages?: Image[];
  pointToPoint?: boolean;
  privacyTerms?: Nullable<string>;
  alert?: Nullable<string>;
}

export interface ProductPricing {
  defaultCurrency?: string;
  availableCurrencies?: string[];
  pricingPer?: PricingPer;
  includeTax?: boolean;
}

export interface ProductQuestions {
  questions?: Question[];
}

export interface ProductGoogle {
  googleOptions?: GoogleOptions;
}

export interface ProductPackage {
  isPackage?: boolean;
}
