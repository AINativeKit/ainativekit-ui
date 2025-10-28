import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Inpaint icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Inpaint } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="inpaint">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="inpaint" aria-label="inpaint" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Inpaint = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="inpaint" {...props} />;
  }
);

Inpaint.displayName = 'Inpaint';
