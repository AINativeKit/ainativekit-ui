import { describe, it, expect } from 'vitest';
import {
  spacing,
  colors,
  radius,
  typography,
  elevation,
  opacity,
  defaultElevation,
  defaultRadius,
  cssVar,
  customVar,
  varWithFallback,
  applyTypography,
  applyElevation,
  type ElevationLevel,
} from './token-helpers';

describe('Token Helpers', () => {
  describe('spacing', () => {
    it('should return correct pixel values for spacing scale', () => {
      expect(spacing[0]).toBe('0px');
      expect(spacing[8]).toBe('16px');
      expect(spacing[16]).toBe('32px');
      expect(spacing[64]).toBe('128px');
    });

    it('should provide all spacing values', () => {
      const scales = [0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 64];
      scales.forEach((scale) => {
        expect(spacing[scale as keyof typeof spacing]).toBeDefined();
        expect(typeof spacing[scale as keyof typeof spacing]).toBe('string');
      });
    });
  });

  describe('colors', () => {
    it('should provide light theme colors', () => {
      expect(colors.light.background.primary).toBe('#FFFFFF');
      expect(colors.light.text.primary).toBe('#0D0D0D');
      expect(colors.light.accent.blue).toBe('#0285FF');
    });

    it('should provide dark theme colors', () => {
      expect(colors.dark.background.primary).toBe('#212121');
      expect(colors.dark.text.primary).toBe('#FFFFFF');
      expect(colors.dark.accent.blue).toBe('#0285FF');
    });

    it('should provide brand semantic colors', () => {
      expect(colors.light.brand.primary).toBe('#0285FF');
      expect(colors.light.brand.success).toBe('#008635');
      expect(colors.light.brand.error).toBe('#E02E2A');
      expect(colors.light.brand.warning).toBe('#E25507');
    });

    it('should provide state colors', () => {
      expect(colors.light.state.hover.background).toBeDefined();
      expect(colors.light.state.hover.opacity).toBe(0.9);
      expect(colors.light.state.disabled.opacity).toBe(0.4);
    });
  });

  describe('radius', () => {
    it('should return correct radius values', () => {
      expect(radius.none).toBe('0px');
      expect(radius.sm).toBe('4px');
      expect(radius.xl).toBe('24px');
      expect(radius.full).toBe('9999px');
    });
  });

  describe('typography', () => {
    it('should provide heading styles', () => {
      expect(typography.heading1.fontSize).toBe('36px');
      expect(typography.heading1.lineHeight).toBe('40px');
      expect(typography.heading1.fontWeight).toBe(600);
    });

    it('should provide body styles', () => {
      expect(typography.body.fontSize).toBe('16px');
      expect(typography.bodySmall.fontSize).toBe('14px');
    });

    it('should include metadata', () => {
      expect(typography.heading1.meta).toBeDefined();
      expect(typography.heading1.meta.description).toBeDefined();
      expect(typography.heading1.meta.usage).toBeDefined();
    });

    it('should provide className for each style', () => {
      expect(typography.heading1.className).toBe('ai-heading1');
      expect(typography.body.className).toBe('ai-body');
      expect(typography.button.className).toBe('ai-button');
    });
  });

  describe('elevation', () => {
    it('should provide elevation levels 0-5', () => {
      expect(elevation[0].shadow).toBe('none');
      expect(elevation[1].shadow).toContain('0px 4px 16px');
      expect(elevation[5].shadow).toContain('0px 16px 48px');
    });

    it('should provide overlay colors for light and dark themes', () => {
      expect(elevation[1].lightOverlay).toBeDefined();
      expect(elevation[1].darkOverlay).toBeDefined();
    });

    it('should include className for each level', () => {
      expect(elevation[1].className).toBe('ai-elevation-1');
      expect(elevation[3].className).toBe('ai-elevation-3');
    });
  });

  describe('opacity', () => {
    it('should provide opacity presets', () => {
      expect(opacity.full).toBe(1);
      expect(opacity.subtle).toBe(0.7);
      expect(opacity.muted).toBe(0.5);
      expect(opacity.disabled).toBe(0.3);
    });
  });

  describe('cssVar', () => {
    describe('spacing', () => {
      it('should generate correct CSS variable for spacing', () => {
        expect(cssVar.spacing(0)).toBe('var(--ai-spacing-0)');
        expect(cssVar.spacing(8)).toBe('var(--ai-spacing-8)');
        expect(cssVar.spacing(16)).toBe('var(--ai-spacing-16)');
      });
    });

    describe('color', () => {
      it('should generate correct CSS variable for colors', () => {
        expect(cssVar.color('text-primary')).toBe('var(--ai-color-text-primary)');
        expect(cssVar.color('bg-secondary')).toBe('var(--ai-color-bg-secondary)');
        expect(cssVar.color('accent-blue')).toBe('var(--ai-color-accent-blue)');
      });
    });

    describe('radius', () => {
      it('should generate correct CSS variable for radius', () => {
        expect(cssVar.radius('none')).toBe('var(--ai-radius-none)');
        expect(cssVar.radius('sm')).toBe('var(--ai-radius-sm)');
        expect(cssVar.radius('xl')).toBe('var(--ai-radius-xl)');
        expect(cssVar.radius('full')).toBe('var(--ai-radius-full)');
      });
    });

    describe('typography', () => {
      it('should generate CSS variables for typography styles', () => {
        const heading1Vars = cssVar.typography('heading1');
        expect(heading1Vars.fontSize).toBe('var(--ai-font-size-h1)');
        expect(heading1Vars.lineHeight).toBe('var(--ai-line-height-h1)');
        expect(heading1Vars.fontWeight).toBe('var(--ai-font-weight-h1)');
        expect(heading1Vars.letterSpacing).toBe('var(--ai-letter-spacing-h1)');
      });

      it('should handle all typography styles', () => {
        const bodyVars = cssVar.typography('body');
        expect(bodyVars.fontSize).toBe('var(--ai-font-size-body)');

        const buttonVars = cssVar.typography('button');
        expect(buttonVars.fontSize).toBe('var(--ai-font-size-button)');
      });
    });

    describe('elevation', () => {
      it('should generate correct CSS variable for elevation', () => {
        expect(cssVar.elevation(0)).toBe('var(--ai-elevation-0)');
        expect(cssVar.elevation(2)).toBe('var(--ai-elevation-2)');
        expect(cssVar.elevation(5)).toBe('var(--ai-elevation-5)');
      });
    });

    describe('opacity', () => {
      it('should generate correct CSS variable for opacity', () => {
        expect(cssVar.opacity('full')).toBe('var(--ai-opacity-full)');
        expect(cssVar.opacity('subtle')).toBe('var(--ai-opacity-subtle)');
        expect(cssVar.opacity('disabled')).toBe('var(--ai-opacity-disabled)');
      });
    });
  });

  describe('customVar', () => {
    it('should generate custom CSS variable reference', () => {
      expect(customVar('my-color')).toBe('var(--my-color)');
      expect(customVar('custom-spacing')).toBe('var(--custom-spacing)');
    });
  });

  describe('varWithFallback', () => {
    it('should generate CSS variable with fallback', () => {
      expect(varWithFallback('ai-spacing-16', '32px')).toBe('var(--ai-spacing-16, 32px)');
      expect(varWithFallback('my-color', '#FF0000')).toBe('var(--my-color, #FF0000)');
    });
  });

  describe('applyTypography', () => {
    it('should return inline style object for typography', () => {
      const heading1Style = applyTypography('heading1');
      expect(heading1Style).toEqual({
        fontSize: '36px',
        lineHeight: '40px',
        fontWeight: 600,
        letterSpacing: '-0.1px',
      });
    });

    it('should work for all typography styles', () => {
      const bodyStyle = applyTypography('body');
      expect(bodyStyle.fontSize).toBe('16px');

      const captionStyle = applyTypography('caption');
      expect(captionStyle.fontSize).toBe('12px');
    });
  });

  describe('applyElevation', () => {
    it('should return inline style object for elevation', () => {
      const elevation2 = applyElevation(2);
      expect(elevation2).toHaveProperty('boxShadow');
      expect(elevation2.boxShadow).toContain('0px 6px 24px');
    });

    it('should handle level 0 (no shadow)', () => {
      const elevation0 = applyElevation(0);
      expect(elevation0.boxShadow).toBe('none');
    });

    it('should work for all elevation levels', () => {
      [0, 1, 2, 3, 4, 5].forEach((level) => {
        const style = applyElevation(level as 0 | 1 | 2 | 3 | 4 | 5);
        expect(style).toHaveProperty('boxShadow');
      });
    });
  });

  describe('Type Safety', () => {
    it('should provide autocomplete-friendly types', () => {
      // These tests verify that TypeScript can infer types correctly
      // The compilation itself is the test - if this compiles, types work

      const spacingValue: string = spacing[16];
      expect(spacingValue).toBeDefined();

      const colorValue: string = colors.light.text.primary;
      expect(colorValue).toBeDefined();

      const radiusValue: string = radius.xl;
      expect(radiusValue).toBeDefined();
    });
  });

  describe('Default Values', () => {
    it('defaultElevation should be compatible with ElevationLevel type', () => {
      // This test verifies the type consistency fix
      const level: ElevationLevel = defaultElevation;
      expect(level).toBe(1);
      expect(elevation[defaultElevation]).toBeDefined();
      expect(elevation[defaultElevation].shadow).toBeDefined();
    });

    it('defaultRadius should return a pixel value', () => {
      expect(defaultRadius).toBe('24px');
      expect(defaultRadius).toBe(radius.xl);
    });

    it('should work with cssVar helpers', () => {
      // Verify defaultElevation works with CSS variable helpers
      const elevationVar = cssVar.elevation(defaultElevation);
      expect(elevationVar).toBe('var(--ai-elevation-1)');
    });

    it('should work with applyElevation helper', () => {
      const style = applyElevation(defaultElevation);
      expect(style.boxShadow).toContain('0px 4px 16px');
    });
  });

  describe('Integration Examples', () => {
    it('should work in realistic component style scenarios', () => {
      // Example 1: Direct value usage
      const buttonStyle = {
        padding: `${spacing[4]} ${spacing[12]}`,
        borderRadius: radius.full,
        backgroundColor: colors.light.accent.blue,
        color: colors.light.text.inverted,
        ...applyTypography('button'),
      };

      expect(buttonStyle.padding).toBe('8px 24px');
      expect(buttonStyle.borderRadius).toBe('9999px');
      expect(buttonStyle.fontSize).toBe('15px');

      // Example 2: CSS variable usage (theme-aware)
      const cardStyle = {
        gap: cssVar.spacing(8),
        padding: cssVar.spacing(16),
        borderRadius: cssVar.radius('xl'),
        boxShadow: cssVar.elevation(2),
      };

      expect(cardStyle.gap).toBe('var(--ai-spacing-8)');
      expect(cardStyle.padding).toBe('var(--ai-spacing-16)');
      expect(cardStyle.borderRadius).toBe('var(--ai-radius-xl)');
      expect(cardStyle.boxShadow).toBe('var(--ai-elevation-2)');

      // Example 3: Mixed usage
      const headerStyle = {
        ...applyTypography('heading1'),
        color: cssVar.color('text-primary'), // Theme-aware
        marginBottom: spacing[16], // Direct value
      };

      expect(headerStyle.fontSize).toBe('36px');
      expect(headerStyle.color).toBe('var(--ai-color-text-primary)');
      expect(headerStyle.marginBottom).toBe('32px');
    });
  });
});
