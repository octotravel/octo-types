import * as yup from "yup";

export type GetProductPathParamsSchema = {
  id: string;
};

export const getProductPathParamsSchema: yup.SchemaOf<GetProductPathParamsSchema> =
  yup.object().shape({
    id: yup.string().required(),
  });
