import type { Booking } from './Booking';
import type { Option } from './Option';
import type { Product } from './Product';

export interface Package {
  title: string;
  count: number;
  includes: Include[];
}

export interface Include {
  id: string;
  required: boolean;
  limit: number;
  productId: string;
  product: Product;
  optionId: string;
  option: Option;
  validityDays: number;
}

export interface PackageBooking extends Booking {
  packageIncludeId: string;
  packageInclude: Include;
}
