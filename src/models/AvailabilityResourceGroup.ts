/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityResource } from './AvailabilityResource';
import type { ResourceGroup } from './ResourceGroup';
export type AvailabilityResourceGroup = {
	/**
	 * Unique identifier for the resource group.
	 */
	resourceGroupId: string;
	resourceGroup: ResourceGroup;
	resources: Array<AvailabilityResource>;
};
