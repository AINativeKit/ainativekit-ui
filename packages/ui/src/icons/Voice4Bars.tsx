import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Voice4Bars icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Voice4Bars } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="voice-4-bars">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="voice-4-bars" aria-label="voice 4 bars" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Voice4Bars = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="voice-4-bars" {...props} />;
  }
);

Voice4Bars.displayName = 'Voice4Bars';
