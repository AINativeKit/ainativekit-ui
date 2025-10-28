import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Lightbulb22 icon from settings category
 *
 * @example
 * ```tsx
 * import { Lightbulb22 } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="lightbulb-22">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="lightbulb-22">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Lightbulb22 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="lightbulb-22" {...props} />;
  }
);

Lightbulb22.displayName = 'Lightbulb22';
