import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * WhisperAutoSubmit icon from settings category
 *
 * @example
 * ```tsx
 * import { WhisperAutoSubmit } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="whisper-auto-submit">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="whisper-auto-submit">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const WhisperAutoSubmit = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="whisper-auto-submit" {...props} />;
  }
);

WhisperAutoSubmit.displayName = 'WhisperAutoSubmit';
