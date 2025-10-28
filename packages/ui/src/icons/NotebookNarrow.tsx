import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * NotebookNarrow icon from misc category
 *
 * @example
 * ```tsx
 * import { NotebookNarrow } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="notebook-narrow">
  Action
</Button>

// Standalone meaningful icon
<Icon name="notebook-narrow" aria-label="notebook narrow" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const NotebookNarrow = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="notebook-narrow" {...props} />;
  }
);

NotebookNarrow.displayName = 'NotebookNarrow';
