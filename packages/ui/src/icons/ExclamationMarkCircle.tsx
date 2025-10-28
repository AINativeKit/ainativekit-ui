import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ExclamationMarkCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { ExclamationMarkCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="exclamation-mark-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="exclamation-mark-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ExclamationMarkCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="exclamation-mark-circle" {...props} />;
  }
);

ExclamationMarkCircle.displayName = 'ExclamationMarkCircle';
