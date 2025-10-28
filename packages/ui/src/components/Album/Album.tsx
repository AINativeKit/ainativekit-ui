import React from 'react';
import { AlbumCarousel, type AlbumCarouselProps } from './AlbumCarousel';
import { AlbumViewer } from './AlbumViewer';
import type { Album as AlbumType } from './types';

export interface AlbumProps extends Omit<AlbumCarouselProps, 'onAlbumSelect'> {
  /**
   * Array of albums to display
   */
  albums: AlbumType[];

  /**
   * Callback when an album is selected (optional - external state control)
   */
  onAlbumSelect?: (album: AlbumType | null) => void;

  /**
   * Controlled selected album (optional - for external state control)
   */
  selectedAlbum?: AlbumType | null;

  /**
   * Initial photo index when opening viewer
   * @default 0
   */
  initialPhotoIndex?: number;
}

/**
 * Album component - Main orchestrator for album carousel and viewer.
 *
 * Features:
 * - Displays carousel of albums
 * - Opens fullscreen viewer on album selection
 * - Manages viewer state (can be controlled or uncontrolled)
 * - Smooth transitions between views
 *
 * @example
 * ```tsx
 * // Uncontrolled (manages its own state)
 * <Album albums={albumsData} />
 *
 * // Controlled (external state)
 * <Album
 *   albums={albumsData}
 *   selectedAlbum={currentAlbum}
 *   onAlbumSelect={setCurrentAlbum}
 * />
 * ```
 */
export const Album: React.FC<AlbumProps> = ({
  albums,
  onAlbumSelect,
  selectedAlbum: controlledSelectedAlbum,
  initialPhotoIndex = 0,
  ...carouselProps
}) => {
  const [internalSelectedAlbum, setInternalSelectedAlbum] = React.useState<AlbumType | null>(null);

  // Use controlled state if provided, otherwise use internal state
  const isControlled = controlledSelectedAlbum !== undefined;
  const selectedAlbum = isControlled ? controlledSelectedAlbum : internalSelectedAlbum;

  const handleAlbumSelect = (album: AlbumType) => {
    if (!isControlled) {
      setInternalSelectedAlbum(album);
    }
    onAlbumSelect?.(album);
  };

  const handleViewerClose = () => {
    if (!isControlled) {
      setInternalSelectedAlbum(null);
    }
    onAlbumSelect?.(null);
  };

  const isViewerOpen = selectedAlbum !== null;

  return (
    <>
      {/* Album Carousel */}
      {!isViewerOpen && (
        <AlbumCarousel
          albums={albums}
          onAlbumSelect={handleAlbumSelect}
          {...carouselProps}
        />
      )}

      {/* Album Viewer */}
      {isViewerOpen && selectedAlbum && (
        <AlbumViewer
          album={selectedAlbum}
          initialPhotoIndex={initialPhotoIndex}
          onClose={handleViewerClose}
        />
      )}
    </>
  );
};

Album.displayName = 'Album';
