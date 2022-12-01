import { Booking, Contact } from "./Booking";
import { Pricing } from "./Pricing";

export interface Order {
  id: string;
  testMode: boolean;
  supplierReference: string;
  settlementMethod: string;
  status: OrderStatus;
  utcExpiresAt: string;
  utcConfirmedAt: Nullable<string>;
  cancellable: boolean;
  bookings: Array<Booking>;
  contact: Contact;
  termsAccepted?: boolean;
  pricing?: Pricing;
  offerCombinations?: any[];
  cardPayment?: any;
  returnUrl?: string;
}

enum OrderStatus {
  ON_HOLD = "ON_HOLD",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}
