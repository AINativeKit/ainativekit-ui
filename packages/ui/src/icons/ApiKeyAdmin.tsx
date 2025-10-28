import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ApiKeyAdmin icon from platform category
 *
 * @example
 * ```tsx
 * import { ApiKeyAdmin } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="api-key-admin" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const ApiKeyAdmin = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="api-key-admin" {...props} />;
  }
);

ApiKeyAdmin.displayName = 'ApiKeyAdmin';
