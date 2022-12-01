import { object, string, number } from "yup";
import type { SchemaOf } from "yup";

export type CreateOrderBodySchema = {
    currency?: string;
    expirationMinutes?: number;
}

export const createOrderBodySchema: SchemaOf<CreateOrderBodySchema> = object()
.shape({
    currency: string().optional(),
    expirationMinutes: number().optional()
});