/**
 * Typography tokens for AI Native Kit
 * Defines font sizes, line heights, and weights with embedded metadata
 *
 * @example
 * ```typescript
 * import { typography } from '@ainativekit/ui/tokens';
 * const h1Style = typography.heading1; // { fontSize: '36px', lineHeight: '40px', fontWeight: 600, className: 'ai-heading1', meta: {...} }
 * ```
 */

export const fontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const typography = {
  heading1: {
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 600,
    letterSpacing: '-0.1px',
    className: 'ai-heading1',
    meta: {
      description: 'Primary heading for page titles and hero sections',
      usage: 'Use for the main heading of a page or section. Should be used once per page.',
      a11y: 'Should map to semantic <h1> elements for proper document structure',
    },
  },
  heading2: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 600,
    letterSpacing: '-0.25px',
    className: 'ai-heading2',
    meta: {
      description: 'Secondary heading for major sections',
      usage: 'Use for section headings and subsections within a page',
      a11y: 'Should map to semantic <h2> elements',
    },
  },
  heading3: {
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 600,
    letterSpacing: '-0.45px',
    className: 'ai-heading3',
    meta: {
      description: 'Tertiary heading for subsections',
      usage: 'Use for subsection headings and card titles',
      a11y: 'Should map to semantic <h3> elements',
    },
  },
  body: {
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 400,
    letterSpacing: '-0.4px',
    className: 'ai-body',
    meta: {
      description: 'Default body text for main content',
      usage: 'Use for paragraphs, descriptions, and general content',
      a11y: 'Standard reading size optimized for readability',
    },
  },
  bodyEmph: {
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 600,
    letterSpacing: '-0.4px',
    className: 'ai-body-emph',
    meta: {
      description: 'Emphasized body text',
      usage: 'Use to emphasize key points within body text',
      a11y: 'Use <strong> or <b> for semantic emphasis',
    },
  },
  bodySmall: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 400,
    letterSpacing: '-0.3px',
    className: 'ai-body-small',
    meta: {
      description: 'Smaller body text for secondary information',
      usage: 'Use for supporting text, metadata, and less prominent content',
      a11y: 'Ensure text remains readable at this size',
    },
  },
  bodySmallEmph: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 600,
    letterSpacing: '-0.3px',
    className: 'ai-body-small-emph',
    meta: {
      description: 'Emphasized smaller body text',
      usage: 'Use for emphasized secondary information',
      a11y: 'Use <strong> or <b> for semantic emphasis',
    },
  },
  caption: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    letterSpacing: '-0.1px',
    className: 'ai-caption',
    meta: {
      description: 'Small text for captions and labels',
      usage: 'Use for image captions, input labels, and fine print',
      a11y: 'Minimum recommended size for readability',
    },
  },
  captionEmph: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
    letterSpacing: '-0.1px',
    className: 'ai-caption-emph',
    meta: {
      description: 'Emphasized caption text',
      usage: 'Use for emphasized labels and important captions',
      a11y: 'Ensure adequate contrast for accessibility',
    },
  },
  button: {
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: '-0.24px',
    className: 'ai-button',
    meta: {
      description: 'Button and interactive element text',
      usage: 'Use for buttons, links, and interactive controls',
      a11y: 'Size optimized for touch targets (min 44px height)',
    },
  },
  badge: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 600,
    letterSpacing: '0px',
    className: 'ai-badge',
    meta: {
      description: 'Badge and tag text',
      usage: 'Use for status badges, tags, and chips',
      a11y: 'Ensure badges have proper semantic meaning',
    },
  },
} as const;

export type TypographyToken = (typeof typography)[keyof typeof typography];
