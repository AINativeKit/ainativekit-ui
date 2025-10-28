import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AspectRatio169 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AspectRatio169 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="aspect-ratio-16-9">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="aspect-ratio-16-9" aria-label="aspect ratio 16 9" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AspectRatio169 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="aspect-ratio-16-9" {...props} />;
  }
);

AspectRatio169.displayName = 'AspectRatio169';
