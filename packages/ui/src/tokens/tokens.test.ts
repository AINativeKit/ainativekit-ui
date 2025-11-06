import { describe, it, expect } from 'vitest';
import { colors, typography, spacing, radius, elevation, tokens, opacity } from './index';

describe('Design Tokens', () => {
  describe('Colors', () => {
    describe('Light Theme', () => {
      it('should have correct background colors', () => {
        expect(colors.light.background.primary).toBe('#FFFFFF');
        expect(colors.light.background.secondary).toBe('#E8E8E8');
        expect(colors.light.background.tertiary).toBe('#F3F3F3');
      });

      it('should have correct text colors', () => {
        expect(colors.light.text.primary).toBe('#0D0D0D');
        expect(colors.light.text.secondary).toBe('#5D5D5D');
        expect(colors.light.text.tertiary).toBe('#8F8F8F');
        expect(colors.light.text.inverted).toBe('#1B1B1F');
      });

      it('should have correct icon colors', () => {
        expect(colors.light.icon.primary).toBe('#0D0D0D');
        expect(colors.light.icon.secondary).toBe('#5D5D5D');
        expect(colors.light.icon.tertiary).toBe('#8F8F8F');
        expect(colors.light.icon.inverted).toBe('#1B1B1F');
      });

      it('should have correct accent colors', () => {
        expect(colors.light.accent.blue).toBe('#0285FF');
        expect(colors.light.accent.red).toBe('#E02E2A');
        expect(colors.light.accent.orange).toBe('#E25507');
        expect(colors.light.accent.green).toBe('#008635');
      });

      it('should have outline color', () => {
        expect(colors.light.outline).toBe('#79747E');
      });

      it('should have border colors', () => {
        expect(colors.light.border.light).toBe('rgba(13, 13, 13, 0.05)');
        expect(colors.light.border.default).toBe('rgba(13, 13, 13, 0.10)');
        expect(colors.light.border.heavy).toBe('rgba(13, 13, 13, 0.15)');
      });

      it('should have interactive state tokens', () => {
        expect(colors.light.state.hover.background).toBe('rgba(13, 13, 13, 0.08)');
        expect(colors.light.state.hover.opacity).toBe(0.9);
        expect(colors.light.state.active.opacity).toBe(1);
        expect(colors.light.state.active.scale).toBe(0.98);
        expect(colors.light.state.disabled.opacity).toBe(0.4);
        expect(colors.light.state.focus.outline).toBe('#0285FF');
        expect(colors.light.state.focus.offset).toBe('2px');
      });
    });

    describe('Dark Theme', () => {
      it('should have correct background colors', () => {
        expect(colors.dark.background.primary).toBe('#212121');
        expect(colors.dark.background.secondary).toBe('#303030');
        expect(colors.dark.background.tertiary).toBe('#414141');
      });

      it('should have correct text colors', () => {
        expect(colors.dark.text.primary).toBe('#FFFFFF');
        expect(colors.dark.text.secondary).toBe('#CDCDCD');
        expect(colors.dark.text.tertiary).toBe('#AFAFAF');
        expect(colors.dark.text.inverted).toBe('#FFFFFF');
      });

      it('should have correct icon colors', () => {
        expect(colors.dark.icon.primary).toBe('#FFFFFF');
        expect(colors.dark.icon.secondary).toBe('#CDCDCD');
        expect(colors.dark.icon.tertiary).toBe('#AFAFAF');
        expect(colors.dark.icon.inverted).toBe('#FFFFFF');
      });

      it('should have correct accent colors', () => {
        expect(colors.dark.accent.blue).toBe('#0285FF');
        expect(colors.dark.accent.red).toBe('#FF8583');
        expect(colors.dark.accent.orange).toBe('#FF9E6C');
        expect(colors.dark.accent.green).toBe('#40C977');
      });

      it('should have outline color', () => {
        expect(colors.dark.outline).toBe('#938F99');
      });

      it('should have border colors', () => {
        expect(colors.dark.border.light).toBe('rgba(255, 255, 255, 0.08)');
        expect(colors.dark.border.default).toBe('rgba(255, 255, 255, 0.12)');
        expect(colors.dark.border.heavy).toBe('rgba(255, 255, 255, 0.16)');
      });

      it('should have interactive state tokens', () => {
        expect(colors.dark.state.hover.background).toBe('rgba(255, 255, 255, 0.08)');
        expect(colors.dark.state.hover.opacity).toBe(0.9);
        expect(colors.dark.state.active.opacity).toBe(1);
        expect(colors.dark.state.active.scale).toBe(0.98);
        expect(colors.dark.state.disabled.opacity).toBe(0.4);
        expect(colors.dark.state.focus.outline).toBe('#0285FF');
        expect(colors.dark.state.focus.offset).toBe('2px');
      });
    });

    it('should have correct color token count per theme (including brand colors)', () => {
      // Count nested brand color objects (primary, success, warning, error)
      const brandColorCount = Object.keys(colors.light.brand).length; // 4 brand colors (primary, success, warning, error)

      const lightTokenCount =
        Object.keys(colors.light.background).length +
        Object.keys(colors.light.text).length +
        Object.keys(colors.light.icon).length +
        Object.keys(colors.light.accent).length +
        brandColorCount +
        Object.keys(colors.light.border).length +
        1; // outline
      expect(lightTokenCount).toBe(23); // 19 base + 4 brand color objects

      const darkTokenCount =
        Object.keys(colors.dark.background).length +
        Object.keys(colors.dark.text).length +
        Object.keys(colors.dark.icon).length +
        Object.keys(colors.dark.accent).length +
        brandColorCount +
        Object.keys(colors.dark.border).length +
        1; // outline
      expect(darkTokenCount).toBe(23); // 19 base + 4 brand color objects
    });

    it('should have brand color objects with state variants', () => {
      // Light theme - verify nested structure with base, hover, active, onColor
      expect(colors.light.brand.primary.base).toBe('#0285FF');
      expect(colors.light.brand.primary.hover).toBeDefined();
      expect(colors.light.brand.primary.active).toBeDefined();
      expect(colors.light.brand.primary.onColor).toBe('#FFFFFF');

      expect(colors.light.brand.success.base).toBe('#008635');
      expect(colors.light.brand.success.hover).toBeDefined();
      expect(colors.light.brand.success.active).toBeDefined();
      expect(colors.light.brand.success.onColor).toBe('#FFFFFF');

      expect(colors.light.brand.warning.base).toBe('#E25507');
      expect(colors.light.brand.warning.hover).toBeDefined();
      expect(colors.light.brand.warning.active).toBeDefined();
      expect(colors.light.brand.warning.onColor).toBe('#FFFFFF');

      expect(colors.light.brand.error.base).toBe('#E02E2A');
      expect(colors.light.brand.error.hover).toBeDefined();
      expect(colors.light.brand.error.active).toBeDefined();
      expect(colors.light.brand.error.onColor).toBe('#FFFFFF');

      // Dark theme
      expect(colors.dark.brand.primary.base).toBe('#0285FF');
      expect(colors.dark.brand.success.base).toBe('#40C977');
      expect(colors.dark.brand.warning.base).toBe('#FF9E6C');
      expect(colors.dark.brand.error.base).toBe('#FF8583');
    });
  });

  describe('Typography', () => {
    it('should have correct heading1 values', () => {
      expect(typography.heading1.fontSize).toBe('36px');
      expect(typography.heading1.lineHeight).toBe('40px');
      expect(typography.heading1.fontWeight).toBe(600);
    });

    it('should have correct heading2 values', () => {
      expect(typography.heading2.fontSize).toBe('24px');
      expect(typography.heading2.lineHeight).toBe('28px');
      expect(typography.heading2.fontWeight).toBe(600);
    });

    it('should have correct heading3 values', () => {
      expect(typography.heading3.fontSize).toBe('18px');
      expect(typography.heading3.lineHeight).toBe('26px');
      expect(typography.heading3.fontWeight).toBe(600);
    });

    it('should have correct body values', () => {
      expect(typography.body.fontSize).toBe('16px');
      expect(typography.body.lineHeight).toBe('26px');
      expect(typography.body.fontWeight).toBe(400);
    });

    it('should have correct bodyEmph values', () => {
      expect(typography.bodyEmph.fontSize).toBe('16px');
      expect(typography.bodyEmph.lineHeight).toBe('26px');
      expect(typography.bodyEmph.fontWeight).toBe(600);
    });

    it('should have correct bodySmall values', () => {
      expect(typography.bodySmall.fontSize).toBe('14px');
      expect(typography.bodySmall.lineHeight).toBe('18px');
      expect(typography.bodySmall.fontWeight).toBe(400);
    });

    it('should have correct caption values', () => {
      expect(typography.caption.fontSize).toBe('12px');
      expect(typography.caption.lineHeight).toBe('16px');
      expect(typography.caption.fontWeight).toBe(400);
    });

    it('should include all defined typography tokens', () => {
      expect(Object.keys(typography).length).toBe(13);
    });
  });

  describe('Spacing', () => {
    it('should follow space-<n> = n*2px formula', () => {
      // New helper API uses numeric keys
      expect(spacing[4]).toBe('8px'); // 4 * 2 = 8
      expect(spacing[8]).toBe('16px'); // 8 * 2 = 16
      expect(spacing[16]).toBe('32px'); // 16 * 2 = 32
      expect(spacing[20]).toBe('40px'); // 20 * 2 = 40
      expect(spacing[24]).toBe('48px'); // 24 * 2 = 48
      expect(spacing[32]).toBe('64px'); // 32 * 2 = 64
      expect(spacing[64]).toBe('128px'); // 64 * 2 = 128
    });

    it('should have 13 spacing tokens', () => {
      expect(Object.keys(spacing).length).toBe(13);
    });
  });

  describe('Radius', () => {
    it('should have correct radius values', () => {
      expect(radius.none).toBe('0px');
      expect(radius.sm).toBe('4px');
      expect(radius.md).toBe('8px');
      expect(radius.base).toBe('12px');
      expect(radius.lg).toBe('16px');
      expect(radius.xl).toBe('24px');
      expect(radius.full).toBe('9999px');
    });

    it('should have 7 radius tokens', () => {
      expect(Object.keys(radius).length).toBe(7);
    });
  });

  describe('Elevation', () => {
    it('should have correct elevation values', () => {
      expect(elevation[0].shadow).toBe('none');
      expect(elevation[1].shadow).toBe('0px 4px 16px rgba(0,0,0,0.05)');
      expect(elevation[1].darkOverlay).toBe('rgba(255,255,255,0.05)');
      expect(elevation[5].shadow).toBe('0px 16px 48px rgba(0,0,0,0.14)');
    });

    it('should have 6 elevation tokens', () => {
      expect(Object.keys(elevation).length).toBe(6);
    });
  });

  describe('Token Exports', () => {
    it('should export all token categories from tokens object', () => {
      expect(tokens.colors).toBeDefined();
      expect(tokens.typography).toBeDefined();
      expect(tokens.spacing).toBeDefined();
      expect(tokens.radius).toBeDefined();
      expect(tokens.elevation).toBeDefined();
      expect(tokens.fontStack).toBeDefined();
      expect(tokens.defaultRadius).toBe(radius.xl);
      expect(tokens.defaultElevation).toBe(1);
    });

    it('should have tokens accessible from package root', () => {
      // This test ensures the barrel exports work correctly
      expect(colors).toBeDefined();
      expect(typography).toBeDefined();
      expect(spacing).toBeDefined();
      expect(radius).toBeDefined();
      expect(elevation).toBeDefined();
    });
  });

  describe('Token Metadata', () => {
    describe('Typography Metadata', () => {
      it('should have metadata on all typography tokens', () => {
        const typographyKeys = Object.keys(typography);

        typographyKeys.forEach((key) => {
          const token = typography[key as keyof typeof typography];
          expect(token.meta).toBeDefined();
          expect(token.meta.description).toBeDefined();
          expect(token.meta.usage).toBeDefined();
          expect(token.meta.a11y).toBeDefined();
          expect(typeof token.meta.description).toBe('string');
          expect(typeof token.meta.usage).toBe('string');
          expect(typeof token.meta.a11y).toBe('string');
        });
      });

      it('should have meaningful metadata content', () => {
        // Check metadata exists and is non-empty, not specific wording
        expect(typography.heading1.meta.description.length).toBeGreaterThan(0);
        expect(typography.body.meta.usage.length).toBeGreaterThan(0);
        expect(typography.caption.meta.a11y.length).toBeGreaterThan(0);
      });
    });

    describe('Elevation Metadata', () => {
      it('should have metadata on all elevation tokens', () => {
        const elevationLevels = Object.keys(elevation);

        elevationLevels.forEach((level) => {
          const token = elevation[Number(level) as keyof typeof elevation];
          expect(token.meta).toBeDefined();
          expect(token.meta.description).toBeDefined();
          expect(token.meta.usage).toBeDefined();
          expect(typeof token.meta.description).toBe('string');
          expect(typeof token.meta.usage).toBe('string');
        });
      });

      it('should have zIndex guidance for elevated elements', () => {
        // Check that elevated elements have zIndex guidance
        expect(elevation[1].meta.zIndex).toBeDefined();
        expect(typeof elevation[1].meta.zIndex).toBe('string');
        expect(elevation[1].meta.zIndex!.length).toBeGreaterThan(0);

        // Verify higher elevations have guidance
        expect(elevation[3].meta.zIndex).toBeDefined();
        expect(elevation[5].meta.zIndex).toBeDefined();
      });
    });
  });

  describe('Class Name System', () => {
    describe('Typography Classes', () => {
      it('should have className property on every typography token', () => {
        const typographyKeys = Object.keys(typography);

        typographyKeys.forEach((key) => {
          const token = typography[key as keyof typeof typography];
          expect(token.className).toBeDefined();
          expect(typeof token.className).toBe('string');
          expect(token.className).toMatch(/^ai-/); // Should start with 'ai-' prefix
        });
      });

      it('should have correct class name format', () => {
        expect(typography.heading1.className).toBe('ai-heading1');
        expect(typography.heading2.className).toBe('ai-heading2');
        expect(typography.heading3.className).toBe('ai-heading3');
        expect(typography.body.className).toBe('ai-body');
        expect(typography.bodyEmph.className).toBe('ai-body-emph');
        expect(typography.bodySmall.className).toBe('ai-body-small');
        expect(typography.caption.className).toBe('ai-caption');
      });
    });

    describe('Elevation Classes', () => {
      it('should have className property on every elevation level', () => {
        const elevationLevels = Object.keys(elevation);

        elevationLevels.forEach((level) => {
          const token = elevation[Number(level) as keyof typeof elevation];
          expect(token.className).toBeDefined();
          expect(typeof token.className).toBe('string');
          expect(token.className).toBe(`ai-elevation-${level}`);
        });
      });

      it('should have correct class name format', () => {
        expect(elevation[0].className).toBe('ai-elevation-0');
        expect(elevation[1].className).toBe('ai-elevation-1');
        expect(elevation[2].className).toBe('ai-elevation-2');
        expect(elevation[3].className).toBe('ai-elevation-3');
        expect(elevation[4].className).toBe('ai-elevation-4');
        expect(elevation[5].className).toBe('ai-elevation-5');
      });
    });

    describe('Class Name Consistency', () => {
      it('should use consistent ai- prefix', () => {
        const typographyClasses = Object.values(typography).map((t) => t.className);
        const elevationClasses = Object.values(elevation).map((e) => e.className);
        const allClasses = [...typographyClasses, ...elevationClasses];

        allClasses.forEach((className) => {
          expect(className).toMatch(/^ai-/);
        });
      });

      it('should use kebab-case for multi-word names', () => {
        expect(typography.bodyEmph.className).toBe('ai-body-emph'); // Not ai-bodyEmph
        expect(typography.bodySmall.className).toBe('ai-body-small'); // Not ai-bodySmall
      });
    });
  });

  describe('Opacity Tokens', () => {
    it('should have core opacity values', () => {
      expect(opacity.full).toBe(1);
      expect(opacity.subtle).toBe(0.7);
      expect(opacity.muted).toBe(0.5);
      expect(opacity.disabled).toBe(0.3);
    });

    it('should have interactive state opacities', () => {
      expect(opacity.hover).toBeDefined();
      expect(opacity.pressed).toBeDefined();
      expect(typeof opacity.hover).toBe('number');
      expect(typeof opacity.pressed).toBe('number');
    });

    it('should have overlay opacities', () => {
      expect(opacity.overlay).toBeDefined();
      expect(opacity.scrim).toBeDefined();
      expect(typeof opacity.overlay).toBe('number');
      expect(typeof opacity.scrim).toBe('number');
    });

    it('should have all required opacity tokens', () => {
      // Test for presence of required keys instead of fixed count
      const requiredKeys = [
        'full',
        'subtle',
        'muted',
        'disabled',
        'hover',
        'pressed',
        'overlay',
        'scrim',
      ];
      requiredKeys.forEach((key) => {
        expect(opacity).toHaveProperty(key);
        expect(typeof opacity[key as keyof typeof opacity]).toBe('number');
      });
    });
  });
});
