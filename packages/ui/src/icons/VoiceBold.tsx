import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * VoiceBold icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { VoiceBold } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="voice-bold">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="voice-bold" aria-label="voice bold" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const VoiceBold = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="voice-bold" {...props} />;
  }
);

VoiceBold.displayName = 'VoiceBold';
