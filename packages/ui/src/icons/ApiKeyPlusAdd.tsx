import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ApiKeyPlusAdd icon from platform category
 *
 * @example
 * ```tsx
 * import { ApiKeyPlusAdd } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="api-key-plus-add" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const ApiKeyPlusAdd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="api-key-plus-add" {...props} />;
  }
);

ApiKeyPlusAdd.displayName = 'ApiKeyPlusAdd';
