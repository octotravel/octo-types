/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Membership } from './Membership';
import type { MembershipBenefit } from './MembershipBenefit';
export type BookingMemberships = {
	membershipBenefit?: MembershipBenefit | null;
	membership?: Membership | null;
	isMembership?: boolean;
	appendMembershipValidity?: boolean;
	membershipAutoRenew?: boolean;
};
