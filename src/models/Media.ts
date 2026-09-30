/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaRel } from './MediaRel';
import type { MediaType } from './MediaType';
export type Media = {
  /**
   * The URL of the media file. The URL must be stable and publicly accessible.
   */
  src: string;
  /**
   * Specifies the type of the media file, which indicates its format and intended usage. Recommended types include: image/jpeg: High-quality compressed images, ideal for general use. Suggested dimensions: 1920x1080 or higher.
   * image/png: Images with transparency or higher visual fidelity, recommended for logos. Suggested dimensions: At least 1000x1000 pixels.
   * video/mp4: Universal video format for high-quality playback. Suggested resolution: 1080p or higher.
   * video/avi: A less common video format; MP4 is generally preferred for compatibility.
   * external/youtube: URL links to YouTube videos for dynamic content. Use a shareable URL format.
   * external/vimeo: URL links to Vimeo-hosted videos for high-quality or private video content.
   */
  type: MediaType;
  /**
   * Defines the relationship of the media file to the supplier's content. Common values include: LOGO: For branding assets like supplier logos.
   * COVER: For primary visual elements representing the supplier.
   * GALLERY: For additional images or videos.
   */
  rel: MediaRel;
  /**
   * The title or name of the media, providing a brief description or identifier for the media file. This helps in organizing and identifying media files (e.g., "Main Attraction Image," "Promotional Video"). This field can be null if no title is provided.
   */
  title: string | null;
  /**
   * A caption providing additional context or information about what is depicted in the media. Captions should be customer-facing and provide insights such as "Overview of the city skyline at sunset" or "Guests enjoying the guided tour." This field can be null if no caption is provided.
   */
  caption: string | null;
  /**
   * Information about the copyright status or usage restrictions of the media. This may include details about ownership, licensing terms, or attribution requirements (e.g., "© 2024 Example Corp, All Rights Reserved"). If null, it is assumed there are no copyright restrictions or attribution requirements.
   */
  copyright: string | null;
};
