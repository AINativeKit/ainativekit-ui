import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * VoiceInput icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { VoiceInput } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="voice-input">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="voice-input" aria-label="voice input" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const VoiceInput = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="voice-input" {...props} />;
  }
);

VoiceInput.displayName = 'VoiceInput';
