import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../../tokens/icons';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
  /**
   * Visual variant of the button.
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Icon to display before the button text.
   */
  leftIcon?: IconName;

  /**
   * Icon to display after the button text.
   */
  rightIcon?: IconName;

  /**
   * Render as icon-only button (circular, 44x44).
   * When set, children are ignored and aria-label is required.
   */
  iconOnly?: IconName;

  /**
   * Disabled state - prevents interaction.
   * @default false
   */
  disabled?: boolean;
}

/**
 * A versatile, accessible button component optimized for ChatGPT app interfaces.
 *
 * **Features:**
 * - Four variants: primary (filled), secondary (outlined), tertiary (subtle), ghost (minimal)
 * - 44px pill-shaped design for optimal touch targets
 * - Icon support (left/right positions)
 * - Icon-only circular buttons (44×44)
 * - Full accessibility with ARIA support
 * - Interactive states (hover, active, disabled)
 * - Dark mode compatible
 *
 * **Accessibility:**
 * - Uses semantic `<button>` element
 * - Icon-only buttons require `aria-label` (development warning if missing)
 * - Proper disabled state handling
 * - Keyboard navigation support with visible focus indicators
 *
 * **When to Use Button vs Link:**
 * - Use Button for actions: submit forms, open modals, trigger interactions
 * - Use Link (anchor) for navigation: go to pages, open URLs
 *
 * @example
 * ```tsx
 * // Primary button for main actions
 * <Button variant="primary">Get Started</Button>
 *
 * // Secondary button for alternative actions
 * <Button variant="secondary">Learn More</Button>
 *
 * // With icons for visual clarity
 * <Button variant="primary" leftIcon="plus-circle-add">Add Item</Button>
 * <Button variant="primary" rightIcon="arrow-right-sm">Continue</Button>
 *
 * // Icon-only buttons (MUST have aria-label)
 * <Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit document" />
 * <Button variant="tertiary" iconOnly="plus-circle-add" aria-label="Add item" />
 *
 * // Disabled state
 * <Button variant="primary" disabled>Cannot Click</Button>
 *
 * // Form submission
 * <Button variant="primary" type="submit">Submit Form</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    leftIcon,
    rightIcon,
    iconOnly,
    disabled = false,
    className,
    children,
    ...rest
  } = props;

  // Validation: iconOnly requires aria-label
  if (process.env.NODE_ENV === 'development' && iconOnly && !rest['aria-label']) {
    console.warn('Button: iconOnly buttons require an aria-label for accessibility');
  }

  const variantClass = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    tertiary: styles.buttonTertiary,
    ghost: styles.buttonGhost,
  }[variant];

  const isIconOnly = !!iconOnly;

  // Development mode validation for icon-only buttons
  if (process.env.NODE_ENV !== 'production' && isIconOnly && !rest['aria-label']) {
    console.warn(
      'Button: iconOnly buttons require an aria-label for accessibility'
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        styles.button,
        variantClass,
        isIconOnly && styles.buttonIconOnly,
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {isIconOnly ? (
        <Icon
          name={iconOnly}
          size="md"
          className={styles.iconOnlyIcon}
          aria-hidden="true"
        />
      ) : (
        <>
          {leftIcon && (
            <Icon
              name={leftIcon}
              size="sm"
              className={styles.leftIcon}
              aria-hidden="true"
            />
          )}
          <span className={styles.label}>{children}</span>
          {rightIcon && (
            <Icon
              name={rightIcon}
              size="sm"
              className={styles.rightIcon}
              aria-hidden="true"
            />
          )}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
