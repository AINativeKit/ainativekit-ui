import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareScreen icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareScreen } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-screen">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-screen" aria-label="share screen" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareScreen = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-screen" {...props} />;
  }
);

ShareScreen.displayName = 'ShareScreen';
