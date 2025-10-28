import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AnalyzeData icon from misc category
 *
 * @example
 * ```tsx
 * import { AnalyzeData } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="analyze-data">
  Action
</Button>

// Standalone meaningful icon
<Icon name="analyze-data" aria-label="analyze data" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const AnalyzeData = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="analyze-data" {...props} />;
  }
);

AnalyzeData.displayName = 'AnalyzeData';
