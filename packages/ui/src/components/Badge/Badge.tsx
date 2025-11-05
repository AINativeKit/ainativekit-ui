import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './Badge.module.css';

export type BadgeVariant = 'default' | 'filled' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends Omit<ComponentPropsWithoutRef<'span'>, 'color'> {
  /**
   * Visual variant of the badge.
   * @default 'default'
   */
  variant?: BadgeVariant;

  /**
   * Size of the badge.
   * - sm: 32px (--ai-spacing-16)
   * - md: 40px (--ai-spacing-20) - default
   * - lg: 48px (--ai-spacing-24)
   * @default 'md'
   */
  size?: BadgeSize;

  /**
   * Accessible label for screen readers when content is not descriptive.
   * Use when badge contains only icons, numbers, or abbreviated text.
   * @example
   * ```tsx
   * <Badge ariaLabel="5 unread messages">5</Badge>
   * <Badge ariaLabel="Verified" variant="success">✓</Badge>
   * ```
   */
  ariaLabel?: string;
}

/**
 * Badge component following OpenAI design system.
 *
 * A compact, circular indicator for displaying status, counts, ratings, or labels.
 * Optimized for ChatGPT app interfaces with dark mode support.
 *
 * @example
 * ```tsx
 * // Counter/Rating (provide ariaLabel for accessibility)
 * <Badge ariaLabel="Rating 9.2 out of 10">9.2</Badge>
 *
 * // Notification count
 * <Badge variant="filled" size="sm" ariaLabel="5 unread messages">5</Badge>
 * <Badge variant="filled" size="lg" ariaLabel="99+ notifications">99+</Badge>
 *
 * // Status indicators (always use ariaLabel for icons)
 * <Badge variant="success" ariaLabel="Verified">✓</Badge>
 * <Badge variant="warning" ariaLabel="Warning">!</Badge>
 * <Badge variant="error" ariaLabel="Error">×</Badge>
 *
 * // Compact labels
 * <Badge variant="neutral" size="sm">AI</Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { variant = 'default', size = 'md', ariaLabel, className, children, ...rest } = props;

  const variantClass = {
    default: styles.badgeDefault,
    filled: styles.badgeFilled,
    success: styles.badgeSuccess,
    warning: styles.badgeWarning,
    error: styles.badgeError,
    neutral: styles.badgeNeutral,
  }[variant];

  const sizeClass = {
    sm: styles.badgeSm,
    md: styles.badgeMd,
    lg: styles.badgeLg,
  }[size];

  return (
    <span
      ref={ref}
      className={cn(styles.badge, variantClass, sizeClass, className)}
      aria-label={ariaLabel}
      role={ariaLabel ? 'status' : undefined}
      {...rest}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';
