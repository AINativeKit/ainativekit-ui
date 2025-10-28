import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * LinkDisabledBold icon from interface category
 *
 * @example
 * ```tsx
 * import { LinkDisabledBold } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="link-disabled-bold" aria-label="Toggle" />

// With interactive state
<Icon name="link-disabled-bold" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const LinkDisabledBold = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="link-disabled-bold" {...props} />;
  }
);

LinkDisabledBold.displayName = 'LinkDisabledBold';
