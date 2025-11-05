import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Spelling icon from settings category
 *
 * @example
 * ```tsx
 * import { Spelling } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="spelling">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="spelling">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Spelling = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="spelling" {...props} />;
});

Spelling.displayName = 'Spelling';
