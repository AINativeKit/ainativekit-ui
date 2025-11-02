/**
 * Spacing tokens for AI Native Kit
 * Complete spacing scale from design system
 * Matches the OpenAI Figma spacing definitions to stay aligned with design source
 *
 * @example
 * ```typescript
 * import { spacing } from '@ainativekit/ui/tokens';
 * const padding = spacing[16]; // '32px'
 * ```
 */

export type SpacingScale = 0 | 1 | 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 64;

export const spacing: Record<SpacingScale, string> = {
  0: '0px',
  1: '2px',
  2: '4px',
  4: '8px',
  6: '12px',
  8: '16px',
  10: '20px',
  12: '24px',
  16: '32px',
  20: '40px',
  24: '48px',
  32: '64px',
  64: '128px',
} as const;
