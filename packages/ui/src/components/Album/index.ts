/**
 * Album Components
 *
 * A collection of components for displaying albums and photos in a carousel
 * with fullscreen viewer capabilities.
 */

export { Album } from './Album';
export type { AlbumProps } from './Album';

export { AlbumCard } from './AlbumCard';
export type { AlbumCardProps } from './AlbumCard';

export { AlbumCarousel } from './AlbumCarousel';
export type { AlbumCarouselProps } from './AlbumCarousel';

export { AlbumViewer } from './AlbumViewer';
export type { AlbumViewerProps } from './AlbumViewer';

export { FilmStrip } from './FilmStrip';
export type { FilmStripProps } from './FilmStrip';

// Note: The Album data type is exported as 'AlbumType' to avoid naming collision
// with the Album React component (line 8). Import the data type as:
// import type { AlbumType, Photo } from '@ainativekit/ui';
export type { Album as AlbumType, Photo } from './types';
