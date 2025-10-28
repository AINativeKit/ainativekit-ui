import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CaptionCcOn icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CaptionCcOn } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="caption-cc-on">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="caption-cc-on" aria-label="caption cc on" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CaptionCcOn = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="caption-cc-on" {...props} />;
  }
);

CaptionCcOn.displayName = 'CaptionCcOn';
