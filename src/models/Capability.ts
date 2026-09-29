/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CapabilityId } from './CapabilityId';
export type Capability = {
  /**
   * Unique identifier of the capability.
   */
  id: CapabilityId;
  /**
   * Revision number for the capability.
   */
  revision: number;
  /**
   * Whether this capability is required.
   */
  required: boolean;
  /**
   * List of dependent capability IDs.
   */
  dependencies: Array<CapabilityId>;
  /**
   * Optional documentation or description for this capability.
   */
  docs: string | null;
};
