/**
 * Unified error/empty state display component
 * Used by Map components to show consistent error and empty states
 */

import React from 'react';
import { Alert } from '../Alert';
import type { AlertLayout, AlertVariant } from '../Alert';

export interface ErrorStateDisplayProps {
  /**
   * State type to display
   */
  state: 'error' | 'empty';

  /**
   * Title text
   */
  title: string;

  /**
   * Message text (optional)
   */
  message?: string;

  /**
   * Action handler (for error state with retry)
   */
  onAction?: () => void;

  /**
   * Action button label
   */
  actionLabel?: string;

  /**
   * Whether to hide the icon
   * @default true
   */
  hideIcon?: boolean;

  /**
   * Alert layout variant
   * @default 'card'
   */
  layout?: AlertLayout;

  /**
   * Additional className
   */
  className?: string;

  /**
   * Container className
   */
  containerClassName?: string;
}

/**
 * Unified error/empty state display
 * Simplifies repetitive error/empty state rendering across Map components
 */
export const ErrorStateDisplay: React.FC<ErrorStateDisplayProps> = ({
  state,
  title,
  message,
  onAction,
  actionLabel,
  hideIcon = true,
  layout = 'card',
  className,
  containerClassName,
}) => {
  const variant: AlertVariant = state === 'error' ? 'error' : 'info';
  const defaultActionLabel = state === 'error' ? 'Try again' : undefined;

  return (
    <div className={containerClassName}>
      <Alert
        variant={variant}
        hideIcon={hideIcon}
        layout={layout}
        title={title}
        message={message}
        onAction={onAction}
        actionLabel={actionLabel ?? defaultActionLabel}
        className={className}
      />
    </div>
  );
};

ErrorStateDisplay.displayName = 'ErrorStateDisplay';
