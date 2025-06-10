import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from '../models/Product';
export class ProductsService {
  /**
   * Get Products
   * Fetch the list of products.
   * @returns Product The request has succeeded.
   * @throws ApiError
   */
  public static productsGetProducts(): CancelablePromise<Array<Product>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/products/',
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
  /**
   * Get Product
   * Fetch the product for the given id.
   * @param id The product id
   * @returns Product The request has succeeded.
   * @throws ApiError
   */
  public static productsGetProduct(id: string): CancelablePromise<Product> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/products/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `The server could not understand the request due to invalid syntax.`,
      },
    });
  }
}
