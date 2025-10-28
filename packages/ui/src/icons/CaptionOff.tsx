import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CaptionOff icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CaptionOff } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="caption-off">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="caption-off" aria-label="caption off" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CaptionOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="caption-off" {...props} />;
  }
);

CaptionOff.displayName = 'CaptionOff';
