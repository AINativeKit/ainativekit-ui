import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RadioSelected icon from settings category
 *
 * @example
 * ```tsx
 * import { RadioSelected } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="radio-selected">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="radio-selected">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const RadioSelected = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="radio-selected" {...props} />;
  }
);

RadioSelected.displayName = 'RadioSelected';
