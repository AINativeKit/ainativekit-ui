/**
 * Unified error/empty state management for Map components
 * Eliminates code duplication across FullscreenMap, CompactMap, MapPlaceCard, etc.
 */

export interface ErrorStateConfig {
  /**
   * Loading state - renders skeleton UI
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
   */
  emptyTitle?: string;

  /**
   * Empty state message
   */
  emptyMessage?: string;

  /**
   * Whether the state is empty (no content)
   */
  isEmpty?: boolean;
}

export interface ErrorStateDefaults {
  errorTitle?: string;
  errorMessage?: string;
  emptyTitle?: string;
  emptyMessage?: string;
}

/**
 * Determines the current state based on loading, error, and empty conditions
 * Priority: Loading > Error > Empty > Content
 */
export function getErrorState(config: ErrorStateConfig) {
  const { loading = false, error = false, isEmpty = false } = config;

  return {
    isLoading: loading,
    isError: !loading && error,
    isEmpty: !loading && !error && isEmpty,
    isContent: !loading && !error && !isEmpty,
  };
}

/**
 * Get resolved error state values with defaults applied
 */
export function resolveErrorStateValues(
  config: ErrorStateConfig,
  defaults: ErrorStateDefaults = {}
) {
  return {
    errorTitle: config.errorTitle ?? defaults.errorTitle ?? 'Failed to load',
    errorMessage: config.errorMessage ?? defaults.errorMessage,
    emptyTitle: config.emptyTitle ?? defaults.emptyTitle ?? 'No items',
    emptyMessage: config.emptyMessage ?? defaults.emptyMessage,
    onErrorRetry: config.onErrorRetry,
  };
}

/**
 * Type for components that support error state
 */
export type ErrorStateProps = ErrorStateConfig;
