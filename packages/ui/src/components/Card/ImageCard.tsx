import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Card, type CardProps } from './Card';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';
import { Alert } from '../Alert';
import { Badge, type BadgeProps } from '../Badge';
import { Chip, type ChipProps } from '../Chip';
import type { IconName } from '../../tokens/icons';
import styles from './ImageCard.module.css';

export interface ImageCardProps extends Omit<CardProps, 'children'> {
  /**
   * Image source URL or object with src and alt
   */
  image: string | { src: string; alt: string };

  /**
   * Image positioning
   * @default 'center'
   */
  imagePosition?: 'center' | 'top' | 'bottom';

  /**
   * Card title (optional - only renders if provided)
   */
  title?: string;

  /**
   * Card subtitle (optional - only renders if provided)
   */
  subtitle?: string;

  /**
   * Action button icon (optional - only renders if provided)
   */
  actionIcon?: IconName;

  /**
   * Accessibility label for action button
   * REQUIRED when actionIcon is provided for proper accessibility
   */
  actionLabel?: string;

  /**
   * Action button click handler
   */
  onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Size variant for the card.
   * @default 'default'
   */
  size?: 'default' | 'compact';

  /**
   * Custom minimum height for the card. Accepts number (px) or CSS length.
   */
  minHeight?: number | string;

  /**
   * Custom aspect ratio for the card (e.g. '16 / 9').
   */
  aspectRatio?: string;

  // Phase 1: Core Improvements
  /**
   * Loading state - shows skeleton UI
   * @default false
   */
  loading?: boolean;

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
   * Badge content (text or number).
   * - For short content (≤4 chars): Badge component is used (e.g., "New", "5", "✓")
   * - For longer content (>4 chars): Chip component is used (e.g., "Featured", "On Sale")
   */
  badge?: string | number;

  /**
   * Badge position
   * @default 'top-right'
   */
  badgePosition?: 'top-left' | 'top-right';

  /**
   * Badge/Chip variant (inherits from Badge/Chip components)
   * @default 'default'
   */
  badgeVariant?: BadgeProps['variant'] | ChipProps['variant'];

  /**
   * Number of lines for title (1-3)
   * @default 1
   */
  titleLines?: 1 | 2 | 3;

  /**
   * Number of lines for subtitle (1-3)
   * @default 1
   */
  subtitleLines?: 1 | 2 | 3;

  /**
   * Callback when image loads successfully
   */
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Callback when image fails to load
   */
  onImageError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Enable native lazy loading
   * @default true
   */
  lazy?: boolean;
}

/**
 * ImageCard component - Card with background image overlay.
 *
 * Features:
 * - Full background image with configurable positioning
 * - Optional text overlay (title, subtitle) with multi-line support
 * - Optional action button
 * - Optional badge support (top-left or top-right)
 * - Gradient overlay for text readability
 * - Loading and error states
 * - Native lazy loading support
 * - Image load/error callbacks
 * - Inherits all Card props (elevation, interactive, etc.)
 *
 * @example
 * ```tsx
 * // Full featured with short badge
 * <ImageCard
 *   image="https://example.com/pizza.jpg"
 *   title="Margherita Pizza"
 *   subtitle="Classic Italian"
 *   actionIcon="plus-circle-add"
 *   onAction={() => console.log('Added')}
 *   actionLabel="Add to cart"
 *   badge="New"
 *   badgeVariant="filled"
 *   interactive
 * />
 *
 * // With longer badge text (automatically uses Chip)
 * <ImageCard
 *   image="https://example.com/pizza.jpg"
 *   title="Margherita Pizza"
 *   badge="Featured"
 *   badgeVariant="neutral"
 * />
 *
 * // With loading state
 * <ImageCard
 *   image="https://example.com/pizza.jpg"
 *   title="Margherita Pizza"
 *   loading={isLoading}
 * />
 *
 * // With error state
 * <ImageCard
 *   image="https://example.com/pizza.jpg"
 *   error={hasError}
 *   errorTitle="Failed to load"
 *   errorMessage="Unable to load this image"
 *   onErrorRetry={handleRetry}
 * />
 * ```
 */
