import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * HistoryOff icon from misc category
 *
 * @example
 * ```tsx
 * import { HistoryOff } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="history-off">
  Action
</Button>

// Standalone meaningful icon
<Icon name="history-off" aria-label="history off" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const HistoryOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="history-off" {...props} />;
  }
);

HistoryOff.displayName = 'HistoryOff';
