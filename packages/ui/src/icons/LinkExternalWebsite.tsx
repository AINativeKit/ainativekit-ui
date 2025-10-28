import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * LinkExternalWebsite icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { LinkExternalWebsite } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="link-external-website">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="link-external-website" aria-label="link external website" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const LinkExternalWebsite = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="link-external-website" {...props} />;
  }
);

LinkExternalWebsite.displayName = 'LinkExternalWebsite';
