# ESLint Custom Rules for @ainativekit/ui

This directory contains custom ESLint rules specific to the @ainativekit/ui component library.

## Rules

### `enforce-tier-dependencies`

Enforces architectural tier dependency rules to maintain clean architecture and prevent circular dependencies.

#### Tier Hierarchy

The component library is organized into three tiers with strict dependency rules:

```
primitives (tier 1) → composed (tier 2) → patterns (tier 3)
```

**Dependency Rules:**

- ✅ **Primitives** can import from: primitives, tokens, icons, utils, hooks
- ✅ **Composed** can import from: primitives, composed, tokens, icons, utils, hooks
- ✅ **Patterns** can import from: primitives, composed, patterns, tokens, icons, utils, hooks
- ❌ **Primitives** CANNOT import from: composed or patterns
- ❌ **Composed** CANNOT import from: patterns

#### Exemptions

- **Story files** (`.stories.tsx`): Excluded from tier rules since they're documentation/demo files
- **Test files** (`.test.tsx`): Included in tier rules to ensure tests follow same architecture
- **Cross-cutting concerns**: All tiers can freely import from `tokens`, `icons`, `utils`, `hooks`, `types`

#### Examples

**✅ Valid imports:**

```typescript
// In primitives/Button/Button.tsx
import { cn } from '../../utils/cn'; // Utils - OK
import { IconName } from '../../tokens/icons'; // Tokens - OK
import { Badge } from '../Badge'; // Same tier - OK

// In composed/Card/Card.tsx
import { Button } from '../../primitives/Button'; // Lower tier - OK
import { Badge } from '../../primitives/Badge'; // Lower tier - OK

// In patterns/Album/Album.tsx
import { Card } from '../../composed/Card'; // Lower tier - OK
import { Button } from '../../primitives/Button'; // Lower tier - OK
```

**❌ Invalid imports:**

```typescript
// In primitives/Badge/Badge.tsx
import { Card } from '../../composed/Card'; // ❌ Cannot import higher tier

// In composed/Card/Card.tsx
import { Album } from '../../patterns/Album'; // ❌ Cannot import higher tier
```

#### Error Message

When a violation is detected, you'll see:

```
Invalid tier dependency: primitives cannot import from composed.
Dependency flow must be: primitives → composed → patterns
```

## Usage

The rules are automatically enforced when running:

```bash
# Run full lint check (includes all rules + tier dependency checks)
cd packages/ui && pnpm lint

# Check only src/ directory (faster, still includes tier rule)
cd packages/ui && pnpm lint:deps

# Auto-fix linting issues (where possible)
cd packages/ui && pnpm lint:fix
```

## Adding New Rules

To add a new custom rule:

1. Create a new file in this directory (e.g., `my-new-rule.js`)
2. Export an ESLint rule object with `meta` and `create` properties
3. Add the rule to `index.js`:
   ```javascript
   module.exports = {
     'enforce-tier-dependencies': require('./enforce-tier-dependencies.js'),
     'my-new-rule': require('./my-new-rule.js'), // Add here
   };
   ```
4. Enable it in `.eslintrc.cjs`:
   ```javascript
   rules: {
     'local-rules/my-new-rule': 'error',
   }
   ```

## Technical Details

- **Plugin**: Uses `eslint-plugin-local-rules` to load project-specific rules
- **Parser**: Works with `@typescript-eslint/parser` for TypeScript support
- **Detection**: Analyzes `ImportDeclaration` nodes to check import paths
- **Scope**: Only checks files within `src/{primitives|composed|patterns}/` directories

## Learn More

- [ESLint Custom Rules Documentation](https://eslint.org/docs/latest/extend/custom-rules)
- [eslint-plugin-local-rules](https://github.com/cletusw/eslint-plugin-local-rules)
- [Component Architecture guidelines](../CONTRIBUTING.md#-component-architecture)
