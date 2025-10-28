/**
 * Album component type definitions
 */

/**
 * Represents a single photo within an album
 */
export interface Photo {
  /**
   * Unique identifier for the photo
   */
  id: string;

  /**
   * URL of the photo image
   */
  url: string;

  /**
   * Optional title/caption for the photo
   */
  title?: string;

  /**
   * Alt text for accessibility
   */
  alt?: string;
}

/**
 * Represents an album containing multiple photos
 */
export interface Album {
  /**
   * Unique identifier for the album
   */
  id: string;

  /**
   * Album title
   */
  title: string;

  /**
   * URL of the album cover image
   */
  cover: string;

  /**
   * Array of photos in the album
   */
  photos: Photo[];
}
