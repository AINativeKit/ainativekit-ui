/**
 * Border radius tokens for AI Native Kit
 *
 * @example
 * ```typescript
 * import { radius } from '@ainativekit/ui';
 * const cardRadius = radius.xl; // '24px'
 * ```
 */

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  base: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

export const defaultRadius = radius.xl;

export type RadiusToken = keyof typeof radius;
