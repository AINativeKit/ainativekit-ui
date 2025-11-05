import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Status icon from platform category
 *
 * @example
 * ```tsx
 * import { Status } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="status" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const Status = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="status" {...props} />;
});

Status.displayName = 'Status';
