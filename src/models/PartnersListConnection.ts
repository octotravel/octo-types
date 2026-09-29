/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetYourGuideConnection } from './GetYourGuideConnection';
import type { PartnersConnection } from './PartnersConnection';
import type { Supplier } from './Supplier';
export type PartnersListConnection = {
	/**
	 * The supplier information associated with the connection.
	 */
	supplier: Supplier;
	/**
	 * The connection details, which could be a generic partner connection or a GetYourGuide connection.
	 */
	connection: PartnersConnection | GetYourGuideConnection;
	/**
	 * The API key used to authenticate this partner connection.
	 */
	apiKey: string;
};
