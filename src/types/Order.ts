import { Booking, Contact } from "./Booking";

export interface Order {
    id: string;
    testMode: boolean;
    supplierReference: string;
    settlementMethod: string;
    status: OrderStatus;
    utcExpiresAt: string;
    utcConfirmedAt: string;
    cancellable: boolean;
    bookings: Array<Booking>;
    contact: Contact;
}

enum OrderStatus {
    ON_HOLD = "ON_HOLD",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED"
}