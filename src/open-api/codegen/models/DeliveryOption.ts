/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryFormat } from './DeliveryFormat';
export type DeliveryOption = {
  /**
   * The format for the delivery option possible values are:
   * `QRCODE` You should generate the QR Code yourself on a ticket.
   * `PDF_URL` Where you use the generated tickets as a PDF.
   */
  deliveryFormat: DeliveryFormat;
  /**
   * The format for the delivery option possible values are:
   * `QRCODE` You should generate the QR Code yourself on a ticket.
   * `PDF_URL` Where you use the generated tickets as a PDF.
   *
   */
  deliveryValue: string;
};
