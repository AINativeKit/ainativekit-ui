import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import { Error as ErrorIcon } from '../../icons/Error';
import { CheckCircle } from '../../icons/CheckCircle';
import { InfoCircle } from '../../icons/InfoCircle';
import { TriangleExclamationErrorWarning } from '../../icons/TriangleExclamationErrorWarning';
import { Button } from '../Button';
import styles from './Alert.module.css';

export type AlertVariant = 'error' | 'warning' | 'info' | 'success';
export type AlertLayout = 'default' | 'card';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Alert severity/type
   * - 'error': Error state (red)
   * - 'warning': Warning state (orange)
   * - 'info': Informational state (blue)
   * - 'success': Success state (green)
   * @default 'error'
   */
  variant?: AlertVariant;
  
  /**
   * Layout style
   * - 'default': Standard alert display
   * - 'card': Centered layout optimized for card containers
   * @default 'default'
   */
  layout?: AlertLayout;
  
  /**
   * Alert title/heading
   * @default Auto-generated based on variant
   */
  title?: string;
  
  /**
   * Detailed alert message or description
   */
  message?: string;
  
  /**
   * Optional action handler (typically for retry or dismiss)
   * When provided, shows an action button
   */
  onAction?: () => void;
  
  /**
   * Label for the action button
   * @default 'Try Again' for error, 'Dismiss' for others
   */
  actionLabel?: string;
  
  /**
   * Custom icon to display instead of default variant icon
   */
  icon?: React.ReactNode;
  
  /**
   * Hide the icon completely
   * @default false
   */
  hideIcon?: boolean;
  
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

const DEFAULT_TITLES: Record<AlertVariant, string> = {
  error: 'Something went wrong',
  warning: 'Warning',
  info: 'Information',
  success: 'Success',
};

const DEFAULT_ICONS: Record<AlertVariant, React.ReactNode> = {
  error: <ErrorIcon aria-hidden="true" />,
  warning: <TriangleExclamationErrorWarning aria-hidden="true" />,
  info: <InfoCircle aria-hidden="true" />,
  success: <CheckCircle aria-hidden="true" />,
};

/**
 * Alert component for displaying feedback messages
 * 
 * Supports multiple severity levels (error, warning, info, success) 
 * following standard design system patterns from Material UI, Chakra UI, etc.
 * 
 * @example
 * ```tsx
 * // Error alert
 * <Alert 
 *   variant="error"
 *   title="Failed to load"
 *   message="Unable to fetch data"
 *   onAction={handleRetry}
 * />
 * 
 * // Success alert
 * <Alert 
 *   variant="success"
 *   title="Saved"
 *   message="Your changes have been saved"
 * />
 * 
 * // Warning alert
 * <Alert 
 *   variant="warning"
 *   message="Your session will expire soon"
 * />
 * 
 * // Info alert
 * <Alert 
 *   variant="info"
 *   message="New features are available"
 * />
 * 
 * // Card layout (centered)
 * <Alert 
 *   variant="error"
 *   layout="card"
 *   title="No results found"
 *   message="Try adjusting your filters"
 * />
 * 
 * // Custom icon
 * <Alert 
 *   icon={<CustomIcon />}
 *   title="Custom alert"
 * />
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant = 'error',
    layout = 'default',
    title,
    message,
    onAction,
    actionLabel,
    icon,
    hideIcon = false,
    className,
    'data-testid': testId,
    ...rest
  } = props;

  const displayTitle = title ?? DEFAULT_TITLES[variant];
  const defaultActionLabel = variant === 'error' ? 'Try Again' : 'Dismiss';
  const displayActionLabel = actionLabel ?? defaultActionLabel;
  const displayIcon = !hideIcon && (icon ?? DEFAULT_ICONS[variant]);

  return (
    <div
      ref={ref}
      className={cn(
        styles.alert,
        styles[`alert--${variant}`],
        styles[`alert--${layout}`],
        className
      )}
      role="alert"
      aria-live="polite"
      data-testid={testId}
      {...rest}
    >
      {displayIcon && (
        <div className={styles.alert__icon}>
          {displayIcon}
        </div>
      )}
      
      <div className={styles.alert__content}>
        <h3 className={styles.alert__title}>
          {displayTitle}
        </h3>
        
        {message && (
          <p className={styles.alert__message}>
            {message}
          </p>
        )}
      </div>
      
      {onAction && (
        <div className={styles.alert__actions}>
          <Button
            variant="secondary"
            onClick={onAction}
          >
            {displayActionLabel}
          </Button>
        </div>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';
