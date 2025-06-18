export enum ResellerStatus {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  DRAFT = 'DRAFT',
}

export interface Mapping {
  id: string;
  resellerReference: string;
  resellerStatus: ResellerStatus;
  title: string;
  url: string;
  webhookUrl: Nullable<string>;
  optionRequired: boolean;
  unitRequired: boolean;
  productId: Nullable<string>;
  optionId: Nullable<string>;
  unitId: Nullable<string>;
  connected: boolean;
}
