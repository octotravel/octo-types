/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentaryFormat } from './CommentaryFormat';
export type Commentary = {
  /**
   * Specifies the format in which commentary is provided. Possible values are:
   * IN_PERSON: Live commentary delivered by a guide or host during the activity. Examples include a tour guide providing real-time explanations about historical landmarks or itinerary highlights.
   * RECORDED_AUDIO: Pre-recorded audio commentary accessible during the activity. Delivered via headphones, mobile apps, or speaker systems, covering key details in multiple languages.
   * WRITTEN: Commentary provided as written material, such as printed brochures, guidebooks, or on-site informational displays at points of interest.
   * OTHER: Commentary formats not explicitly listed, such as augmented reality experiences or interactive digital guides.
   */
  format: CommentaryFormat;
  /**
   * Specifies the language in which the commentary is offered, adhering to IETF BCP 47 language tags for compatibility.
   */
  language: string;
};
