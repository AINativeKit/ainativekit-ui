import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Voice5BarsSoundwave icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Voice5BarsSoundwave } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="voice-5-bars-soundwave">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="voice-5-bars-soundwave" aria-label="voice 5 bars soundwave" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Voice5BarsSoundwave = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="voice-5-bars-soundwave" {...props} />;
  }
);

Voice5BarsSoundwave.displayName = 'Voice5BarsSoundwave';
