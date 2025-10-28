import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlusAddSm icon from interface category
 *
 * @example
 * ```tsx
 * import { PlusAddSm } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="plus-add-sm" aria-label="Toggle" />

// With interactive state
<Icon name="plus-add-sm" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const PlusAddSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plus-add-sm" {...props} />;
  }
);

PlusAddSm.displayName = 'PlusAddSm';
