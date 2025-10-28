import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * InternalKnowledge icon from misc category
 *
 * @example
 * ```tsx
 * import { InternalKnowledge } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="internal-knowledge">
  Action
</Button>

// Standalone meaningful icon
<Icon name="internal-knowledge" aria-label="internal knowledge" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const InternalKnowledge = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="internal-knowledge" {...props} />;
  }
);

InternalKnowledge.displayName = 'InternalKnowledge';