export const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>((props, ref) => {
  const {
    image,
    imagePosition = 'center',
    title,
    subtitle,
    actionIcon,
    onAction,
    actionLabel,
    size = 'default',
    minHeight,
    aspectRatio,
    loading = false,
    error = false,
    errorTitle = 'Failed to load',
    errorMessage,
    onErrorRetry,
    badge,
    badgePosition = 'top-right',
    badgeVariant = 'default',
    titleLines = 1,
    subtitleLines = 1,
    onImageLoad,
    onImageError,
    lazy = true,
    className,
    style,
    ...cardProps
  } = props;

  const [imageLoadState, setImageLoadState] = useState<'loading' | 'loaded' | 'error'>('loaded');
  const [internalError, setInternalError] = useState(false);

  const imageSrc = typeof image === 'string' ? image : image.src;
  const imageAlt = typeof image === 'string' ? (title || 'Image') : image.alt;

  const hasContent = !!(title || subtitle);
  const hasAction = !!actionIcon;
  const hasBadge = badge !== undefined && badge !== null && badge !== '';
  const isLoading = loading || imageLoadState === 'loading';
  // Show error state when error prop is true, regardless of loading state
  const hasError = error || internalError || imageLoadState === 'error';

  // Development mode validation
  if (process.env.NODE_ENV !== 'production') {
    if (hasAction && !actionLabel) {
      console.error(
        'ImageCard: actionLabel is required when actionIcon is provided. ' +
        'Provide a descriptive label for accessibility (e.g., "Add to cart", "View details").'
      );
    }
    if (titleLines && (titleLines < 1 || titleLines > 3)) {
      console.warn('ImageCard: titleLines should be between 1 and 3');
    }
    if (subtitleLines && (subtitleLines < 1 || subtitleLines > 3)) {
      console.warn('ImageCard: subtitleLines should be between 1 and 3');
    }
  }

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoadState('loaded');
    setInternalError(false);
    onImageLoad?.(event);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoadState('error');
    setInternalError(true);
    onImageError?.(event);
  };

  const positionClass = {
    center: styles.imagePositionCenter,
    top: styles.imagePositionTop,
    bottom: styles.imagePositionBottom,
  }[imagePosition];

  const normalizedMinHeight =
    typeof minHeight === 'number' ? `${minHeight}px` : minHeight;

  const inlineStyle = {
    ...(normalizedMinHeight ? { '--image-card-min-height': normalizedMinHeight } : {}),
    ...(aspectRatio ? { '--image-card-aspect-ratio': aspectRatio } : {}),
    ...style,
  } as React.CSSProperties;

  return (
    <Card
      ref={ref}
      padding={0}
      className={cn(
        styles.imageCard,
        size === 'compact' && styles.imageCardCompact,
        className
      )}
      style={inlineStyle}
      {...cardProps}
    >
      {/* Native Image Element - Always render but may be hidden */}
      <img
        src={imageSrc}
        alt={imageAlt}
        loading={lazy ? 'lazy' : undefined}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={cn(
          styles.imageElement,
          positionClass,
          (isLoading || hasError) && styles.imageHidden
        )}
        aria-label={imageAlt}
      />

      {/* Loading State Overlay */}
      {isLoading && !hasError && (
        <div className={styles.loadingContainer} role="status" aria-live="polite">
          <Skeleton width="100%" height="100%" animation />
          <span className={styles.visuallyHidden}>Loading image: {title || 'content'}</span>
        </div>
      )}

      {/* Error State Overlay */}
      {hasError && !isLoading && (
        <div className={styles.errorContainer}>
          <Alert
            layout="card"
            title={errorTitle}
            message={errorMessage}
            onAction={onErrorRetry}
            data-testid="image-card-error"
          />
        </div>
      )}

      {/* Content only visible when image loaded successfully */}
      {!isLoading && !hasError && (
        <>
          {/* Gradient Overlay for text readability */}
          {(hasContent || hasAction) && <div className={styles.gradientOverlay} />}

          {/* Badge/Chip - Uses Chip for longer text, Badge for short content */}
          {hasBadge && (
            <div
              className={cn(
                styles.badge,
                badgePosition === 'top-left' ? styles.badgeTopLeft : styles.badgeTopRight
              )}
            >
              {String(badge).length > 4 ? (
                <Chip variant={badgeVariant as ChipProps['variant']} size="sm">
                  {badge}
                </Chip>
              ) : (
                <Badge variant={badgeVariant as BadgeProps['variant']}>
                  {badge}
                </Badge>
              )}
            </div>
          )}

          {/* Text Content Overlay */}
          {hasContent && (
            <div
              className={cn(
                styles.content,
                !hasAction && styles.contentNoAction
              )}
            >
              {title && (
                <h3 
                  className={cn(
                    styles.title,
                    styles[`titleLines${titleLines}`]
                  )}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p 
                  className={cn(
                    styles.subtitle,
                    styles[`subtitleLines${subtitleLines}`]
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Action Button */}
          {hasAction && actionLabel && (
            <Button
              variant="tertiary"
              iconOnly={actionIcon}
              aria-label={`${actionLabel}${title ? ` for ${title}` : ''}`}
              onClick={onAction}
              className={styles.actionButton}
            />
          )}
        </>
      )}
    </Card>
  );
});

ImageCard.displayName = 'ImageCard';
