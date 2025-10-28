import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BuildingWorkspace icon from account-user category
 *
 * @example
 * ```tsx
 * import { BuildingWorkspace } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="building-workspace">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="building-workspace" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const BuildingWorkspace = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="building-workspace" {...props} />;
  }
);

BuildingWorkspace.displayName = 'BuildingWorkspace';
