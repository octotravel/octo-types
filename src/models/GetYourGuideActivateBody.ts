/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetYourGuideActivateBody = {
	/**
	 * Secret used to generate OTP codes for GetYourGuide login.
	 */
	gygLoginOTPSecret: string;
	/**
	 * Supplier ID provided by GetYourGuide.
	 */
	gygSupplierId: string;
	/**
	 * Supplier name provided by GetYourGuide.
	 */
	gygSupplierName: string;
};
