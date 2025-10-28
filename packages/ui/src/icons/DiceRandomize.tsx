import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DiceRandomize icon from misc category
 *
 * @example
 * ```tsx
 * import { DiceRandomize } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="dice-randomize">
  Action
</Button>

// Standalone meaningful icon
<Icon name="dice-randomize" aria-label="dice randomize" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const DiceRandomize = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="dice-randomize" {...props} />;
  }
);

DiceRandomize.displayName = 'DiceRandomize';
