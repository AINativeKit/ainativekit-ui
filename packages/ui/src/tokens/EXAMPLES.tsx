/**
 * Design Token Examples
 * Real-world examples demonstrating token usage with type safety
 */

import React from 'react';
import {
  spacing,
  colors,
  radius,
  typography,
  cssVar,
  applyTypography,
  applyElevation,
} from './token-helpers';

// =============================================================================
// Example 1: Button Component
// =============================================================================

/**
 * ❌ BEFORE: Hard-coded values, no type safety
 */
export function ButtonBefore({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: '8px 24px',
        backgroundColor: '#0285FF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '9999px',
        fontSize: '15px',
        fontWeight: 500,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

/**
 * ✅ AFTER: Type-safe tokens with autocomplete
 */
export function ButtonAfter({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: `${spacing[4]} ${spacing[12]}`,
        backgroundColor: colors.light.accent.blue,
        color: colors.light.text.inverted,
        border: 'none',
        borderRadius: radius.full,
        ...typography.button,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

// =============================================================================
// Example 2: Card Component (Theme-Aware)
// =============================================================================

/**
 * ❌ BEFORE: String-based CSS variables, typo-prone
 */
export function CardBefore({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 'var(--ai-spacing-16)', // Could typo
        backgroundColor: 'var(--ai-color-bg-primary)',
        borderRadius: 'var(--ai-radius-xl)',
        boxShadow: 'var(--ai-elevation-2)',
        gap: 'var(--ai-spacing-8)',
      }}
    >
      {children}
    </div>
  );
}

/**
 * ✅ AFTER: Type-safe CSS variables with autocomplete
 */
export function CardAfter({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: cssVar.spacing(16), // Autocomplete!
        backgroundColor: cssVar.color('bg-primary'),
        borderRadius: cssVar.radius('xl'),
        boxShadow: cssVar.elevation(2),
        gap: cssVar.spacing(8),
      }}
    >
      {children}
    </div>
  );
}

// =============================================================================
// Example 3: Typography Styles
// =============================================================================

/**
 * ❌ BEFORE: Manual font properties
 */
export function HeadingBefore({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        fontSize: '36px',
        lineHeight: '40px',
        fontWeight: 600,
        letterSpacing: '-0.1px',
        color: '#0D0D0D',
      }}
    >
      {children}
    </h1>
  );
}

/**
 * ✅ AFTER: Complete typography token
 */
export function HeadingAfter({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        ...typography.heading1,
        color: colors.light.text.primary,
      }}
    >
      {children}
    </h1>
  );
}

/**
 * ✅ ALTERNATIVE: Using helper function
 */
export function HeadingHelper({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        ...applyTypography('heading1'),
        color: colors.light.text.primary,
      }}
    >
      {children}
    </h1>
  );
}

/**
 * ✅ BEST FOR STATIC: Using utility class
 */
export function HeadingClass({ children }: { children: React.ReactNode }) {
  return <h1 className={typography.heading1.className}>{children}</h1>;
}

// =============================================================================
// Example 4: Product Card (Real-world Component)
// =============================================================================

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

/**
 * ❌ BEFORE: Mixed hard-coded values and magic numbers
 */
export function ProductCardBefore({
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '32px',
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        boxShadow: '0px 6px 24px rgba(0,0,0,0.08)',
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '26px',
          color: '#0D0D0D',
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          lineHeight: '18px',
          color: '#5D5D5D',
          margin: 0,
        }}
      >
        {description}
      </p>
      <div
        style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#0285FF',
        }}
      >
        {price}
      </div>
    </div>
  );
}

/**
 * ✅ AFTER: Type-safe tokens throughout
 */
export function ProductCardAfter({
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[8],
        padding: spacing[16],
        backgroundColor: colors.light.background.primary,
        borderRadius: radius.xl,
        ...applyElevation(2),
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: radius.base,
        }}
      />
      <h3
        style={{
          ...typography.heading3,
          color: colors.light.text.primary,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          ...typography.bodySmall,
          color: colors.light.text.secondary,
          margin: 0,
        }}
      >
        {description}
      </p>
      <div
        style={{
          ...typography.heading3,
          color: colors.light.accent.blue,
        }}
      >
        {price}
      </div>
    </div>
  );
}

/**
 * ✅ THEME-AWARE VERSION: Works in both light and dark themes
 */
export function ProductCardThemeAware({
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: cssVar.spacing(8),
        padding: cssVar.spacing(16),
        backgroundColor: cssVar.color('bg-primary'),
        borderRadius: cssVar.radius('xl'),
        boxShadow: cssVar.elevation(2),
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: cssVar.radius('base'),
        }}
      />
      <h3
        style={{
          ...cssVar.typography('heading3'),
          color: cssVar.color('text-primary'),
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          ...cssVar.typography('bodySmall'),
          color: cssVar.color('text-secondary'),
          margin: 0,
        }}
      >
        {description}
      </p>
      <div
        style={{
          ...cssVar.typography('heading3'),
          color: cssVar.color('accent-blue'),
        }}
      >
        {price}
      </div>
    </div>
  );
}

