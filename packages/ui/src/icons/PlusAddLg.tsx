import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlusAddLg icon from interface category
 *
 * @example
 * ```tsx
 * import { PlusAddLg } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="plus-add-lg" aria-label="Toggle" />

// With interactive state
<Icon name="plus-add-lg" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const PlusAddLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plus-add-lg" {...props} />;
  }
);

PlusAddLg.displayName = 'PlusAddLg';
