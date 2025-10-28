import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * InternalKnowledgeOptimizedForCircle icon from misc category
 *
 * @example
 * ```tsx
 * import { InternalKnowledgeOptimizedForCircle } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="internal-knowledge-optimized-for-circle">
  Action
</Button>

// Standalone meaningful icon
<Icon name="internal-knowledge-optimized-for-circle" aria-label="internal knowledge optimized for circle" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const InternalKnowledgeOptimizedForCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="internal-knowledge-optimized-for-circle" {...props} />;
  }
);

InternalKnowledgeOptimizedForCircle.displayName = 'InternalKnowledgeOptimizedForCircle';
