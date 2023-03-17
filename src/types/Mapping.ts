export interface Mapping {
  resellerReference: string;
  resellerStatus: string;
  title: string;
  url: string;
  webhookUrl: Nullable<string>;
  optionRequired: boolean;
  unitRequired: boolean;
  productId: Nullable<string>;
  optionId: Nullable<string>;
  unitId: Nullable<string>;
  connected: boolean;
  expediaTourTime: Nullable<string>;
  gygPriceOverApi: boolean;
}
