import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Skip icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Skip } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="skip">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="skip" aria-label="skip" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Skip = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="skip" {...props} />;
  }
);

Skip.displayName = 'Skip';
