import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareAndroid icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareAndroid } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-android">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-android" aria-label="share android" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareAndroid = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-android" {...props} />;
  }
);

ShareAndroid.displayName = 'ShareAndroid';
