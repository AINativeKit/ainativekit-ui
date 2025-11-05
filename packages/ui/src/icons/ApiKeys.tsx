import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ApiKeys icon from platform category
 *
 * @example
 * ```tsx
 * import { ApiKeys } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="api-keys" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const ApiKeys = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="api-keys" {...props} />;
});

ApiKeys.displayName = 'ApiKeys';
