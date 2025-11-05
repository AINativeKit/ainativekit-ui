import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Download icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Download } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="download">
  Download
</Button>

// Toolbar icon button
<Button iconOnly="download" aria-label="download" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Download = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="download" {...props} />;
});

Download.displayName = 'Download';
