import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * WarningFilledWrapCenteredForCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { WarningFilledWrapCenteredForCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="warning-filled-wrap-centered-for-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="warning-filled-wrap-centered-for-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const WarningFilledWrapCenteredForCircle = React.forwardRef<
  HTMLSpanElement,
  Omit<IconProps, 'name'>
>((props, ref) => {
  return <Icon ref={ref} name="warning-filled-wrap-centered-for-circle" {...props} />;
});

WarningFilledWrapCenteredForCircle.displayName = 'WarningFilledWrapCenteredForCircle';
