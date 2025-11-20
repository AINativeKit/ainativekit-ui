import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
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

  /**
   * Main carousel API for synchronization
   */
  mainApi?: EmblaCarouselType | null;
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
  mainApi,
}) => {
  // Set up embla carousel for thumbnails with vertical, drag-free scrolling and wheel support
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: 'y',
      dragFree: true,
      containScroll: 'keepSnaps',
    },
    [WheelGesturesPlugin()]
  );

  // Handle thumbnail click - notify parent and scroll main carousel
  const onThumbClick = React.useCallback(
    (index: number) => {
      // Always notify parent of selection
      onSelect?.(index);
      // Scroll main carousel if API is available
      if (mainApi) {
        mainApi.scrollTo(index);
      }
    },
    [mainApi, onSelect]
  );

  // Sync thumbnail carousel selection when main carousel changes
  React.useEffect(() => {
    if (!emblaApi || !mainApi) return;

    const onMainSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      emblaApi.scrollTo(selected);
    };

    // Initial scroll to selected
    emblaApi.scrollTo(selectedIndex);

    // Listen to main carousel changes
    mainApi.on('select', onMainSelect);
    return () => {
      mainApi.off('select', onMainSelect);
    };
  }, [emblaApi, mainApi, selectedIndex]);

  return (
    <div
      className={cn(styles.filmStrip, className)}
      role="navigation"
      aria-label="Photo thumbnails"
    >
      <div className={styles.thumbnailViewport} ref={emblaRef}>
        <div className={styles.thumbnailCenterWrapper}>
          <div className={styles.thumbnailContainer}>
            {photos.map((photo, index) => {
            const isSelected = index === selectedIndex;
            return (
              <div key={photo.id} className={styles.thumbnailSlide}>
                <button
                  type="button"
                  onClick={() => onThumbClick(index)}
                  className={cn(styles.thumbnail, isSelected && styles.thumbnailSelected)}
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
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

FilmStrip.displayName = 'FilmStrip';
