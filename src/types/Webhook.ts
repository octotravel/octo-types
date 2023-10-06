import { Availability } from "./Availability";
import { Booking } from "./Booking";
import { CapabilityId } from "./Capability";
import { Supplier } from "./Supplier";

export enum WebhookEvent {
  BookingUpdate = "booking_update",
  AvailabilityUpdate = "availability_update",
}
export interface Webhook {
  id: string;
  event: WebhookEvent;
  url: Nullable<string>;
  retryOnError: boolean;
  useContactLanguage: boolean;
  headers: { [key: string]: string };
  capabilities: CapabilityId[];
}

export interface Diff {
  op: string;
  path: string;
  was: string;
  value: string;
}

export interface BookingUpdate {
  webhook: Webhook;
  booking: Booking;
  diff: Diff[];
}

export interface AvailabilityUpdate {
  webhook: Webhook;
  availability: Availability;
  productId?: string;
  optionId?: string;
  supplier?: Supplier;
}
