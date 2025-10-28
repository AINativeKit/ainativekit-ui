import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlusSquareAdd icon from interface category
 *
 * @example
 * ```tsx
 * import { PlusSquareAdd } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="plus-square-add" aria-label="Toggle" />

// With interactive state
<Icon name="plus-square-add" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const PlusSquareAdd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plus-square-add" {...props} />;
  }
);

PlusSquareAdd.displayName = 'PlusSquareAdd';
