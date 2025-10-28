/**
 * Design Tokens - AI Native Kit
 * Centralized export of all design tokens
 *
 * @packageDocumentation
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './elevation';
export * from './opacity';
export * from './icons';
export * from './icon-utils';
export * from './utility-classes';

import { colors } from './colors';
import { typography, fontStack } from './typography';
import { spacing } from './spacing';
import { radius, defaultRadius } from './radius';
import { elevation, defaultElevation } from './elevation';
import { opacity } from './opacity';
import { iconMetadata, iconNames, icons } from './icons';

/**
 * All design tokens combined into a single object
 *
 * @example
 * ```typescript
 * import { tokens } from '@ainativekit/ui';
 *
 * const bgColor = tokens.colors.light.background.primary;
 * const h1Size = tokens.typography.heading1.fontSize;
 * const gap = tokens.spacing['space-16'];
 * ```
 */
export const tokens = {
  colors,
  typography,
  fontStack,
  spacing,
  radius,
  defaultRadius,
  elevation,
  defaultElevation,
  opacity,
  icons,
  iconMetadata,
  iconNames,
} as const;
