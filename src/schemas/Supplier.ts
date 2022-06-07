import * as yup from "yup";

export type GetSupplierPathParamsSchema = {
  id: string;
};

export const getSupplierPathParamsSchema: yup.SchemaOf<GetSupplierPathParamsSchema> =
  yup.object().shape({
    id: yup.string().required(),
  });
