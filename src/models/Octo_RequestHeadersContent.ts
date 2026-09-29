/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This optional request header allows to specify preferred languages for content in the response. A language code that specifies the language of the product content. This code must conform to the BCP 47 standard, following RFC 5646 and RFC 4647 specifications for language tags. Examples include en-US for American English, fr-FR for French (France), and es-ES for Spanish (Spain). This header supports a comma-separated list of language tags with optional quality values (q) to indicate priority, such as en-US, fr-CA;q=0.8, fr;q=0.7, which prioritizes U.S. English, followed by Canadian French, and general French. This header is defined in the HTTP/1.1 specification (RFC 7231) and is commonly used for internationalized websites and services to enhance user experience. For more details, visit MDN Web Docs: Accept-Language - HTTP | MDN. Note this only determines preference and does not guarantee location has content available in the desired language.
 */
export type Octo_RequestHeadersContent = string;
