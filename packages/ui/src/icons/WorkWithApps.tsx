import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * WorkWithApps icon from misc category
 *
 * @example
 * ```tsx
 * import { WorkWithApps } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="work-with-apps">
  Action
</Button>

// Standalone meaningful icon
<Icon name="work-with-apps" aria-label="work with apps" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const WorkWithApps = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="work-with-apps" {...props} />;
  }
);

WorkWithApps.displayName = 'WorkWithApps';
