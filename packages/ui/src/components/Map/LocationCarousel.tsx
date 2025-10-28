import React, { useRef, useEffect, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import { Carousel } from '../Carousel';
import { LocationCard } from './LocationCard';
import { cn } from '../../utils/cn';
import type { LocationData } from './types';
import styles from './LocationCarousel.module.css';

export interface LocationCarouselProps {
  /**
   * Array of location data to display in the carousel.
   */
  locations: LocationData[];

  /**
   * ID of the currently selected location.
   */
  selectedId?: string;

  /**
   * Callback when a location card is clicked.
   */
  onLocationSelect?: (id: string | undefined) => void;

  /**
   * Additional class name for the container.
   */
  className?: string;

  /**
   * Loading state - renders skeleton location cards
   * @default false
   */
  loading?: boolean;

  /**
   * Number of skeleton cards to show when loading
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
   * @default 'Failed to load locations'
   */
  errorTitle?: string;

  /**
   * Custom error message
   */
  errorMessage?: string;

  /**
   * Error retry handler - shows retry button when provided
   */
  onErrorRetry?: () => void;

  /**
   * Empty state title when no locations provided
   * @default 'No locations'
   */
  emptyTitle?: string;

  /**
   * Empty state message
   * @default 'No locations to display'
   */
  emptyMessage?: string;
}

export const LocationCarousel: React.FC<LocationCarouselProps> = ({
  locations,
  selectedId,
  onLocationSelect,
  className,
  loading = false,
  loadingCardCount = 4,
  error = false,
  errorTitle = 'Failed to load locations',
  errorMessage,
  onErrorRetry,
  emptyTitle = 'No locations',
  emptyMessage = 'No locations to display',
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  // Scroll to selected card when selectedId changes
  useEffect(() => {
    if (!selectedId) return;

    if (emblaApi) {
      const index = locations.findIndex((location) => location.id === selectedId);
      if (index >= 0) {
        emblaApi.scrollTo(index);
        return;
      }
    }

    // Fallback to native scrolling if Embla is not ready
    if (carouselRef.current) {
      const selectedCard = carouselRef.current.querySelector(
        `[data-location-id="${selectedId}"]`
      );
      if (selectedCard instanceof HTMLElement) {
        selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  }, [selectedId, emblaApi, locations]);

  // State Priority: Loading > Error > Empty > Content
  
  // Loading State
  if (loading) {
    return (
      <div className={cn(styles.locationCarousel, className)} ref={carouselRef}>
        <Carousel
          className={styles.carousel}
          align="start"
          loop={false}
          showNavigation={true}
          showEdgeGradients={true}
          gap="var(--ai-spacing-8)"
          flushStart={true}
          startInset="var(--ai-spacing-6)"
          viewportPadding="0"
        >
          {Array.from({ length: loadingCardCount }).map((_, i) => (
            <div key={i} className={styles.cardWrapper}>
              <LocationCard loading />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className={cn(styles.locationCarousel, className)} ref={carouselRef}>
        <Carousel
          className={styles.carousel}
          align="start"
          loop={false}
          showNavigation={false}
          gap="var(--ai-spacing-8)"
          flushStart={true}
          startInset="var(--ai-spacing-6)"
          error={true}
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          onErrorRetry={onErrorRetry}
        />
      </div>
    );
  }

  // Empty State
  if (locations.length === 0) {
    return (
      <div className={cn(styles.locationCarousel, className)} ref={carouselRef}>
        <Carousel
          className={styles.carousel}
          align="start"
          loop={false}
          showNavigation={false}
          gap="var(--ai-spacing-8)"
          flushStart={true}
          startInset="var(--ai-spacing-6)"
          emptyTitle={emptyTitle}
          emptyMessage={emptyMessage}
        />
      </div>
    );
  }

  // Normal Content
  return (
    <div className={cn(styles.locationCarousel, className)} ref={carouselRef}>
      <Carousel
        className={styles.carousel}
        align="start"
        loop={false}
        showNavigation={true}
        showEdgeGradients={true}
        gap="var(--ai-spacing-8)"
        flushStart={true}
        startInset="var(--ai-spacing-6)"
        viewportPadding="0"
        onApi={setEmblaApi}
      >
        {locations.map((location) => (
          <div
            key={location.id}
            className={styles.cardWrapper}
            data-location-id={location.id}
          >
            <LocationCard
              image={location.thumbnail}
              title={location.name}
              subtitle={location.description}
              features={location.features}
              selected={location.id === selectedId}
              onClick={() => onLocationSelect?.(location.id)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

LocationCarousel.displayName = 'LocationCarousel';
