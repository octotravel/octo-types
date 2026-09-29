/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceAllocationRequest } from './ResourceAllocationRequest';
export type BookingResourcesBody = {
	/**
	 * Requested resource allocations (manual resource selection). Only honored when octo/resources is requested.
	 */
	resourceAllocations?: Array<ResourceAllocationRequest>;
};
