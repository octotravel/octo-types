/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Checkout } from './Checkout';
import type { Connection } from './Connection';
import type { Operator } from './Operator';
import type { Partner } from './Partner';
import type { Reseller } from './Reseller';
import type { Supplier } from './Supplier';
import type { Terminal } from './Terminal';
export type WhoAmI = {
	supplier: Supplier;
	connection: Connection;
	partner: Partner | null;
	reseller: Reseller | null;
	checkout: Checkout | null;
	operator: Operator | null;
	terminal: Terminal | null;
};
