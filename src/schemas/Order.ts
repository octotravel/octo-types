import * as yup from "yup";

export type CreateOrderBodySchema = {
    currency?: string;
    expirationMinutes?: number;
}

export const createOrderBodySchema: yup.SchemaOf<CreateOrderBodySchema> = yup.object()
.shape({
    currency: yup.string().optional(),
    expirationMinutes: yup.number().optional()
});