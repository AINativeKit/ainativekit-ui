import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AgentMode icon from misc category
 *
 * @example
 * ```tsx
 * import { AgentMode } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="agent-mode">
  Action
</Button>

// Standalone meaningful icon
<Icon name="agent-mode" aria-label="agent mode" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const AgentMode = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="agent-mode" {...props} />;
  }
);

AgentMode.displayName = 'AgentMode';
