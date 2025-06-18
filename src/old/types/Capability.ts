export enum CapabilityId {
  Content = 'octo/content',
  Pricing = 'octo/pricing',
  Pickups = 'octo/pickups',
  Adjustments = 'octo/adjustments',
  Offers = 'octo/offers',
  Cart = 'octo/cart',
  CardPayments = 'octo/cardPayments',
  Checkin = 'octo/checkin',
  Webhooks = 'octo/webhooks',
  Mappings = 'octo/mappings',
  Redemption = 'octo/redemption',
  Google = 'octo/google',
  Questions = 'octo/questions',
  Resources = 'octo/resources',
  Extras = 'octo/extras',
  Packages = 'octo/packages',
}

export interface Capability {
  id: CapabilityId;
  revision: number;
  required: boolean;
  dependencies: CapabilityId[];
  docs: Nullable<string>;
}
