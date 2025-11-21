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

// Constants for layout calculations
const THUMBNAIL_GAP = 12; // var(--ai-spacing-6) in pixels
const SCROLL_LIMITER_BOTTOM_OFFSET = 80; // Minimum distance from bottom for last thumbnail
const SPACER_HEIGHT = 100; // Height of scroll spacer in unfit mode
const FIT_DETECTION_MARGIN = -20; // Negative margin ensures only truly fitting content is centered

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
  // Track whether all thumbnails fit in viewport (for potential centering)
  const [shouldCenter, setShouldCenter] = React.useState(false);

  // Set up embla carousel for thumbnails with vertical snap-based scrolling
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: 'y',
      align: 'start',           // Align thumbnails to top
      dragFree: false,          // Use snap points
      containScroll: false,     // Allow full scrolling to all items
      slidesToScroll: 1,        // Scroll one thumbnail at a time
      skipSnaps: false,         // Don't skip snap points
    },
    [WheelGesturesPlugin()]
  );

  // Handle thumbnail click - notify parent and scroll main carousel
  const onThumbClick = React.useCallback(
    (index: number) => {
      // Always notify parent of selection
      onSelect?.(index);

      // Scroll to clicked thumbnail (only in unfit mode - fit mode shows all items)
      if (emblaApi && !shouldCenter) {
        emblaApi.scrollTo(index);
      }

      // Scroll main carousel if API is available
      if (mainApi) {
        mainApi.scrollTo(index);
      }
    },
    [emblaApi, mainApi, onSelect, shouldCenter]
  );

  // Check if all thumbnails fit in viewport for centering
  React.useEffect(() => {
    if (!emblaApi) return;

    const checkFit = () => {
      const viewport = emblaApi.rootNode();
      const slides = emblaApi.slideNodes();

      if (!viewport || !slides.length) return;

      const viewportHeight = viewport.offsetHeight;

      // Calculate total height of all thumbnails + gaps
      // Only count actual photo slides, not the spacer
      const numPhotos = photos.length;
      let totalHeight = 0;
      for (let i = 0; i < numPhotos && i < slides.length; i++) {
        totalHeight += slides[i].offsetHeight;
        if (i < numPhotos - 1) {
          totalHeight += THUMBNAIL_GAP;
        }
      }

      // Check if content fits - use negative margin to ensure we only center when there's extra space
      // This prevents edge cases where content barely fits but gets cut off
      const shouldFit = totalHeight <= viewportHeight + FIT_DETECTION_MARGIN;

      if (shouldFit !== shouldCenter) {
        setShouldCenter(shouldFit);
      }
    };

    // Check on mount and when slides change
    setTimeout(checkFit, 100);
    checkFit();
    emblaApi.on('reInit', checkFit);

    const handleResize = () => setTimeout(checkFit, 50);
    window.addEventListener('resize', handleResize);

    return () => {
      emblaApi.off('reInit', checkFit);
      window.removeEventListener('resize', handleResize);
    };
  }, [emblaApi, photos.length, shouldCenter]);

  // Reset Embla's transform when centering to allow CSS centering to work
  React.useEffect(() => {
    if (!emblaApi || !shouldCenter) return;

    const resetTransform = () => {
      const container = emblaApi.containerNode();
      if (container) {
        // Override Embla's transform to allow CSS centering
        container.style.transform = 'translateX(0px) translateY(0px)';
      }
    };

    // Reset immediately and after any scroll/settle events
    resetTransform();
    emblaApi.on('scroll', resetTransform);
    emblaApi.on('settle', resetTransform);
    emblaApi.on('reInit', resetTransform);

    return () => {
      emblaApi.off('scroll', resetTransform);
      emblaApi.off('settle', resetTransform);
      emblaApi.off('reInit', resetTransform);
    };
  }, [emblaApi, shouldCenter]);

  // Render thumbnail buttons (shared between fit and unfit modes)
  const renderThumbnails = () => {
    return photos.map((photo, index) => {
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
    });
  };

  // Sync thumbnail carousel selection when main carousel changes
  React.useEffect(() => {
    if (!emblaApi || !mainApi) return;

    const onMainSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      // Only scroll in unfit mode - fit mode shows all items
      if (!shouldCenter) {
        emblaApi.scrollTo(selected);
      }
    };

    // Initial scroll to selected index (only in unfit mode)
    if (!shouldCenter) {
      emblaApi.scrollTo(selectedIndex);
    }

    // Listen to main carousel changes
    mainApi.on('select', onMainSelect);
    return () => {
      mainApi.off('select', onMainSelect);
    };
  }, [emblaApi, mainApi, selectedIndex, shouldCenter]);

  // Prevent last thumbnail from scrolling too far up
  React.useEffect(() => {
    if (!emblaApi) return;

    const limitScroll = () => {
      const slides = emblaApi.slideNodes();
      const container = emblaApi.containerNode();
      const viewport = emblaApi.rootNode();

      if (!slides.length || !container || !viewport) return;

      const lastSlide = slides[slides.length - 1];
      const viewportRect = viewport.getBoundingClientRect();
      const lastSlideRect = lastSlide.getBoundingClientRect();

      // Prevent last thumbnail from going too far up
      const minBottomPosition = viewportRect.bottom - SCROLL_LIMITER_BOTTOM_OFFSET;

      if (lastSlideRect.bottom < minBottomPosition) {
        const currentTransform = window.getComputedStyle(container).transform;
        const matrix = new DOMMatrix(currentTransform);
        const currentY = matrix.m42;
        const adjustment = minBottomPosition - lastSlideRect.bottom;
        const newY = currentY + adjustment;

        // Smooth correction only after settling
        container.style.transition = 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        container.style.transform = `translateX(0px) translateY(${newY}px)`;

        setTimeout(() => {
          container.style.transition = '';
        }, 300);
      }
    };

    // Only apply limit when scroll settles, not during active scrolling
    emblaApi.on('settle', limitScroll);

    return () => {
      emblaApi.off('settle', limitScroll);
    };
  }, [emblaApi]);

  return (
    <div
      className={cn(styles.filmStrip, className)}
      role="navigation"
      aria-label="Photo thumbnails"
    >
      <div className={styles.thumbnailViewport} ref={emblaRef}>
        {shouldCenter ? (
          // Fit mode: wrap with centering div
          <div
            style={{
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className={styles.thumbnailContainer}>{renderThumbnails()}</div>
          </div>
        ) : (
          // Unfit mode: render container directly without wrapper
          <div className={styles.thumbnailContainer}>
            {renderThumbnails()}
            {/* Small spacer to ensure smooth scrolling */}
            <div style={{ height: `${SPACER_HEIGHT}px`, flexShrink: 0 }} aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
};

FilmStrip.displayName = 'FilmStrip';
