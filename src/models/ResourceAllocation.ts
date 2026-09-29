/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Resource } from './Resource';
import type { ResourceGroup } from './ResourceGroup';
import type { Seat } from './Seat';
import type { Seller } from './Seller';
export type ResourceAllocation = {
	/**
	 * Unique identifier for the resource allocation.
	 */
	id: string;
	/**
	 * ID of the associated resource group.
	 */
	resourceGroupId: string;
	/**
	 * Full resource group object.
	 */
	resourceGroup: ResourceGroup;
	/**
	 * ID of the assigned resource.
	 */
	resourceId: string;
	/**
	 * Full resource object.
	 */
	resource: Resource;
	/**
	 * Number of passengers allocated to the resource.
	 */
	paxCount: number;
	/**
	 * IDs of the allocated seats.
	 */
	seatIds: Array<string>;
	/**
	 * Full seat objects allocated to the resource.
	 */
	seats: Array<Seat>;
	guide: Seller | null;
	driver: Seller | null;
};
