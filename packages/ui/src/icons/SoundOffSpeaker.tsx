import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SoundOffSpeaker icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { SoundOffSpeaker } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="sound-off-speaker">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="sound-off-speaker" aria-label="sound off speaker" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const SoundOffSpeaker = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="sound-off-speaker" {...props} />;
  }
);

SoundOffSpeaker.displayName = 'SoundOffSpeaker';
