/**
 * ESLint rule: enforce-tier-dependencies
 * 
 * Enforces architectural tier dependency rules:
 * - Primitives cannot import from Composed or Patterns
 * - Composed cannot import from Patterns
 * - All tiers can import from tokens, icons, utils, hooks
 */

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce tier-based dependency rules (primitives < composed < patterns)',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      invalidDependency: 'Invalid tier dependency: {{fromTier}} cannot import from {{toTier}}. Dependency flow must be: primitives → composed → patterns',
    },
    schema: [],
  },

  create(context) {
    // Tier hierarchy: lower numbers can only import from same or lower tiers
    const tierLevels = {
      primitives: 1,
      composed: 2,
      patterns: 3,
    };

    // Allowed cross-cutting concerns (can be imported by any tier)
    const allowedCrossCuttingImports = [
      'tokens',
      'icons',
      'utils',
      'hooks',
      'types',
    ];

    /**
     * Extract tier from file path
     * @param {string} filePath - The file path
     * @returns {string|null} - The tier name or null
     */
    function getTierFromPath(filePath) {
      const match = filePath.match(/src\/(primitives|composed|patterns)\//);
      return match ? match[1] : null;
    }

    /**
     * Extract tier from import path
     * @param {string} importPath - The import path
     * @returns {string|null} - The tier name or null
     */
    function getTierFromImport(importPath) {
      // Handle relative imports: ../../composed/Card
      const relativeMatch = importPath.match(/\/(primitives|composed|patterns)\//);
      if (relativeMatch) {
        return relativeMatch[1];
      }

      // Handle package imports: @ainativekit/ui/composed
      const packageMatch = importPath.match(/@ainativekit\/ui\/(primitives|composed|patterns)/);
      if (packageMatch) {
        return packageMatch[1];
      }

      return null;
    }

    /**
     * Check if import is a cross-cutting concern
     * @param {string} importPath - The import path
     * @returns {boolean} - True if it's a cross-cutting concern
     */
    function isCrossCuttingConcern(importPath) {
      return allowedCrossCuttingImports.some(concern => 
        importPath.includes(`/${concern}/`) || 
        importPath.includes(`/${concern}`) ||
        importPath.endsWith(concern)
      );
    }

    return {
      ImportDeclaration(node) {
        const filename = context.getFilename();
        const importPath = node.source.value;

        // Skip story files - they're documentation, not runtime code
        if (filename.includes('.stories.')) {
          return;
        }

        // Skip if not in a tier directory
        const fromTier = getTierFromPath(filename);
        if (!fromTier) {
          return;
        }

        // Skip if importing cross-cutting concerns
        if (isCrossCuttingConcern(importPath)) {
          return;
        }

        // Check if importing from another tier
        const toTier = getTierFromImport(importPath);
        if (!toTier || toTier === fromTier) {
          return;
        }

        // Check if violating tier hierarchy
        const fromLevel = tierLevels[fromTier];
        const toLevel = tierLevels[toTier];

        if (fromLevel < toLevel) {
          context.report({
            node: node.source,
            messageId: 'invalidDependency',
            data: {
              fromTier,
              toTier,
            },
          });
        }
      },
    };
  },
};
