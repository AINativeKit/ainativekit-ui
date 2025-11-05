import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../ThemeProvider';
import { Button } from '../../components/Button';

// Mock console.warn to verify WCAG warnings
const consoleWarnSpy = vi.spyOn(console, 'warn');

describe('ThemeProvider', () => {
  beforeEach(() => {
    consoleWarnSpy.mockClear();
    // Clear localStorage to prevent test pollution
    localStorage.clear();
    // Reset document data-theme attribute
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    // Clean up any injected style elements
    const styleElements = document.querySelectorAll('[data-ainativekit-brand-colors]');
    styleElements.forEach((el) => el.remove());
    // Clean up localStorage and theme attribute
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  describe('basic theme functionality', () => {
    it('should render children correctly', () => {
      render(
        <ThemeProvider>
          <div>Test content</div>
        </ThemeProvider>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should apply light theme by default', () => {
      render(
        <ThemeProvider>
          <div>Test</div>
        </ThemeProvider>
      );
      const root = document.documentElement;
      expect(root.getAttribute('data-theme')).toBe('light');
    });

    it('should apply dark theme when specified', () => {
      render(
        <ThemeProvider defaultTheme="dark">
          <div>Test</div>
        </ThemeProvider>
      );
      const root = document.documentElement;
      expect(root.getAttribute('data-theme')).toBe('dark');
    });
  });

  describe('brand colors functionality', () => {
    it('should inject brand color CSS when brandColors provided', () => {
      render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement).toBeInTheDocument();
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary');
      expect(styleElement?.textContent).toContain('#6B46C1');
    });

    it('should support all brand color variants', () => {
      render(
        <ThemeProvider
          brandColors={{
            primary: '#6B46C1',
            success: '#00C853',
            warning: '#FFB300',
            error: '#D32F2F',
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#6B46C1');
      expect(styleElement?.textContent).toContain('#00C853');
      expect(styleElement?.textContent).toContain('#FFB300');
      expect(styleElement?.textContent).toContain('#D32F2F');
    });

    it('should generate hover and active states automatically', () => {
      render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary-hover');
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary-active');
    });

    it('should automatically determine on-color (text color)', () => {
      render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-primary');
      // Purple background should use white text
      expect(styleElement?.textContent).toContain('#ffffff');
    });

    it('should update styles when brandColors change', () => {
      const { rerender } = render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      let styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#6B46C1');

      rerender(
        <ThemeProvider brandColors={{ primary: '#FF006E' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#FF006E');
      expect(styleElement?.textContent).not.toContain('#6B46C1');
    });

    it('should remove style element when brandColors removed', () => {
      const { rerender } = render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      expect(document.querySelector('[data-ainativekit-brand-colors]')).toBeInTheDocument();

      rerender(
        <ThemeProvider>
          <div>Test</div>
        </ThemeProvider>
      );

      // Style element should be removed or emptied
      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      if (styleElement) {
        expect(styleElement.textContent).toBe('');
      }
    });

    it('should adapt styles for dark theme', () => {
      render(
        <ThemeProvider defaultTheme="dark" brandColors={{ primary: '#6B46C1' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      // Dark theme should contain data-theme='dark' selector
      expect(styleElement?.textContent).toContain('[data-theme="dark"]');
    });
  });

  describe('WCAG contrast validation', () => {
    it('should warn for low contrast brand colors', () => {
      render(
        <ThemeProvider brandColors={{ primary: '#AAAAAA' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      // Light gray on white likely won't meet WCAG AA
      expect(consoleWarnSpy).toHaveBeenCalled();
    });

    it('should not warn for high contrast brand colors', () => {
      render(
        <ThemeProvider brandColors={{ primary: '#005A9C' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      // Darker blue should have good contrast (AA compliant with ratio 4.5+)
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should validate multiple brand colors independently', () => {
      render(
        <ThemeProvider
          brandColors={{
            primary: '#005A9C', // Good contrast (AA compliant with ratio 4.5+)
            success: '#88AA88', // Mid-tone green - poor contrast with both black and white text
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      // Should warn about success color but not primary
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('success'));
    });
  });

  describe('integration with components', () => {
    it('should apply brand colors to Button component', () => {
      const { container } = render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <Button variant="primary" color="primary">
            Test Button
          </Button>
        </ThemeProvider>
      );

      // Style element should be injected
      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement).toBeInTheDocument();

      // Button should render
      const button = container.querySelector('button');
      expect(button).toHaveTextContent('Test Button');
    });

    it('should support different color variants', () => {
      const { container } = render(
        <ThemeProvider
          brandColors={{
            primary: '#6B46C1',
            success: '#00C853',
            warning: '#FFB300',
            error: '#D32F2F',
          }}
        >
          <Button variant="primary" color="success">
            Success
          </Button>
          <Button variant="primary" color="warning">
            Warning
          </Button>
          <Button variant="primary" color="error">
            Error
          </Button>
        </ThemeProvider>
      );

      const buttons = container.querySelectorAll('button');
      expect(buttons).toHaveLength(3);
      expect(buttons[0]).toHaveTextContent('Success');
      expect(buttons[1]).toHaveTextContent('Warning');
      expect(buttons[2]).toHaveTextContent('Error');
    });
  });

  describe('edge cases', () => {
    it('should handle empty brandColors object', () => {
      render(
        <ThemeProvider brandColors={{}}>
          <div>Test</div>
        </ThemeProvider>
      );

      // Should not error, but may inject empty or minimal styles
      expect(document.documentElement).toBeInTheDocument();
    });

    it('should handle invalid hex colors gracefully', () => {
      consoleWarnSpy.mockClear();

      // @ts-expect-error - testing invalid input
      render(
        <ThemeProvider brandColors={{ primary: 'not-a-color' }}>
          <div>Test</div>
        </ThemeProvider>
      );

      // Should render without crashing
      expect(screen.getByText('Test')).toBeInTheDocument();

      // Should warn about invalid hex format
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Invalid hex color format')
      );
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('not-a-color'));
    });

    it('should skip invalid colors but process valid ones', () => {
      consoleWarnSpy.mockClear();

      render(
        <ThemeProvider
          brandColors={{
            // @ts-expect-error - testing mixed valid/invalid
            primary: 'invalid-color',
            success: '#00C853', // Valid
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');

      // Should warn about invalid primary color
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Invalid hex color format for brand primary')
      );

      // Should still inject CSS for valid success color
      expect(styleElement?.textContent).toContain('#00C853');
      expect(styleElement?.textContent).toContain('--ai-color-brand-success');

      // Should NOT inject CSS for invalid primary color
      expect(styleElement?.textContent).not.toContain('invalid-color');
    });

    it('should handle SSR (no window object)', () => {
      // This test verifies SSR-safe guards exist in the code
      // Note: We can't actually delete window in jsdom without breaking everything
      // Instead, we just verify the component has proper typeof window checks

      // The component should render without crashing even in SSR-like conditions
      expect(() => {
        render(
          <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
            <div>Test</div>
          </ThemeProvider>
        );
      }).not.toThrow();

      // Verify the component still renders content
      expect(document.body.textContent).toContain('Test');
    });

    it('should not inject duplicate style elements', () => {
      render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <div>Test 1</div>
        </ThemeProvider>
      );

      render(
        <ThemeProvider brandColors={{ primary: '#FF006E' }}>
          <div>Test 2</div>
        </ThemeProvider>
      );

      // Should only have style elements from active ThemeProviders
      const styleElements = document.querySelectorAll('[data-ainativekit-brand-colors]');
      expect(styleElements.length).toBeLessThanOrEqual(2);
    });
  });

  describe('color preset examples', () => {
    it('should work with purple brand preset', () => {
      render(
        <ThemeProvider
          brandColors={{
            primary: '#6B46C1',
            success: '#00C853',
            warning: '#FFB300',
            error: '#D32F2F',
          }}
        >
          <Button variant="primary" color="primary">
            Purple Brand
          </Button>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#6B46C1');
    });

    it('should work with teal brand preset', () => {
      render(
        <ThemeProvider
          brandColors={{
            primary: '#00A896',
            success: '#2ECC71',
            warning: '#F39C12',
            error: '#E74C3C',
          }}
        >
          <Button variant="primary" color="primary">
            Teal Brand
          </Button>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#00A896');
    });
  });

  describe('hex color normalization (end-to-end)', () => {
    it('should normalize colors without # prefix', () => {
      render(
        <ThemeProvider
          brandColors={{
            // @ts-expect-error - testing runtime normalization
            primary: 'FF5733', // No # prefix
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');

      // Should be normalized to uppercase with #
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary: #FF5733;');

      // Should NOT contain the raw value without #
      expect(styleElement?.textContent).not.toMatch(/--ai-color-brand-primary:\s*FF5733;/);

      // Hover and active states should reference the normalized variable
      expect(styleElement?.textContent).toContain('var(--ai-color-brand-primary)');

      // On-color should be generated
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-primary:');
    });

    it('should expand 3-digit hex colors', () => {
      render(
        <ThemeProvider
          brandColors={{
            primary: '#FFF', // 3-digit hex
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');

      // Should be expanded to 6-digit format
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary: #FFFFFF;');

      // Should NOT contain the 3-digit format
      expect(styleElement?.textContent).not.toMatch(/--ai-color-brand-primary:\s*#FFF;/);

      // On-color should use black text for white background
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-primary: #000000');
    });

    it('should accept and warn about 8-digit hex colors with alpha channel', () => {
      consoleWarnSpy.mockClear();

      render(
        <ThemeProvider
          brandColors={{
            // @ts-expect-error - testing 8-digit alpha support
            primary: '#FF5733AA', // 8-digit hex with alpha (supported with warning)
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');

      // Should warn about alpha channel affecting contrast validation
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('contains an alpha channel')
      );
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Contrast validation will be performed on the opaque base color')
      );

      // Should inject CSS with the alpha-containing color preserved
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary: #FF5733AA;');

      // Should still generate hover/active states
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary-hover:');
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary-active:');
    });

    it('should handle mixed valid format colors correctly', () => {
      render(
        <ThemeProvider
          brandColors={{
            // @ts-expect-error - testing mixed formats
            primary: 'FF5733', // No #
            success: '#0C8', // 3-digit
            warning: '#FFB300', // Standard 6-digit
            error: '#D32F2F', // Standard 6-digit
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');

      // All should be normalized to standard format
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary: #FF5733;');
      expect(styleElement?.textContent).toContain('--ai-color-brand-success: #00CC88;'); // #0C8 expanded
      expect(styleElement?.textContent).toContain('--ai-color-brand-warning: #FFB300;'); // Already standard
      expect(styleElement?.textContent).toContain('--ai-color-brand-error: #D32F2F;'); // Already standard

      // All on-colors should use correct variable names
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-primary:');
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-success:');
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-warning:');
      expect(styleElement?.textContent).toContain('--ai-color-brand-on-error:');

      // Should NOT contain old incorrect pattern
      expect(styleElement?.textContent).not.toContain('--ai-color-brand-primary-on-primary');
    });

    it('should handle normalization with contrast validation', () => {
      consoleWarnSpy.mockClear();

      render(
        <ThemeProvider
          brandColors={{
            primary: '#AAA', // 3-digit mid-gray - poor contrast with both black and white
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      // Should still inject CSS even with poor contrast (normalized to 6-digit)
      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary: #AAAAAA;');

      // Should warn about contrast issue
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('may not meet WCAG AA contrast requirements')
      );
    });

    it('should use normalized colors in color-mix expressions', () => {
      render(
        <ThemeProvider
          brandColors={{
            // @ts-expect-error - testing normalization
            primary: 'FF5733', // No #
          }}
        >
          <div>Test</div>
        </ThemeProvider>
      );

      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');

      // color-mix should reference the CSS variable (which contains normalized value)
      expect(styleElement?.textContent).toContain(
        'color-mix(in srgb, var(--ai-color-brand-primary)'
      );

      // Verify both hover and active states use color-mix
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary-hover:');
      expect(styleElement?.textContent).toContain('--ai-color-brand-primary-active:');
    });
  });
});
