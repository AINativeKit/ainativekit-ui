import React from 'react';
import { Carousel, type CarouselProps } from '../Carousel';
import { AlbumCard } from './AlbumCard';
import type { Album } from './types';

export interface AlbumCarouselProps extends Omit<CarouselProps, 'children'> {
  /**
   * Array of albums to display
   */
  albums: Album[];

  /**
   * Callback when an album is selected
   */
  onAlbumSelect?: (album: Album) => void;

  /**
   * Width for each album card
   * @default '272px'
   */
  cardWidth?: string;

  // State Management
  /**
   * Loading state - shows skeleton cards
   * @default false
   */
  loading?: boolean;

  /**
   * Number of skeleton cards to show while loading
   * @default 4
   */
  loadingCardCount?: number;

  /**
   * Error state - shows error message
   * @default false
   */
  error?: boolean;

  /**
   * Custom error title
   * @default 'Failed to load albums'
   */
  errorTitle?: string;

  /**
   * Custom error message
   */
  errorMessage?: string;

  /**
   * Retry callback for error state
   */
  onErrorRetry?: () => void;

  /**
   * Empty state title
   * @default 'No albums yet'
   */
  emptyTitle?: string;

  /**
   * Empty state message
   */
  emptyMessage?: string;
}

/**
 * AlbumCarousel component - Horizontal carousel of album cards.
 *
 * Features:
 * - Uses the existing Carousel component
 * - Renders AlbumCard children
 * - Handles album selection
 * - Customizable card width
 * - Loading, error, and empty states
 * - Consistent state management pattern
 *
 * @example
 * ```tsx
 * <AlbumCarousel
 *   albums={albumsData}
 *   onAlbumSelect={(album) => openViewer(album)}
 *   align="center"
 *   showNavigation
 *   loading={isLoading}
 * />
 * ```
 */
export const AlbumCarousel: React.FC<AlbumCarouselProps> = ({
  albums,
  onAlbumSelect,
  cardWidth = '272px',
  loading = false,
  loadingCardCount = 4,
  error = false,
  errorTitle = 'Failed to load albums',
  errorMessage,
  onErrorRetry,
  emptyTitle = 'No albums yet',
  emptyMessage,
  ...carouselProps
}) => {
  // State Priority: Loading > Error > Empty > Content

  // 1. Loading State
  if (loading) {
    return (
      <Carousel {...carouselProps}>
        {Array.from({ length: loadingCardCount }).map((_, i) => (
          <div key={`skeleton-${i}`} style={{ width: cardWidth, flexShrink: 0 }}>
            <AlbumCard
              album={{ id: `loading-${i}`, title: '', cover: '', photos: [] }}
              loading={true}
              width={cardWidth}
            />
          </div>
        ))}
      </Carousel>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <Carousel
        {...carouselProps}
        error={true}
        errorTitle={errorTitle}
        errorMessage={errorMessage}
        onErrorRetry={onErrorRetry}
      />
    );
  }

  // 3. Empty State
  if (albums.length === 0) {
    return (
      <Carousel
        {...carouselProps}
        emptyTitle={emptyTitle}
        emptyMessage={emptyMessage}
      />
    );
  }

  // 4. Normal Content
  return (
    <Carousel {...carouselProps}>
      {albums.map((album) => (
        <div key={album.id} style={{ width: cardWidth, flexShrink: 0 }}>
          <AlbumCard album={album} onSelect={onAlbumSelect} width={cardWidth} />
        </div>
      ))}
    </Carousel>
  );
};

AlbumCarousel.displayName = 'AlbumCarousel';
