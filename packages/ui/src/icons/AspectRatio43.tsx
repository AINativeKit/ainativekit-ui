import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AspectRatio43 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AspectRatio43 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="aspect-ratio-4-3">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="aspect-ratio-4-3" aria-label="aspect ratio 4 3" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AspectRatio43 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="aspect-ratio-4-3" {...props} />;
  }
);

AspectRatio43.displayName = 'AspectRatio43';
