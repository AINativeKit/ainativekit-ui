import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CaptionCcOff icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CaptionCcOff } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="caption-cc-off">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="caption-cc-off" aria-label="caption cc off" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CaptionCcOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="caption-cc-off" {...props} />;
  }
);

CaptionCcOff.displayName = 'CaptionCcOff';
