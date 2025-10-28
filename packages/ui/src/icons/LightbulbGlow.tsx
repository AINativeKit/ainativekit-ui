import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * LightbulbGlow icon from settings category
 *
 * @example
 * ```tsx
 * import { LightbulbGlow } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="lightbulb-glow">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="lightbulb-glow">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const LightbulbGlow = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="lightbulb-glow" {...props} />;
  }
);

LightbulbGlow.displayName = 'LightbulbGlow';
