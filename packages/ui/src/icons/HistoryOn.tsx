import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * HistoryOn icon from misc category
 *
 * @example
 * ```tsx
 * import { HistoryOn } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="history-on">
  Action
</Button>

// Standalone meaningful icon
<Icon name="history-on" aria-label="history on" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const HistoryOn = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="history-on" {...props} />;
  }
);

HistoryOn.displayName = 'HistoryOn';
