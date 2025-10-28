import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MagnifyingGlassSmSearch icon from interface category
 *
 * @example
 * ```tsx
 * import { MagnifyingGlassSmSearch } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="magnifying-glass-sm-search" aria-label="Search" />

// With interactive state
<Icon name="magnifying-glass-sm-search" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const MagnifyingGlassSmSearch = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="magnifying-glass-sm-search" {...props} />;
  }
);

MagnifyingGlassSmSearch.displayName = 'MagnifyingGlassSmSearch';
