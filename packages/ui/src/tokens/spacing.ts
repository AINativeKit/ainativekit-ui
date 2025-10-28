/**
 * Spacing tokens for AI Native Kit
 * Complete spacing scale from design system
 * Matches the OpenAI Figma spacing definitions to stay aligned with design source
 *
 * @example
 * ```typescript
 * import { spacing } from '@ainativekit/ui';
 * const padding = spacing['space-16']; // '32px'
 * ```
 */

export const spacing = {
  'space-0': '0px',
  'space-1': '2px',
  'space-2': '4px',
  'space-4': '8px',
  'space-6': '12px',
  'space-8': '16px',
  'space-10': '20px',
  'space-12': '24px',
  'space-16': '32px',
  'space-20': '40px',
  'space-24': '48px',
  'space-32': '64px',
  'space-64': '128px',
} as const;

export type SpacingToken = keyof typeof spacing;
