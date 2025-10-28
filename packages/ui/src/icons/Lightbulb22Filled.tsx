import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Lightbulb22Filled icon from settings category
 *
 * @example
 * ```tsx
 * import { Lightbulb22Filled } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="lightbulb-22-filled">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="lightbulb-22-filled">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Lightbulb22Filled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="lightbulb-22-filled" {...props} />;
  }
);

Lightbulb22Filled.displayName = 'Lightbulb22Filled';
