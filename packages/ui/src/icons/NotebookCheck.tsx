import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * NotebookCheck icon from misc category
 *
 * @example
 * ```tsx
 * import { NotebookCheck } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="notebook-check">
  Action
</Button>

// Standalone meaningful icon
<Icon name="notebook-check" aria-label="notebook check" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const NotebookCheck = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="notebook-check" {...props} />;
  }
);

NotebookCheck.displayName = 'NotebookCheck';
