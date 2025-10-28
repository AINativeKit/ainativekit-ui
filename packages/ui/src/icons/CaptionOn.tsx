import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CaptionOn icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CaptionOn } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="caption-on">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="caption-on" aria-label="caption on" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CaptionOn = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="caption-on" {...props} />;
  }
);

CaptionOn.displayName = 'CaptionOn';
