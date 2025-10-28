import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MacbookDownload icon from settings category
 *
 * @example
 * ```tsx
 * import { MacbookDownload } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="macbook-download">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="macbook-download">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const MacbookDownload = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="macbook-download" {...props} />;
  }
);

MacbookDownload.displayName = 'MacbookDownload';
