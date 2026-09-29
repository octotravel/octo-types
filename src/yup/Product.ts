import { array, bool, number, object, string } from 'yup';
import type { SchemaOf } from 'yup';
import type { Product } from '../models/Product';
import { availabilityTypeYupSchema } from './AvailabilityType';
import { categoryLabelYupSchema } from './CategoryLabel';
import { commentaryYupSchema } from './Commentary';
import { deliveryFormatYupSchema } from './DeliveryFormat';
import { deliveryMethodYupSchema } from './DeliveryMethod';
import { fAQYupSchema } from './FAQ';
import { featureYupSchema } from './Feature';
import { locationYupSchema } from './Location';
import { mediaYupSchema } from './Media';
import { optionYupSchema } from './Option';
import { pricingPerYupSchema } from './PricingPer';
import { redemptionMethodYupSchema } from './RedemptionMethod';

export const productYupSchema = object().shape({
  id: string().required(),
  internalName: string().required(),
  reference: string().nullable().required(),
  locale: string().required(),
  timeZone: string().notRequired(),
  allowFreesale: bool().required(),
  instantConfirmation: bool().required(),
  instantDelivery: bool().required(),
  availabilityRequired: bool().required(),
  availabilityType: availabilityTypeYupSchema.required(),
  deliveryFormats: array().of(deliveryFormatYupSchema).required(),
  deliveryMethods: array().of(deliveryMethodYupSchema).required(),
  redemptionMethod: redemptionMethodYupSchema.required(),
  options: array().of(optionYupSchema).required(),
  defaultCurrency: string().notRequired(),
  availableCurrencies: array().of(string()).notRequired(),
  pricingPer: pricingPerYupSchema.notRequired(),
  title: string().notRequired(),
  shortDescription: string().nullable().notRequired(),
  description: string().nullable().notRequired(),
  features: array().of(featureYupSchema).notRequired(),
  faqs: array().of(fAQYupSchema).notRequired(),
  media: array().of(mediaYupSchema).notRequired(),
  locations: array().of(locationYupSchema).notRequired(),
  categoryLabels: array().of(categoryLabelYupSchema).notRequired(),
  durationMinutesFrom: number().notRequired(),
  durationMinutesTo: number().nullable().notRequired(),
  commentary: array().of(commentaryYupSchema).notRequired(),
}) as SchemaOf<Product>;
