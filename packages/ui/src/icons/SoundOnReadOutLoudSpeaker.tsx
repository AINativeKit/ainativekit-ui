import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SoundOnReadOutLoudSpeaker icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { SoundOnReadOutLoudSpeaker } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="sound-on-read-out-loud-speaker">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="sound-on-read-out-loud-speaker" aria-label="sound on read out loud speaker" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const SoundOnReadOutLoudSpeaker = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="sound-on-read-out-loud-speaker" {...props} />;
  }
);

SoundOnReadOutLoudSpeaker.displayName = 'SoundOnReadOutLoudSpeaker';
