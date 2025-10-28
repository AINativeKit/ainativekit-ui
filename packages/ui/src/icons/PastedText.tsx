import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PastedText icon from misc category
 *
 * @example
 * ```tsx
 * import { PastedText } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="pasted-text">
  Action
</Button>

// Standalone meaningful icon
<Icon name="pasted-text" aria-label="pasted text" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const PastedText = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pasted-text" {...props} />;
  }
);

PastedText.displayName = 'PastedText';
