import { Booking } from "./Booking";
import { Option } from "./Option";
import { Product } from "./Product";

export interface Package {
  title: string;
  count: number;
  includes: Array<Include>;
}

export interface Include {
  id: string;
  required: boolean;
  limit: number;
  productId: string;
  product: Product;
  optionId: string;
  option: Option;
}

export interface PackageBooking extends Booking {
  packageIncludeId: string;
  packageInclude: Include;
}
