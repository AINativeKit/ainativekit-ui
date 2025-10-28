import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlusCircleAdd icon from interface category
 *
 * @example
 * ```tsx
 * import { PlusCircleAdd } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="plus-circle-add" aria-label="Toggle" />

// With interactive state
<Icon name="plus-circle-add" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const PlusCircleAdd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plus-circle-add" {...props} />;
  }
);

PlusCircleAdd.displayName = 'PlusCircleAdd';
