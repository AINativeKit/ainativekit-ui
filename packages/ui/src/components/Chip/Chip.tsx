import React from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../../tokens/icons';
import styles from './Chip.module.css';

export type ChipVariant = 'default' | 'filled' | 'success' | 'warning' | 'error' | 'neutral';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface ChipProps extends Omit<ComponentPropsWithoutRef<'span'>, 'color'> {
  /**
   * Visual variant of the chip.
   * @default 'default'
   */
  variant?: ChipVariant;

  /**
   * Size of the chip.
   * - sm: 24px height, compact padding
   * - md: 32px height, comfortable padding (default)
   * - lg: 40px height, spacious padding
   * @default 'md'
   */
  size?: ChipSize;

  /**
   * Icon to display before the chip text.
   */
  leftIcon?: IconName;

  /**
   * Icon to display after the chip text.
   */
  rightIcon?: IconName;

  /**
   * Custom icon element (overrides leftIcon if both provided).
   * Use for non-icon elements like avatars.
   */
  leftElement?: ReactNode;

  /**
   * Custom icon element (overrides rightIcon if both provided).
   * Use for non-icon elements.
   */
  rightElement?: ReactNode;

  /**
   * Makes the chip removable with a close button.
   * Callback fires when the close button is clicked.
   */
  onRemove?: () => void;

  /**
   * Makes the chip clickable and adds interactive states.
   * Also makes the chip keyboard accessible (button behavior).
   */
  onClick?: () => void;

  /**
   * Shows selected state (typically for filter chips).
   * @default false
   */
  selected?: boolean;

  /**
   * Accessible label for screen readers when content needs clarification.
   * Required when using only icons or abbreviations.
   */
  ariaLabel?: string;

  /**
   * Disabled state - prevents interaction.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Chip component following OpenAI design system with industry best practices.
 *
 * A pill-shaped component for labels, tags, filters, and categories.
 * Supports icons, removal, selection, and click interactions.
 *
 * **Key Features:**
 * - 6 semantic variants (default, filled, success, warning, error, neutral)
 * - 3 sizes (sm: 24px, md: 32px, lg: 40px)
 * - Icon support (left/right positions)
 * - Removable chips with close button
 * - Clickable chips with interactive states
 * - Selectable chips for filters
 * - Full accessibility support
 * - Dark mode compatible
 *
 * **Chip vs Badge:**
 * - Use Chip for: Text labels, tags, filters, categories (auto-width)
 * - Use Badge for: Counts, status dots, ratings (fixed circular size)
 *
 * @example
 * ```tsx
 * // Basic label chips
 * <Chip>Premium</Chip>
 * <Chip variant="success">Verified</Chip>
 * <Chip variant="neutral" size="sm">Beta</Chip>
 *
 * // With icons
 * <Chip leftIcon="check-square">Active</Chip>
 * <Chip variant="filled" leftIcon="star">Featured</Chip>
 *
 * // Removable chips (tags, filters)
 * <Chip onRemove={() => removeTag('react')}>React</Chip>
 * <Chip variant="neutral" onRemove={() => removeFilter()}>TypeScript</Chip>
 *
 * // Clickable chips
 * <Chip onClick={() => selectCategory('design')}>Design</Chip>
 * <Chip variant="filled" onClick={handleClick}>Engineering</Chip>
 *
 * // Selectable filter chips
 * <Chip selected onClick={() => toggleFilter('all')}>All</Chip>
 * <Chip onClick={() => toggleFilter('active')}>Active</Chip>
 *
 * // Disabled state
 * <Chip disabled>Unavailable</Chip>
 * <Chip variant="neutral" disabled onRemove={() => {}}>Can't Remove</Chip>
 * ```
 */
export const Chip = React.forwardRef<HTMLSpanElement | HTMLButtonElement, ChipProps>(
  (props, ref) => {
    const {
      variant = 'default',
      size = 'md',
      leftIcon,
      rightIcon,
      leftElement,
      rightElement,
      onRemove,
      onClick,
      selected = false,
      ariaLabel,
      disabled = false,
      className,
      children,
      ...rest
    } = props;

    // Determine if chip should be rendered as button
    const isInteractive = Boolean(onClick || onRemove);
    const Component = isInteractive ? 'button' : 'span';

    const variantClass = {
      default: styles.chipDefault,
      filled: styles.chipFilled,
      success: styles.chipSuccess,
      warning: styles.chipWarning,
      error: styles.chipError,
      neutral: styles.chipNeutral,
    }[variant];

    const sizeClass = {
      sm: styles.chipSm,
      md: styles.chipMd,
      lg: styles.chipLg,
    }[size];

    // Handle remove button click
    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent triggering onClick when removing
      onRemove?.();
    };

    // Keyboard handling for remove button
    const handleRemoveKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onRemove?.();
      }
    };

    const chipContent = (
      <>
        {/* Left icon/element */}
        {leftElement ||
          (leftIcon && (
            <Icon
              name={leftIcon}
              size={size === 'sm' ? 12 : size === 'md' ? 14 : 16}
              className={styles.chipIcon}
              aria-hidden="true"
            />
          ))}

        {/* Chip text content */}
        <span className={styles.chipLabel}>{children}</span>

        {/* Right icon/element (before remove button) */}
        {rightElement ||
          (rightIcon && (
            <Icon
              name={rightIcon}
              size={size === 'sm' ? 12 : size === 'md' ? 14 : 16}
              className={styles.chipIcon}
              aria-hidden="true"
            />
          ))}

        {/* Remove button */}
        {onRemove && (
          <span
            role="button"
            tabIndex={disabled ? -1 : 0}
            className={styles.chipRemove}
            onClick={handleRemoveClick}
            onKeyDown={handleRemoveKeyDown}
            aria-label="Remove"
          >
            <Icon name="x-xs-crossed" size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />
          </span>
        )}
      </>
    );

    if (Component === 'button') {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={cn(
            styles.chip,
            variantClass,
            sizeClass,
            selected && styles.chipSelected,
            disabled && styles.chipDisabled,
            className
          )}
          aria-label={ariaLabel}
          disabled={disabled}
          onClick={onClick}
          {...(rest as ComponentPropsWithoutRef<'button'>)}
        >
          {chipContent}
        </button>
      );
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={cn(
          styles.chip,
          variantClass,
          sizeClass,
          selected && styles.chipSelected,
          disabled && styles.chipDisabled,
          className
        )}
        aria-label={ariaLabel}
        role={ariaLabel ? 'status' : undefined}
        {...(rest as ComponentPropsWithoutRef<'span'>)}
      >
        {chipContent}
      </span>
    );
  }
);

Chip.displayName = 'Chip';
