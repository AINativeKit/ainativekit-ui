import React from 'react';
import { Card, type CardProps } from './Card';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';
import { Alert } from '../Alert';
import type { IconName } from '../../tokens/icons';
import styles from './ListCard.module.css';

export interface ListCardImage {
  src: string;
  alt: string;
  /**
   * Enable native lazy loading
   * @default true
   */
  lazy?: boolean;
}

export interface ListCardItem {
  /**
   * Small circular image for the list item (44x44).
   */
  image?: string | ListCardImage;

  /**
   * Item title using body-regular typography.
   */
  title: string;

  /**
   * Item subtitle using subheading-regular typography with secondary color.
   */
  subtitle?: string;

  /**
   * Item description using body-small-regular typography.
   */
  description?: string;

  /**
   * Callback when the item action button is clicked.
   */
  onItemAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Accessibility label for item action button
   * REQUIRED when onItemAction is provided for proper accessibility
   */
  actionLabel?: string;

  /**
   * Callback when item image loads successfully
   */
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Callback when item image fails to load
   */
  onImageError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

export interface ListCardProps extends Omit<CardProps, 'children'> {
  /**
   * Top image displayed at 210px height.
   */
  topImage?: string | ListCardImage;

  /**
   * Header title using body-emph typography.
   */
  headerTitle?: string;

  /**
   * Callback when the header action button is clicked.
   */
  onHeaderAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Array of list items to display.
   */
  items?: ListCardItem[];

  /**
   * Button text. If provided, action button will be displayed.
   */
  buttonText?: string;

  /**
   * Callback when the action button is clicked.
   */
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Whether the action button is disabled.
   */
  buttonDisabled?: boolean;

  // Phase 1: Critical Improvements (P0)
  /**
   * Loading state - shows skeleton UI
   * @default false
   */
  loading?: boolean;

  /**
   * Number of skeleton items to show during loading
   * @default 3
   */
  loadingItemCount?: number;

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
   * @default 'No items'
   */
  emptyTitle?: string;

  /**
   * Empty state message
   */
  emptyMessage?: string;

  /**
   * Empty state icon
   */
  emptyIcon?: IconName;

  // Phase 2: Performance & Accessibility (P1)
  /**
   * Top image lazy loading
   * @default true
   */
  topImageLazy?: boolean;

  /**
   * Item images lazy loading
   * @default true
   */
  itemImagesLazy?: boolean;

  /**
   * Callback when top image loads successfully
   */
  onTopImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Callback when top image fails to load
   */
  onTopImageError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;

