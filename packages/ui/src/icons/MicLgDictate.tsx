import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MicLgDictate icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MicLgDictate } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="mic-lg-dictate">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="mic-lg-dictate" aria-label="mic lg dictate" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MicLgDictate = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="mic-lg-dictate" {...props} />;
  }
);

MicLgDictate.displayName = 'MicLgDictate';
