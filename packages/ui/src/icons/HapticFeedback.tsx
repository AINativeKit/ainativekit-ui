import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * HapticFeedback icon from settings category
 *
 * @example
 * ```tsx
 * import { HapticFeedback } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="haptic-feedback">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="haptic-feedback">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const HapticFeedback = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="haptic-feedback" {...props} />;
  }
);

HapticFeedback.displayName = 'HapticFeedback';
