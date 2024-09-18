import { object, ObjectSchema, string } from 'yup';

export interface GetProductPathParamsSchema {
  id: string;
  currency?: string;
}

export const getProductPathParamsSchema: ObjectSchema<GetProductPathParamsSchema> = object().shape({
  id: string().required(),
  currency: string().optional(),
});

export interface GetProductsPathParamSchema {
  currency?: string;
}

export const getProductsPathParamSchema: ObjectSchema<GetProductsPathParamSchema> = object().shape({
  currency: string().optional(),
});
