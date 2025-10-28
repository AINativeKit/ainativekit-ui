import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Lightbulb20 icon from settings category
 *
 * @example
 * ```tsx
 * import { Lightbulb20 } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="lightbulb-20">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="lightbulb-20">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Lightbulb20 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="lightbulb-20" {...props} />;
  }
);

Lightbulb20.displayName = 'Lightbulb20';
