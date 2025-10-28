import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SearchConnector icon from settings category
 *
 * @example
 * ```tsx
 * import { SearchConnector } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="search-connector">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="search-connector">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const SearchConnector = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="search-connector" {...props} />;
  }
);

SearchConnector.displayName = 'SearchConnector';
