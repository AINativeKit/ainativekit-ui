import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GptPlaceholder icon from platform category
 *
 * @example
 * ```tsx
 * import { GptPlaceholder } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="gpt-placeholder" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const GptPlaceholder = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="gpt-placeholder" {...props} />;
  }
);

GptPlaceholder.displayName = 'GptPlaceholder';
