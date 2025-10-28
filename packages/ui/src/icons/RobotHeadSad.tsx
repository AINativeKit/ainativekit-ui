import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RobotHeadSad icon from platform category
 *
 * @example
 * ```tsx
 * import { RobotHeadSad } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="robot-head-sad" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const RobotHeadSad = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="robot-head-sad" {...props} />;
  }
);

RobotHeadSad.displayName = 'RobotHeadSad';
