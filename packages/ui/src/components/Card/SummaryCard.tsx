import React from 'react';
import { cn } from '../../utils/cn';
import { Card, type CardProps } from './Card';
import { Badge, type BadgeVariant } from '../Badge/Badge';
import { Chip, type ChipVariant } from '../Chip/Chip';
import { Button } from '../Button/Button';
import { Skeleton } from '../Skeleton';
import { Alert } from '../Alert';
import styles from './SummaryCard.module.css';

export interface SummaryCardImage {
  src: string;
  alt: string;
  /**
   * Enable lazy loading for this specific image
   * @default true
   */
  lazy?: boolean;
}

export interface SummaryCardProps extends Omit<CardProps, 'children'> {
  /**
   * Single image or array of 1-3 images.
   * Single image will be displayed large, 3 images in a grid.
   */
  images?: string | SummaryCardImage | Array<string | SummaryCardImage>;

  /**
   * Main title using heading3 typography.
   */
  title?: string;

  /**
   * Subtitle using bodySmall typography.
   */
  subtitle?: string;

  /**
   * Badge content (e.g., rating like "9.2").
   */
  badge?: string | number;

  /**
   * Badge variant.
   * @default 'default'
   */
  badgeVariant?: BadgeVariant;

  /**
   * Description text using bodySmall with secondary color.
   */
  description?: string;

  /**
   * Button text. If provided, button will be displayed.
   */
  buttonText?: string;

  /**
   * Button click handler.
   */
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Button disabled state.
   */
  buttonDisabled?: boolean;

  // Phase 1: Critical Improvements (P0)
  /**
   * Loading state - shows skeleton UI
   * @default false
   */
  loading?: boolean;

  /**
   * Number of skeleton images to show during loading
   * @default 1 for single, 3 for grid
   */
  loadingImageCount?: number;

  /**
   * Error state - shows error message
   * @default false
   */
  error?: boolean;

  /**
   * Custom error title
   * @default 'Failed to load'
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
   * Empty state title
   * @default 'No content'
   */
  emptyTitle?: string;

  /**
   * Empty state message
   */
  emptyMessage?: string;

  // Phase 2: Performance & Accessibility (P1)
  /**
   * Enable lazy loading for all images
   * @default true
   */
  imageLazy?: boolean;

