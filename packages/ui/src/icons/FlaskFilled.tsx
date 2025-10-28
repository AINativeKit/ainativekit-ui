import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FlaskFilled icon from misc category
 *
 * @example
 * ```tsx
 * import { FlaskFilled } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="flask-filled">
  Action
</Button>

// Standalone meaningful icon
<Icon name="flask-filled" aria-label="flask filled" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const FlaskFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="flask-filled" {...props} />;
  }
);

FlaskFilled.displayName = 'FlaskFilled';
