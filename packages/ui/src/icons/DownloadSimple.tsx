import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DownloadSimple icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { DownloadSimple } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="download-simple">
  Download
</Button>

// Toolbar icon button
<Button iconOnly="download-simple" aria-label="download simple" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const DownloadSimple = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="download-simple" {...props} />;
  }
);

DownloadSimple.displayName = 'DownloadSimple';
