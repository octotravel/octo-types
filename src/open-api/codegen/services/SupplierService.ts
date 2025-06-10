import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Supplier } from '../models/Supplier';
export class SupplierService {
  /**
   * Get Supplier
   * Returns the supplier and associated contact details.
   * @returns Supplier The request has succeeded.
   * @throws ApiError
   */
  public static suppliersGet(): CancelablePromise<Supplier> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/supplier/',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
}
