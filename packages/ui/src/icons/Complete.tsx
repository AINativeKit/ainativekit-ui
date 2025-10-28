import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Complete icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Complete } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="complete">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="complete" aria-label="complete" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Complete = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="complete" {...props} />;
  }
);

Complete.displayName = 'Complete';
