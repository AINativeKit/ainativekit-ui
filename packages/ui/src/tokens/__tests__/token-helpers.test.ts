import { describe, it, expect } from 'vitest';
import {
  isValidHexColor,
  normalizeHexColor,
  hexToRgb,
  getRelativeLuminance,
  getContrastRatio,
  meetsWCAG,
  getContrastColor,
  validateContrast,
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
} from '../token-helpers';

describe('token-helpers color utilities', () => {
  describe('isValidHexColor', () => {
    it('should validate 3-digit hex colors', () => {
      expect(isValidHexColor('#FFF')).toBe(true);
      expect(isValidHexColor('#000')).toBe(true);
      expect(isValidHexColor('#F0A')).toBe(true);
      expect(isValidHexColor('FFF')).toBe(true); // Without #
    });

    it('should validate 6-digit hex colors', () => {
      expect(isValidHexColor('#FFFFFF')).toBe(true);
      expect(isValidHexColor('#000000')).toBe(true);
      expect(isValidHexColor('#0285FF')).toBe(true);
      expect(isValidHexColor('#6B46C1')).toBe(true);
      expect(isValidHexColor('FF5733')).toBe(true); // Without #
    });

    it('should validate 8-digit hex colors with alpha', () => {
      expect(isValidHexColor('#FFFFFFFF')).toBe(true);
      expect(isValidHexColor('#00000080')).toBe(true);
      expect(isValidHexColor('#0285FFAA')).toBe(true);
      expect(isValidHexColor('FF5733BB')).toBe(true); // Without #
    });

    it('should handle lowercase hex colors', () => {
      expect(isValidHexColor('#fff')).toBe(true);
      expect(isValidHexColor('#ffffff')).toBe(true);
      expect(isValidHexColor('#0285ff')).toBe(true);
      expect(isValidHexColor('#6b46c1')).toBe(true);
    });

    it('should handle mixed case hex colors', () => {
      expect(isValidHexColor('#FfF')).toBe(true);
      expect(isValidHexColor('#FfFfFf')).toBe(true);
      expect(isValidHexColor('#0285Ff')).toBe(true);
    });

    it('should reject invalid hex formats', () => {
      expect(isValidHexColor('not-a-color')).toBe(false);
      expect(isValidHexColor('rgb(255,0,0)')).toBe(false);
      expect(isValidHexColor('blue')).toBe(false);
      expect(isValidHexColor('')).toBe(false);
    });

    it('should reject invalid hex characters', () => {
      expect(isValidHexColor('#GGGGGG')).toBe(false);
      expect(isValidHexColor('#ZZZZZZ')).toBe(false);
      expect(isValidHexColor('#12345G')).toBe(false);
    });

    it('should reject invalid hex lengths', () => {
      expect(isValidHexColor('#FF')).toBe(false); // Too short
      expect(isValidHexColor('#FFFF')).toBe(false); // 4-digit not supported
      expect(isValidHexColor('#FFFFF')).toBe(false); // 5-digit not supported
      expect(isValidHexColor('#FFFFFFFFF')).toBe(false); // Too long
    });

    it('should handle edge cases', () => {
      expect(isValidHexColor('#')).toBe(false);
      expect(isValidHexColor('###')).toBe(false);
      expect(isValidHexColor('#123 456')).toBe(false); // Space
      expect(isValidHexColor('#123-456')).toBe(false); // Dash
    });
  });

  describe('normalizeHexColor', () => {
    it('should normalize 3-digit hex to 6-digit with #', () => {
      expect(normalizeHexColor('#FFF')).toBe('#FFFFFF');
      expect(normalizeHexColor('#000')).toBe('#000000');
      expect(normalizeHexColor('#F0A')).toBe('#FF00AA');
      expect(normalizeHexColor('#abc')).toBe('#AABBCC');
    });

    it('should normalize 3-digit hex without # to 6-digit with #', () => {
      expect(normalizeHexColor('FFF')).toBe('#FFFFFF');
      expect(normalizeHexColor('000')).toBe('#000000');
      expect(normalizeHexColor('F0A')).toBe('#FF00AA');
      expect(normalizeHexColor('abc')).toBe('#AABBCC');
    });

    it('should normalize 6-digit hex by adding # if missing', () => {
      expect(normalizeHexColor('#FFFFFF')).toBe('#FFFFFF');
      expect(normalizeHexColor('FFFFFF')).toBe('#FFFFFF');
      expect(normalizeHexColor('#0285FF')).toBe('#0285FF');
      expect(normalizeHexColor('FF5733')).toBe('#FF5733');
    });

    it('should uppercase lowercase hex colors', () => {
      expect(normalizeHexColor('#ffffff')).toBe('#FFFFFF');
      expect(normalizeHexColor('ff5733')).toBe('#FF5733');
      expect(normalizeHexColor('#abc')).toBe('#AABBCC');
      expect(normalizeHexColor('#0285ff')).toBe('#0285FF');
    });

    it('should preserve 8-digit hex with alpha channel', () => {
      expect(normalizeHexColor('#FFFFFF80')).toBe('#FFFFFF80');
      expect(normalizeHexColor('#FF5733AA')).toBe('#FF5733AA');
      expect(normalizeHexColor('FF5733BB')).toBe('#FF5733BB');
      expect(normalizeHexColor('#0285FFCC')).toBe('#0285FFCC');
    });

    it('should handle mixed case hex colors', () => {
      expect(normalizeHexColor('#FfFfFf')).toBe('#FFFFFF');
      expect(normalizeHexColor('#0285Ff')).toBe('#0285FF');
      expect(normalizeHexColor('Ff5733')).toBe('#FF5733');
    });

    it('should return null for invalid hex colors', () => {
      expect(normalizeHexColor('not-a-color')).toBe(null);
      expect(normalizeHexColor('rgb(255,0,0)')).toBe(null);
      expect(normalizeHexColor('blue')).toBe(null);
      expect(normalizeHexColor('')).toBe(null);
      expect(normalizeHexColor('#GGGGGG')).toBe(null);
      expect(normalizeHexColor('#FF')).toBe(null); // Too short
      expect(normalizeHexColor('#FFFF')).toBe(null); // 4-digit not supported
    });

    it('should handle edge cases', () => {
      expect(normalizeHexColor('#')).toBe(null);
      expect(normalizeHexColor('###')).toBe(null);
      expect(normalizeHexColor('#123 456')).toBe(null); // Space
      expect(normalizeHexColor('#123-456')).toBe(null); // Dash
    });

    it('should be idempotent for already normalized colors', () => {
      const normalized = normalizeHexColor('#FF5733');
      expect(normalizeHexColor(normalized!)).toBe('#FF5733');
    });
  });

  describe('hexToRgb', () => {
    it('should convert 6-digit hex to RGB', () => {
      expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#00FF00')).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('#0000FF')).toEqual({ r: 0, g: 0, b: 255 });
    });

    it('should convert 3-digit hex to RGB', () => {
      expect(hexToRgb('#F00')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#0F0')).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('#00F')).toEqual({ r: 0, g: 0, b: 255 });
    });

    it('should handle hex without hash prefix', () => {
      expect(hexToRgb('FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('00FF00')).toEqual({ r: 0, g: 255, b: 0 });
    });

    it('should handle lowercase hex', () => {
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    });

    it('should return null for invalid hex', () => {
      expect(hexToRgb('invalid')).toBeNull();
      expect(hexToRgb('#GGGGGG')).toBeNull();
      expect(hexToRgb('#12')).toBeNull();
    });

    it('should strip alpha channel from 8-digit hex', () => {
      expect(hexToRgb('#FF0000AA')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#00FF0080')).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('0000FFCC')).toEqual({ r: 0, g: 0, b: 255 });
    });
  });

  describe('getRelativeLuminance', () => {
    it('should calculate luminance for white', () => {
      const luminance = getRelativeLuminance(255, 255, 255);
      expect(luminance).toBeCloseTo(1, 5);
    });

    it('should calculate luminance for black', () => {
      const luminance = getRelativeLuminance(0, 0, 0);
      expect(luminance).toBeCloseTo(0, 5);
    });

    it('should calculate luminance for mid-gray', () => {
      const luminance = getRelativeLuminance(128, 128, 128);
      expect(luminance).toBeGreaterThan(0);
      expect(luminance).toBeLessThan(1);
    });

    it('should calculate luminance for pure red', () => {
      const luminance = getRelativeLuminance(255, 0, 0);
      expect(luminance).toBeGreaterThan(0);
      expect(luminance).toBeLessThan(1);
    });
  });

  describe('getContrastRatio', () => {
    it('should calculate contrast ratio between black and white', () => {
      const ratio = getContrastRatio('#000000', '#FFFFFF');
      expect(ratio).toBeCloseTo(21, 1);
    });

    it('should calculate contrast ratio between white and black', () => {
      const ratio = getContrastRatio('#FFFFFF', '#000000');
      expect(ratio).toBeCloseTo(21, 1);
    });

    it('should return 1 for identical colors', () => {
      const ratio = getContrastRatio('#FF0000', '#FF0000');
      expect(ratio).toBeCloseTo(1, 5);
    });

    it('should return null for invalid colors', () => {
      expect(getContrastRatio('invalid', '#FFFFFF')).toBeNull();
      expect(getContrastRatio('#000000', 'invalid')).toBeNull();
    });

    it('should calculate ratio for typical UI colors', () => {
      // OpenAI blue on white
      const ratio = getContrastRatio('#0285FF', '#FFFFFF');
      expect(ratio).toBeGreaterThan(3);
    });
  });

  describe('meetsWCAG', () => {
    it('should validate AA compliance for normal text', () => {
      expect(meetsWCAG(4.5, 'AA', 'normal')).toBe(true);
      expect(meetsWCAG(4.4, 'AA', 'normal')).toBe(false);
    });

    it('should validate AA compliance for large text', () => {
      expect(meetsWCAG(3.0, 'AA', 'large')).toBe(true);
      expect(meetsWCAG(2.9, 'AA', 'large')).toBe(false);
    });

    it('should validate AAA compliance for normal text', () => {
      expect(meetsWCAG(7.0, 'AAA', 'normal')).toBe(true);
      expect(meetsWCAG(6.9, 'AAA', 'normal')).toBe(false);
    });

    it('should validate AAA compliance for large text', () => {
      expect(meetsWCAG(4.5, 'AAA', 'large')).toBe(true);
      expect(meetsWCAG(4.4, 'AAA', 'large')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(meetsWCAG(21, 'AAA', 'normal')).toBe(true); // Max ratio
      expect(meetsWCAG(1, 'AA', 'normal')).toBe(false); // Min ratio
    });
  });

  describe('getContrastColor', () => {
    it('should return white for dark backgrounds', () => {
      expect(getContrastColor('#000000')).toBe('#ffffff');
      expect(getContrastColor('#0285FF')).toBe('#ffffff');
      expect(getContrastColor('#6B46C1')).toBe('#ffffff');
    });

    it('should return black for light backgrounds', () => {
      expect(getContrastColor('#FFFFFF')).toBe('#000000');
      expect(getContrastColor('#FFD700')).toBe('#000000'); // Gold
    });

    it('should handle mid-tone colors', () => {
      const result = getContrastColor('#808080'); // Gray
      expect(result).toMatch(/^#(ffffff|000000)$/);
    });

    it('should return white for invalid colors (fallback)', () => {
      expect(getContrastColor('invalid')).toBe('#ffffff');
    });
  });

  describe('validateContrast', () => {
    it('should validate high contrast colors as AAA', () => {
      const result = validateContrast('#000000', '#FFFFFF');
      expect(result.valid).toBe(true);
      expect(result.level).toBe('AAA');
      expect(result.ratio).toBeCloseTo(21, 1);
    });

    it('should validate medium contrast colors as AA or better', () => {
      // Use a darker blue that meets AA threshold (4.5+)
      const result = validateContrast('#005A9C', '#FFFFFF');
      expect(result.valid).toBe(true);
      // Could be 'AA' or 'AAA' depending on exact ratio
      expect(['AA', 'AAA']).toContain(result.level);
      expect(result.ratio).not.toBeNull();
      expect(result.ratio).toBeGreaterThanOrEqual(4.5);
    });

    it('should fail validation for low contrast', () => {
      const result = validateContrast('#AAAAAA', '#BBBBBB');
      expect(result.valid).toBe(false);
      expect(result.level).toBe('fail');
    });

    it('should handle invalid colors', () => {
      const result = validateContrast('invalid', '#FFFFFF');
      expect(result.valid).toBe(false);
      expect(result.level).toBe('fail');
      expect(result.ratio).toBeNull();
    });

    it('should validate brand colors against white background', () => {
      // Test colors that meet WCAG AA (4.5+) against white
      const colors = ['#005A9C', '#007744', '#996600', '#CC0000'];

      colors.forEach((color) => {
        const result = validateContrast(color, '#FFFFFF');
        expect(result.valid).toBe(true);
        expect(result.ratio).toBeGreaterThanOrEqual(4.5);
      });
    });
  });

  describe('integration - brand color validation', () => {
    it('should validate typical brand primary colors', () => {
      // These brand colors may not all meet WCAG AA, but should have reasonable contrast
      const brandColors = [
        '#0285FF', // OpenAI blue - ratio ~3.6
        '#6B46C1', // Purple - ratio ~4.6 (passes AA)
        '#D32F2F', // Red - ratio ~4.4
        '#007BFF', // Bootstrap blue - ratio ~3.4
      ];

      brandColors.forEach((color) => {
        const whiteContrast = validateContrast(color, '#FFFFFF');
        // All should have ratio > 3, though not all meet AA (4.5+)
        expect(whiteContrast.ratio).toBeGreaterThan(3);
      });
    });

    it('should ensure proper contrast color selection', () => {
      const testCases = [
        { bg: '#0285FF', expected: '#ffffff' }, // Blue -> white text
        { bg: '#FFFFFF', expected: '#000000' }, // White -> black text
        { bg: '#6B46C1', expected: '#ffffff' }, // Purple -> white text
        { bg: '#FFD700', expected: '#000000' }, // Gold -> black text
      ];

      testCases.forEach(({ bg, expected }) => {
        const result = getContrastColor(bg);
        expect(result).toBe(expected);
      });
    });

    it('should validate that contrast ratios are symmetric', () => {
      const color1 = '#0285FF';
      const color2 = '#FFFFFF';

      const ratio1 = getContrastRatio(color1, color2);
      const ratio2 = getContrastRatio(color2, color1);

      expect(ratio1).toBeCloseTo(ratio2!, 5);
    });
  });

  // General token helper tests
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
      expect(colors.light.brand.primary.base).toBe('#0285FF');
      expect(colors.light.brand.success.base).toBe('#008635');
      expect(colors.light.brand.error.base).toBe('#E02E2A');
      expect(colors.light.brand.warning.base).toBe('#E25507');
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
        color: cssVar.color('text-primary'),
        marginBottom: spacing[16],
      };

      expect(headerStyle.fontSize).toBe('36px');
      expect(headerStyle.color).toBe('var(--ai-color-text-primary)');
      expect(headerStyle.marginBottom).toBe('32px');
    });
  });
});
