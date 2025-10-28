import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SoundOffSimpleMute icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { SoundOffSimpleMute } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="sound-off-simple-mute">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="sound-off-simple-mute" aria-label="sound off simple mute" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const SoundOffSimpleMute = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="sound-off-simple-mute" {...props} />;
  }
);

SoundOffSimpleMute.displayName = 'SoundOffSimpleMute';
