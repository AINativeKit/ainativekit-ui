import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Notepad icon from misc category
 *
 * @example
 * ```tsx
 * import { Notepad } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="notepad">
  Action
</Button>

// Standalone meaningful icon
<Icon name="notepad" aria-label="notepad" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Notepad = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="notepad" {...props} />;
  }
);

Notepad.displayName = 'Notepad';
