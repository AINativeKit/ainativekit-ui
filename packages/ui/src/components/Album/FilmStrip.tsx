import React from 'react';
import { cn } from '../../utils/cn';
import type { Photo } from './types';
import styles from './FilmStrip.module.css';

export interface FilmStripProps {
  /**
   * Array of photos to display as thumbnails
   */
  photos: Photo[];

  /**
   * Currently selected photo index
   */
  selectedIndex: number;

  /**
   * Callback when a thumbnail is clicked
   */
  onSelect?: (index: number) => void;

  /**
   * Album title for accessibility
   */
  albumTitle?: string;

  /**
   * Additional class name
   */
  className?: string;
}

/**
 * FilmStrip component - Vertical thumbnail navigation for photos.
 *
 * Features:
 * - Vertical scrollable thumbnail list
 * - Highlights selected photo
 * - Click to navigate between photos
 * - Keyboard accessible
 *
 * @example
 * ```tsx
 * <FilmStrip
 *   photos={album.photos}
 *   selectedIndex={currentIndex}
 *   onSelect={(index) => setCurrentIndex(index)}
 *   albumTitle="Summer Vacation"
 * />
 * ```
 */
export const FilmStrip: React.FC<FilmStripProps> = ({
  photos,
  selectedIndex,
  onSelect,
  albumTitle,
  className,
}) => {
  return (
    <div className={cn(styles.filmStrip, className)} role="navigation" aria-label="Photo thumbnails">
      <div className={styles.thumbnailList}>
        {photos.map((photo, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => onSelect?.(index)}
              className={cn(
                styles.thumbnail,
                isSelected && styles.thumbnailSelected
              )}
              aria-label={photo.title || `Photo ${index + 1} of ${photos.length}`}
              aria-current={isSelected ? 'true' : undefined}
            >
              <div className={styles.thumbnailImageWrapper}>
                <img
                  src={photo.url}
                  alt={photo.alt || photo.title || `${albumTitle} - Photo ${index + 1}`}
                  className={styles.thumbnailImage}
                  loading="lazy"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

FilmStrip.displayName = 'FilmStrip';
