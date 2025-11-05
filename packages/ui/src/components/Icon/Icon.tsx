import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import { iconData } from '../../tokens/icon-data';
import type { IconName } from '../../tokens/icons';
import styles from './Icon.module.css';

/**
 * Icon size - can be semantic token or pixel value
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export type IconTone = 'primary' | 'secondary' | 'tertiary' | 'inverted';

export interface IconProps extends Omit<ComponentPropsWithoutRef<'span'>, 'color' | 'children'> {
  /**
   * Icon name
   * @example 'settings-cog' | 'plus-circle-add' | 'terminal'
   */
  name: IconName;

  /**
   * Icon size - semantic token ('xs', 'sm', 'md', 'lg', 'xl') or pixel value (24, 32, etc.)
   * @default 'md'
   * @example 'md' | 24 | 32
   */
  size?: IconSize;

  /**
   * Icon tone mapped to design token colors
   * @default 'primary'
   */
  tone?: IconTone;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Makes the icon interactive with hover/active states
   * @default false
   * @example
   * ```tsx
   * <Icon name="settings-cog" interactive onClick={() => console.log('clicked')} />
   * ```
   */
  interactive?: boolean;

  /**
   * Disables the icon (reduces opacity, prevents interaction)
   * @default false
   * @example
   * ```tsx
   * <Icon name="settings-cog" disabled />
   * ```
   */
  disabled?: boolean;

  /**
   * Accessibility label for screen readers.
   *
   * **Icon Accessibility Patterns:**
   *
   * 1. **Decorative (default)**: No aria-label → Icon is aria-hidden
   * 2. **Meaningful**: Provide aria-label → Icon gets role="img"
   *
   * Most icons are decorative and should not have aria-label.
   * Only provide aria-label when the icon conveys unique information.
   *
   * @example
   * ```tsx
   * // ✅ Decorative icon (default - no aria-label)
   * <button>
   *   <Icon name="plus-circle-add" />
   *   Add Item
   * </button>
   *
   * // ✅ Icon-only button (aria-label on parent)
   * <button aria-label="Close dialog">
   *   <Icon name="close-bold" />
   * </button>
   *
   * // ✅ Meaningful standalone icon
   * <Icon name="warning" aria-label="Warning: Action required" />
   * ```
   */
  'aria-label'?: string;
}

/**
 * Icon component with intelligent lookup
 *
 * Usage:
 *
 * ```tsx
 * <Icon name="settings-cog" size="md" />
 * <Icon name="plus-circle-add" size={24} />
 * ```
 *
 * @example
 * ```tsx
 * // Semantic sizes
 * <Icon name="settings-cog" size="xs" />  // 12px
 * <Icon name="settings-cog" size="sm" />  // 16px
 * <Icon name="settings-cog" size="md" />  // 20px (default)
 * <Icon name="settings-cog" size="lg" />  // 24px
 * <Icon name="settings-cog" size="xl" />  // 32px
 *
 * // Pixel sizes
 * <Icon name="settings-cog" size={24} />
 * <Icon name="settings-cog" size={32} />
 *
 * // Accessibility: Decorative (default - most common)
 * <button>
 *   <Icon name="plus-circle-add" />
 *   Add Item
 * </button>
 *
 * // Accessibility: Meaningful standalone
 * <Icon name="warning" aria-label="Warning: Action required" />
 * ```
 */
export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      size = 'md',
      tone = 'primary',
      className,
      style,
      interactive = false,
      disabled = false,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      onClick,
      ...props
    },
    ref
  ) => {
    // Get icon data
    const icon = iconData[name];

    if (!icon) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Icon "${name}" not found in iconData`);
      }
      return null;
    }

    // Icons are decorative by default (aria-hidden) unless explicitly given aria-label
    // This aligns with accessibility best practices where most icons are decorative
    const hasExplicitLabel = ariaLabel !== undefined;
    const shouldBeHidden = ariaHidden ?? !hasExplicitLabel;

    // Handle onClick - prevent when disabled
    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event);
    };

    // Handle size - can be semantic token or pixel value
    const isNumericSize = typeof size === 'number';
    const sizeInPixels = isNumericSize
      ? size
      : {
          xs: 12,
          sm: 16,
          md: 20,
          lg: 24,
          xl: 32,
        }[size];

    const sizeClass = !isNumericSize
      ? {
          xs: styles.iconXs,
          sm: styles.iconSm,
          md: styles.iconMd,
          lg: styles.iconLg,
          xl: styles.iconXl,
        }[size]
      : undefined;

    const toneClass = {
      primary: styles.iconPrimary,
      secondary: styles.iconSecondary,
      tertiary: styles.iconTertiary,
      inverted: styles.iconInverted,
    }[tone];

    return (
      <span
        ref={ref}
        role={hasExplicitLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={shouldBeHidden || undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          styles.iconSvg,
          sizeClass,
          toneClass,
          interactive && !disabled && styles.iconInteractive,
          disabled && styles.iconDisabled,
          className
        )}
        style={style}
        onClick={handleClick}
        {...props}
      >
        <svg
          width={sizeInPixels}
          height={sizeInPixels}
          viewBox={icon.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon.paths.map((path, index) => (
            <path key={index} d={path} fill="currentColor" />
          ))}
        </svg>
      </span>
    );
  }
);

Icon.displayName = 'Icon';