// =============================================================================
// Example 5: Alert Component with Variants
// =============================================================================

interface AlertProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

/**
 * ❌ BEFORE: Hard-coded variant colors
 */
export function AlertBefore({ variant, children }: AlertProps) {
  const variantColors = {
    info: '#0285FF',
    success: '#008635',
    warning: '#E25507',
    error: '#E02E2A',
  };

  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '12px',
        backgroundColor: '#F3F3F3',
        borderLeft: `4px solid ${variantColors[variant]}`,
        fontSize: '16px',
        lineHeight: '26px',
      }}
    >
      {children}
    </div>
  );
}

/**
 * ✅ AFTER: Using brand semantic colors
 */
export function AlertAfter({ variant, children }: AlertProps) {
  const variantColorMap = {
    info: colors.light.brand.info,
    success: colors.light.brand.success,
    warning: colors.light.brand.warning,
    error: colors.light.brand.error,
  };

  return (
    <div
      style={{
        padding: spacing[8],
        borderRadius: radius.base,
        backgroundColor: colors.light.background.tertiary,
        borderLeft: `${spacing[2]} solid ${variantColorMap[variant]}`,
        ...typography.body,
      }}
    >
      {children}
    </div>
  );
}

// =============================================================================
// Example 6: Form Input
// =============================================================================

interface InputProps {
  label: string;
  placeholder?: string;
  error?: string;
}

/**
 * ✅ COMPLETE EXAMPLE: Form input with tokens
 */
export function FormInput({ label, placeholder, error }: InputProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[2],
      }}
    >
      <label
        style={{
          ...typography.caption,
          color: colors.light.text.secondary,
        }}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          padding: `${spacing[4]} ${spacing[6]}`,
          borderRadius: radius.md,
          border: `${spacing[1]} solid ${colors.light.border.default}`,
          backgroundColor: colors.light.background.primary,
          color: colors.light.text.primary,
          ...typography.body,
          outline: 'none',
        }}
      />
      {error && (
        <span
          style={{
            ...typography.caption,
            color: colors.light.brand.error,
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

// =============================================================================
// Example 7: Navigation Bar
// =============================================================================

/**
 * ✅ REAL-WORLD EXAMPLE: Navigation with elevation and spacing
 */
export function NavigationBar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${spacing[6]} ${spacing[16]}`,
        backgroundColor: colors.light.background.primary,
        ...applyElevation(1),
      }}
    >
      <div
        style={{
          ...typography.heading3,
          color: colors.light.text.primary,
        }}
      >
        AI Native Kit
      </div>
      <div
        style={{
          display: 'flex',
          gap: spacing[8],
        }}
      >
        <button
          style={{
            padding: `${spacing[4]} ${spacing[8]}`,
            backgroundColor: 'transparent',
            color: colors.light.text.secondary,
            border: 'none',
            borderRadius: radius.md,
            ...typography.button,
            cursor: 'pointer',
          }}
        >
          Features
        </button>
        <button
          style={{
            padding: `${spacing[4]} ${spacing[8]}`,
            backgroundColor: colors.light.accent.blue,
            color: colors.light.text.inverted,
            border: 'none',
            borderRadius: radius.full,
            ...typography.button,
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

// =============================================================================
// Example 8: Loading Skeleton
// =============================================================================

/**
 * ✅ EXAMPLE: Skeleton with opacity and animation
 */
export function SkeletonCard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[8],
        padding: spacing[16],
        backgroundColor: colors.light.background.primary,
        borderRadius: radius.xl,
        ...applyElevation(1),
      }}
    >
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: colors.light.background.secondary,
          borderRadius: radius.base,
        }}
      />
      <div
        style={{
          width: '70%',
          height: spacing[12],
          backgroundColor: colors.light.background.secondary,
          borderRadius: radius.sm,
        }}
      />
      <div
        style={{
          width: '90%',
          height: spacing[8],
          backgroundColor: colors.light.background.secondary,
          borderRadius: radius.sm,
        }}
      />
    </div>
  );
}

// =============================================================================
// Summary
// =============================================================================

/**
 * Key Benefits:
 *
 * ✅ Type Safety: Catch typos at compile time
 * ✅ Autocomplete: IDE suggests valid values
 * ✅ Consistency: Use design system tokens everywhere
 * ✅ Maintainability: Update tokens in one place
 * ✅ Theme Support: Easy light/dark mode switching
 * ✅ Documentation: Built-in metadata and descriptions
 *
 * Choose your approach:
 * - Direct values (spacing[16]) for static themes
 * - CSS variables (cssVar.spacing(16)) for dynamic themes
 * - Utility classes (typography.heading1.className) for performance
 */
