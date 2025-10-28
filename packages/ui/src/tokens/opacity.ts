/**
 * Opacity tokens for AI Native Kit
 * Defines standard opacity values for consistent visual hierarchy
 *
 * @example
 * ```typescript
 * import { opacity } from '@ainativekit/ui';
 * const subtitleOpacity = opacity.subtle; // 0.7
 * const hoverOpacity = opacity.hover; // 0.9
 * ```
 */

export const opacity = {
  full: 1,
  subtle: 0.7,
  muted: 0.5,
  disabled: 0.3,
  // Interactive state opacities
  hover: 0.9,
  pressed: 1,
  // Overlay and background opacities
  overlay: 0.4,
  scrim: 0.6,
} as const;

export type OpacityToken = keyof typeof opacity;
