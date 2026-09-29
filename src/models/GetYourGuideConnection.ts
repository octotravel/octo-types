/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connection } from './Connection';
export type GetYourGuideConnection = Connection & {
	/**
	 * The GetYourGuide Connect ID.
	 */
	gygConnectId: string;
	/**
	 * Email address used to log into GetYourGuide.
	 */
	gygLoginEmail: string;
	/**
	 * Password used to log into GetYourGuide.
	 */
	gygLoginPassword: string;
	/**
	 * Secret used to generate OTP codes for login.
	 */
	gygLoginOTPSecret?: string;
	/**
	 * Optional supplier ID from GetYourGuide.
	 */
	gygSupplierId?: string;
	/**
	 * Optional supplier name from GetYourGuide.
	 */
	gygSupplierName?: string;
	/**
	 * Indicates whether the connection is activated.
	 */
	gygActivated: boolean;
};
