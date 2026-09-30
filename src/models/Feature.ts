/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureType } from './FeatureType';
export type Feature = {
  /**
   * A brief summary of a specific feature, providing quick and precise information about an aspect of the product.
   */
  shortDescription: string | null;
  /**
   * Specifies the category of the feature to ensure clear and organized communication. Each category serves a distinct purpose:
   *
   * INCLUSION: Details what is included in the product offering (e.g., "Hotel pickup included," "Lunch provided," "All equipment supplied"), emphasizing the product's completeness and value.
   * EXCLUSION: Lists what is not included (e.g., "Gratuities not included," "Admission tickets not provided"), managing customer expectations and reducing ambiguity.
   * HIGHLIGHT: Emphasizes the product's key selling points or unique aspects (e.g., "Skip-the-line access to the Eiffel Tower," "Expert-guided tour"), captivating potential customers by showcasing standout qualities.
   * PREBOOKING_INFORMATION: Contains essential details customers need to know before booking (e.g., "Not suitable for children under 3 years," "Wear sturdy footwear").
   * PREARRIVAL_INFORMATION: Offers details to prepare customers for their experience before arrival (e.g., "Arrive 15 minutes early," "Bring a printed ticket").
   * REDEMPTION_INSTRUCTION: Provides clear instructions on how to redeem the product or service (e.g., "Show your booking confirmation at the ticket counter," "Scan your QR code upon entry").
   * ACCESSIBILITY_INFORMATION: Highlights accessibility-related details (e.g., "Wheelchair accessible," "No elevators available").
   * ADDITIONAL_INFORMATION: Supplies supplementary details that add context or clarity (e.g., "Pets allowed with prior notice," "Multilingual guides available").
   * BOOKING_TERM: Describes terms related to the booking process (e.g., "Reservations must be made at least 48 hours in advance," "No changes allowed after booking").
   * CANCELLATION_TERM: Explains the terms and conditions for cancellations (e.g., "Free cancellation up to 24 hours before the start time," "Non-refundable").
   * This structured classification enhances the product's appeal, ensures transparency, and facilitates informed decision-making for resellers and customers.
   */
  type: FeatureType;
};
