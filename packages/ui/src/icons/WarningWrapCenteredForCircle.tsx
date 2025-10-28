import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * WarningWrapCenteredForCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { WarningWrapCenteredForCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="warning-wrap-centered-for-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="warning-wrap-centered-for-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const WarningWrapCenteredForCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="warning-wrap-centered-for-circle" {...props} />;
  }
);

WarningWrapCenteredForCircle.displayName = 'WarningWrapCenteredForCircle';
