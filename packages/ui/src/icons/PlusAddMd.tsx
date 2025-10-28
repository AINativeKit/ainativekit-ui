import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlusAddMd icon from interface category
 *
 * @example
 * ```tsx
 * import { PlusAddMd } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="plus-add-md" aria-label="Toggle" />

// With interactive state
<Icon name="plus-add-md" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const PlusAddMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plus-add-md" {...props} />;
  }
);

PlusAddMd.displayName = 'PlusAddMd';
