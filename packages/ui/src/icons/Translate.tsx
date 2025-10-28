import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Translate icon from settings category
 *
 * @example
 * ```tsx
 * import { Translate } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="translate">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="translate">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Translate = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="translate" {...props} />;
  }
);

Translate.displayName = 'Translate';
