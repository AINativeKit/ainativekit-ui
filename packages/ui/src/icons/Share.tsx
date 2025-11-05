import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Share icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Share } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share" aria-label="share" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Share = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="share" {...props} />;
});

Share.displayName = 'Share';
