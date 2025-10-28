import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ToolsSkills icon from misc category
 *
 * @example
 * ```tsx
 * import { ToolsSkills } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="tools-skills">
  Action
</Button>

// Standalone meaningful icon
<Icon name="tools-skills" aria-label="tools skills" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ToolsSkills = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="tools-skills" {...props} />;
  }
);

ToolsSkills.displayName = 'ToolsSkills';