  /**
   * Accessibility label for header action button
   * REQUIRED when onHeaderAction is provided for proper accessibility
   */
  headerActionLabel?: string;
}

// Helper function to normalize image input
const normalizeImage = (image: string | ListCardImage): ListCardImage => {
  if (typeof image === 'string') {
    return { src: image, alt: '', lazy: true };
  }
  return { lazy: true, ...image };
};

export const ListCard = React.forwardRef<HTMLDivElement, ListCardProps>((props, ref) => {
  const {
    topImage,
    headerTitle,
    onHeaderAction = undefined,
    items = [],
    buttonText,
    onButtonClick,
    buttonDisabled = false,
    loading = false,
    loadingItemCount = 3,
    error = false,
    errorTitle = 'Failed to load',
    errorMessage,
    onErrorRetry,
    emptyTitle = 'No items',
    emptyMessage,
    emptyIcon,
    topImageLazy = true,
    itemImagesLazy = true,
    onTopImageLoad,
    onTopImageError,
    headerActionLabel,
    ...cardProps
  } = props;

  // Development mode validation for accessibility
  if (process.env.NODE_ENV !== 'production') {
    if (onHeaderAction && !headerActionLabel) {
      console.error(
        'ListCard: headerActionLabel is required when onHeaderAction is provided. ' +
        'Provide a descriptive label for accessibility (e.g., "Edit playlist", "Manage items").'
      );
    }
    items.forEach((item, index) => {
      if (item.onItemAction && !item.actionLabel) {
        console.error(
          `ListCard: actionLabel is required for item ${index} when onItemAction is provided. ` +
          `Provide a descriptive label for accessibility (e.g., "Add ${item.title} to cart").`
        );
      }
    });
  }

  const hasTopImage = !!topImage;
  const hasHeader = !!headerTitle || !!onHeaderAction;
  const hasItems = items.length > 0;
  const hasButton = !!buttonText;
  const isEmpty = !loading && !error && items.length === 0;

  const topImageData = topImage ? normalizeImage(topImage) : null;

  return (
    <Card ref={ref} padding={0} {...cardProps}>
      {/* Wrapper to prevent Card's gap from affecting ListCard layout */}
      <div className={styles.contentWrapper}>
        {/* Loading State Overlay */}
        {loading && !error && (
        <div className={styles.loadingContainer} role="status" aria-live="polite">
          {/* Header Skeleton */}
          {hasHeader && (
            <div className={styles.header}>
              <Skeleton width="60%" height={24} />
            </div>
          )}

          {/* List Items Skeleton */}
          <div className={styles.listContainer}>
            {Array.from({ length: loadingItemCount }).map((_, index) => (
              <div key={index}>
                <div className={styles.listItem}>
                  <div className={styles.itemHeader}>
                    <Skeleton variant="circular" width={44} height={44} />
                    <div className={styles.itemTextContent}>
                      <Skeleton width="70%" height={16} />
                      <Skeleton width="50%" height={14} />
                    </div>
                  </div>
                </div>
                {index < loadingItemCount - 1 && <div className={styles.divider} />}
              </div>
            ))}
          </div>
          
          <span className={styles.visuallyHidden}>Loading list content</span>
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
            data-testid="list-card-error"
          />
        </div>
      )}

      {/* Empty State */}
      {isEmpty && (
        <div className={styles.emptyContainer}>
          {/* Keep header if present */}
          {hasHeader && (
            <div className={styles.header}>
              {headerTitle && <h3 className={styles.headerTitle}>{headerTitle}</h3>}
              {onHeaderAction && (
                <Button
                  variant="ghost"
                  iconOnly="edit-pencil"
                  onClick={onHeaderAction}
                  aria-label={headerActionLabel || 'Edit'}
                  className={styles.headerActionButton}
                />
              )}
            </div>
          )}
          
          <div className={styles.emptyState}>
            {emptyIcon && (
              <div className={styles.emptyIcon} aria-hidden="true">
                {/* Icon would be rendered here if we had icon component */}
              </div>
            )}
            <h4 className={styles.emptyTitle}>{emptyTitle}</h4>
            {emptyMessage && (
              <p className={styles.emptyMessage}>{emptyMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Normal Content - only show when not loading, not error, and has items */}
      {!loading && !error && hasItems && (
        <>
          {/* Top Image */}
          {hasTopImage && topImageData && (
            <div className={styles.topImageContainer}>
              <img
                src={topImageData.src}
                alt={topImageData.alt}
                className={styles.topImage}
                loading={topImageLazy && topImageData.lazy !== false ? 'lazy' : undefined}
                onLoad={onTopImageLoad}
                onError={onTopImageError}
              />
            </div>
          )}

          {/* Header */}
          {hasHeader && (
            <div className={styles.header}>
              {headerTitle && <h3 className={styles.headerTitle}>{headerTitle}</h3>}
              {onHeaderAction && (
                <Button
                  variant="ghost"
                  iconOnly="edit-pencil"
                  onClick={onHeaderAction}
                  aria-label={headerActionLabel || 'Edit'}
                  className={styles.headerActionButton}
                />
              )}
            </div>
          )}

          {/* List Items */}
          <div className={styles.listContainer}>
            {items.map((item, index) => {
              const itemImageData = item.image ? normalizeImage(item.image) : null;
              const isLastItem = index === items.length - 1;
              const showDivider = hasButton || !isLastItem;

              return (
                <div key={index}>
                  <div className={styles.listItem}>
                    <div className={styles.itemHeader}>
                      {itemImageData && (
                        <img
                          src={itemImageData.src}
                          alt={itemImageData.alt}
                          className={styles.itemImage}
                          loading={itemImagesLazy && itemImageData.lazy !== false ? 'lazy' : undefined}
                          onLoad={item.onImageLoad}
                          onError={item.onImageError}
                        />
                      )}
                      <div className={styles.itemTextContent}>
                        <div className={styles.itemTitle}>{item.title}</div>
                        {item.subtitle && (
                          <div className={styles.itemSubtitle}>{item.subtitle}</div>
                        )}
                      </div>
                      {item.onItemAction && (
                        <Button
                          variant="tertiary"
                          iconOnly="plus-add-md"
                          onClick={item.onItemAction}
                          aria-label={item.actionLabel || 'Add'}
                          className={styles.itemActionButton}
                        />
                      )}
                    </div>
                    {item.description && (
                      <div className={styles.itemDescription}>{item.description}</div>
                    )}
                  </div>
                  {showDivider && <div className={styles.divider} />}
                </div>
              );
            })}
            {!hasButton && <div className={styles.listBottomPadding} />}
          </div>

          {/* Action Button */}
          {hasButton && (
            <div className={styles.buttonContainer}>
              <Button
                onClick={onButtonClick}
                disabled={buttonDisabled}
                variant="primary"
                style={{ width: '100%' }}
              >
                {buttonText}
              </Button>
            </div>
          )}
        </>
      )}
      </div>
    </Card>
  );
});

ListCard.displayName = 'ListCard';