  /**
   * Callback when a single image loads successfully
   */
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Callback when a single image fails to load
   */
  onImageError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Callback when a grid image loads successfully (includes index)
   */
  onImagesLoad?: (index: number, event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Callback when a grid image fails to load (includes index)
   */
  onImagesError?: (index: number, event: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Normalize image input to SummaryCardImage format
 */
const normalizeImage = (image: string | SummaryCardImage): SummaryCardImage => {
  if (typeof image === 'string') {
    return { src: image, alt: '' };
  }
  return image;
};

/**
 * SummaryCard component for displaying entity information with images.
 *
 * Features:
 * - Flexible image layout (single large or 3-image grid)
 * - Optional header with title, subtitle, and badge
 * - Optional description text
 * - Optional action button
 * - All sections conditionally rendered
 * - Composition pattern wrapping Card component
 *
 * @example
 * ```tsx
 * // Restaurant card with single image
 * <SummaryCard
 *   images="restaurant.jpg"
 *   title="Little Nona's"
 *   subtitle="1427 Via Campania"
 *   badge="9.2"
 *   description="A tiny, brick-walled trattoria tucked down a side street..."
 *   buttonText="Add to order"
 *   onButtonClick={() => console.log('clicked')}
 * />
 *
 * // Card with 3 images
 * <SummaryCard
 *   images={[
 *     { src: 'img1.jpg', alt: 'Restaurant exterior' },
 *     { src: 'img2.jpg', alt: 'Pizza' },
 *     { src: 'img3.jpg', alt: 'Pasta' },
 *   ]}
 *   title="Little Nona's"
 *   badge="9.2"
 *   badgeVariant="filled"
 * />
 * ```
 */
export const SummaryCard = React.forwardRef<HTMLDivElement, SummaryCardProps>((props, ref) => {
  const {
    images,
    title,
    subtitle,
    badge,
    badgeVariant = 'default',
    description,
    buttonText,
    onButtonClick,
    buttonDisabled = false,
    // Phase 1 props
    loading = false,
    loadingImageCount,
    error = false,
    errorTitle = 'Failed to load',
    errorMessage,
    onErrorRetry,
    emptyTitle = 'No content',
    emptyMessage,
    // Phase 2 props
    imageLazy = true,
    onImageLoad,
    onImageError,
    onImagesLoad,
    onImagesError,
    className,
    ...cardProps
  } = props;

  // Normalize images to array
  const imageArray = images
    ? Array.isArray(images)
      ? images.map(normalizeImage)
      : [normalizeImage(images)]
    : [];

  const hasImages = imageArray.length > 0;
  const isSingleImage = imageArray.length === 1;
  const isGridImages = imageArray.length >= 2; // Changed: handle 2+ images including overflow
  const displayImages = imageArray.slice(0, 4); // Limit to max 4 images
  const hasOverflow = imageArray.length > 4;
  const imageCount = displayImages.length;
  const hasHeader = !!(title || subtitle || badge);
  const hasDescription = !!description;
  const hasButton = !!buttonText;
  
  // Determine if badge text is long (use Chip for long text, Badge for short)
  const badgeText = String(badge ?? '');
  const isLongBadge = badgeText.length > 4; // More than 4 characters, use Chip
  
  // Phase 1: State logic
  const isEmpty = !loading && !error && !hasImages && !title && !description && !hasButton;
  const defaultLoadingCount = hasImages && !isSingleImage ? 3 : 1;
  const skeletonImageCount = loadingImageCount ?? defaultLoadingCount;

  // Helper to render badge/chip based on text length
  const renderBadge = () => {
    if (badge === undefined) return null;
    
    if (isLongBadge) {
      // Map BadgeVariant to ChipVariant
      const chipVariant: ChipVariant = badgeVariant === 'default' ? 'neutral' : badgeVariant;
      return (
        <Chip variant={chipVariant} size="sm" className={styles.badge}>
          {badge}
        </Chip>
      );
    }
    
    return (
      <Badge variant={badgeVariant} className={styles.badge}>
        {badge}
      </Badge>
    );
  };

  return (
    <Card
      ref={ref}
      padding={0}
      className={cn(styles.summaryCard, className)}
      {...cardProps}
    >
      {/* Loading State - Single Image */}
      {loading && isSingleImage && (
        <div className={styles.loadingContainer} role="status" aria-live="polite">
          {/* Image Skeleton */}
          <div style={{ margin: 'var(--ai-spacing-4)' }}>
            <Skeleton width="100%" height={244} borderRadius={16} />
          </div>
          
          {/* Header Skeleton */}
          {hasHeader && (
            <div className={styles.header}>
              <div className={styles.headerText}>
                <Skeleton width="60%" height={24} />
                {subtitle && <Skeleton width="40%" height={16} style={{ marginTop: 'var(--ai-spacing-2)' }} />}
              </div>
              {badge && <Skeleton width={50} height={28} borderRadius={14} />}
            </div>
          )}
          
          {/* Description Skeleton */}
          {hasDescription && (
            <div style={{ margin: 'var(--ai-spacing-4) var(--ai-spacing-8) 0 var(--ai-spacing-8)' }}>
              <Skeleton width="100%" height={14} />
              <Skeleton width="80%" height={14} style={{ marginTop: 'var(--ai-spacing-2)' }} />
            </div>
          )}
          
          {/* Button Skeleton */}
          {hasButton && (
            <div className={styles.buttonContainer}>
              <Skeleton width="100%" height={44} borderRadius={8} />
            </div>
          )}
          
          <span className={styles.visuallyHidden}>Loading summary</span>
        </div>
      )}

      {/* Loading State - Grid Images */}
      {loading && isGridImages && (
        <div className={styles.loadingContainer} role="status" aria-live="polite">
          {/* Grid Skeleton */}
          <div 
            className={styles.imageGrid}
            data-image-count={skeletonImageCount}
            style={{ margin: 'var(--ai-spacing-4)' }}
          >
            {Array.from({ length: Math.min(skeletonImageCount, 4) }).map((_, index) => (
              <Skeleton
                key={index}
                width="100%"
                height="100%"
                borderRadius={2}
              />
            ))}
          </div>
          
          {/* Header Skeleton */}
          {hasHeader && (
            <div className={styles.header}>
              <div className={styles.headerText}>
                <Skeleton width="60%" height={24} />
                {subtitle && <Skeleton width="40%" height={16} style={{ marginTop: 'var(--ai-spacing-2)' }} />}
              </div>
              {badge && <Skeleton width={50} height={28} borderRadius={14} />}
            </div>
          )}
          
          {/* Description Skeleton */}
          {hasDescription && (
            <div style={{ margin: 'var(--ai-spacing-4) var(--ai-spacing-8) 0 var(--ai-spacing-8)' }}>
              <Skeleton width="100%" height={14} />
              <Skeleton width="80%" height={14} style={{ marginTop: 'var(--ai-spacing-2)' }} />
            </div>
          )}
          
          {/* Button Skeleton */}
          {hasButton && (
            <div className={styles.buttonContainer}>
              <Skeleton width="100%" height={44} borderRadius={8} />
            </div>
          )}
          
          <span className={styles.visuallyHidden}>Loading summary</span>
        </div>
      )}

      {/* Loading State - No Images */}
      {loading && !hasImages && (
        <div className={styles.loadingContainer} role="status" aria-live="polite">
          {/* Header Skeleton */}
          {hasHeader && (
            <div className={styles.header}>
              <div className={styles.headerText}>
                <Skeleton width="60%" height={24} />
                {subtitle && <Skeleton width="40%" height={16} style={{ marginTop: 'var(--ai-spacing-2)' }} />}
              </div>
              {badge && <Skeleton width={50} height={28} borderRadius={14} />}
            </div>
          )}
          
          {/* Description Skeleton */}
          {hasDescription && (
            <div style={{ margin: hasHeader ? 'var(--ai-spacing-4) var(--ai-spacing-8) 0 var(--ai-spacing-8)' : 'var(--ai-spacing-8)' }}>
              <Skeleton width="100%" height={14} />
              <Skeleton width="80%" height={14} style={{ marginTop: 'var(--ai-spacing-2)' }} />
            </div>
          )}
          
          {/* Button Skeleton */}
          {hasButton && (
            <div className={styles.buttonContainer}>
              <Skeleton width="100%" height={44} borderRadius={8} />
            </div>
          )}
          
          <span className={styles.visuallyHidden}>Loading summary</span>
        </div>
      )}

      {/* Error State Overlay */}
      {error && !loading && (
        <div className={styles.errorContainer}>
          <Alert
            layout="card"
            title={errorTitle}
            message={errorMessage}
            onAction={onErrorRetry}
            data-testid="summary-card-error"
          />
        </div>
      )}

      {/* Empty State */}
      {isEmpty && (
        <div className={styles.emptyContainer}>
          {/* Keep header if present */}
          {hasHeader && (
            <div className={styles.header}>
              {title && <h3 className={styles.title}>{title}</h3>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              {renderBadge()}
            </div>
          )}
          
          <div className={styles.emptyState}>
            <h4 className={styles.emptyTitle}>{emptyTitle}</h4>
            {emptyMessage && (
              <p className={styles.emptyMessage}>{emptyMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Normal Content */}
      {!error && !isEmpty && !loading && (
      <>
      {/* Image Section */}
      {hasImages && (
        <div className={styles.imageSection}>
          {isSingleImage && (
            <img
              src={imageArray[0].src}
              alt={imageArray[0].alt}
              className={styles.imageSingle}
              loading={imageArray[0].lazy !== false && imageLazy ? 'lazy' : 'eager'}
              onLoad={onImageLoad}
              onError={onImageError}
            />
          )}
          {isGridImages && (
            <div 
              className={styles.imageGrid}
              data-image-count={imageCount}
            >
              {displayImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={styles.imageGridItem}
                  loading={image.lazy !== false && imageLazy ? 'lazy' : 'eager'}
                  onLoad={onImagesLoad ? (e) => onImagesLoad(index, e) : undefined}
                  onError={onImagesError ? (e) => onImagesError(index, e) : undefined}
                />
              ))}
              {hasOverflow && (
                <div className={styles.overflowIndicator}>
                  +{imageArray.length - 4}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Header Section */}
      {hasHeader && (
        <div className={styles.header}>
          <div className={styles.headerText}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {renderBadge()}
        </div>
      )}

      {/* Description Section */}
      {hasDescription && (
        <p className={styles.description}>{description}</p>
      )}

      {/* Action Button */}
      {hasButton && (
        <div className={styles.buttonContainer}>
          <Button
            variant="primary"
            onClick={onButtonClick}
            disabled={buttonDisabled}
            className={styles.button}
          >
            {buttonText}
          </Button>
        </div>
      )}
      </>
      )}
    </Card>
  );
});

SummaryCard.displayName = 'SummaryCard';
