import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ApiKey icon from platform category
 *
 * @example
 * ```tsx
 * import { ApiKey } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="api-key" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const ApiKey = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="api-key" {...props} />;
});

ApiKey.displayName = 'ApiKey';
