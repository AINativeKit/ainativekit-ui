# Contributing to AI Native Kit UI

Thank you for your interest in contributing to AI Native Kit UI! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Architecture](#component-architecture)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project follows a [Code of Conduct](./CODE_OF_CONDUCT.md).

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 20.19.2
- **pnpm**: >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/AINativeKit/ainativekit-ui.git
cd ainativekit-ui

# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Run tests in watch mode
pnpm test:watch
```

## 🔄 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Changes

- Write code following our coding standards
- Add tests for new functionality
- Update documentation as needed
- Test your changes in Storybook

### 3. Run Quality Checks

```bash
# Lint your code
pnpm lint

# Run tests
pnpm test

# Build the library
pnpm build
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new Button variant"
git commit -m "fix: resolve Icon alignment issue"
git commit -m "docs: update Card component usage"
```

**Commit types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 🏗️ Component Architecture

### Tier System

Components are organized in three tiers:

```
primitives → composed → patterns
```

**Rules:**

- ✅ **Primitives** can import: primitives, tokens, icons, utils, hooks
- ✅ **Composed** can import: primitives, composed, tokens, icons, utils, hooks
- ✅ **Patterns** can import: primitives, composed, patterns, tokens, icons, utils, hooks
- ❌ **Never** import higher tiers (enforced by ESLint)

### Adding a New Component

#### 1. Choose the Right Tier

- **Primitive**: Basic, single-purpose component (Button, Badge)
- **Composed**: Combines primitives (Card, Carousel)
- **Pattern**: Complex, domain-specific (Album, Map)

#### 2. Create Component Structure

```bash
packages/ui/src/components/YourComponent/
├── YourComponent.tsx        # Main component
├── YourComponent.module.css # Styles
├── YourComponent.stories.tsx # Storybook documentation
├── YourComponent.test.tsx   # Tests
└── index.ts                 # Exports
```

#### 3. Component Template

````tsx
import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './YourComponent.module.css';

export interface YourComponentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Component variant
   * @default 'default'
   */
  variant?: 'default' | 'primary';

  /**
   * Additional description
   */
  children: React.ReactNode;
}

/**
 * YourComponent provides [brief description].
 *
 * @example
 * ```tsx
 * <YourComponent variant="primary">Content</YourComponent>
 * ```
 */
export const YourComponent: React.FC<YourComponentProps> = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.root, styles[variant], className)} {...props}>
      {children}
    </div>
  );
};
````

#### 4. Add to Exports

```tsx
// packages/ui/src/components/index.ts
export { YourComponent } from './YourComponent';
export type { YourComponentProps } from './YourComponent';
```

## 🎨 Coding Standards

### TypeScript

- Use TypeScript for all files
- Prefer `interface` over `type` for component props
- Export all types alongside components
- Use JSDoc comments for public APIs

### Styling

- Use CSS Modules for component styles
- Leverage design tokens from `tokens/`
- Support light and dark themes
- Use semantic class names

### Accessibility

- All interactive elements must be keyboard accessible
- Provide proper ARIA labels and roles
- Test with screen readers when possible
- Include focus styles

### Naming Conventions

- **Components**: PascalCase (`Button`, `ImageCard`)
- **Props**: camelCase with descriptive names
- **CSS classes**: camelCase in modules
- **Files**: Match component name

## 🧪 Testing

### Writing Tests

```tsx
import { render, screen } from '@testing-library/react';
import { YourComponent } from './YourComponent';

describe('YourComponent', () => {
  it('renders with default props', () => {
    render(<YourComponent>Content</YourComponent>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies variant className', () => {
    const { container } = render(<YourComponent variant="primary">Content</YourComponent>);
    expect(container.firstChild).toHaveClass('primary');
  });
});
```

### Test Coverage

- Aim for >80% coverage for new components
- Test all props and variants
- Test accessibility features
- Test error states

## 📚 Documentation

### Component Stories

Create comprehensive Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Primitive Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Default: StoryObj<typeof YourComponent> = {
  args: {
    variant: 'default',
    children: 'Example content',
  },
};
```

### Documentation Requirements

- **Component docstring**: Brief description and example
- **Props documentation**: JSDoc for all props
- **Storybook story**: Interactive examples
- **Usage in USAGE.md**: If it's a major component

## 🔀 Pull Request Process

### Before Submitting

1. ✅ All tests pass (`pnpm test`)
2. ✅ Linting passes (`pnpm lint`)
3. ✅ Build succeeds (`pnpm build`)
4. ✅ Storybook works (`pnpm storybook`)
5. ✅ Documentation is updated
6. ✅ Commit messages follow conventions

### PR Title

Follow Conventional Commits format:

```
feat: add Button loading state
fix: resolve Card border radius issue
docs: improve Icon system documentation
```

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Added tests
- [ ] All tests passing
- [ ] Tested in Storybook

## Screenshots (if applicable)

[Add screenshots of visual changes]

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests with good coverage
```

### Review Process

1. Maintainers will review your PR
2. Address feedback and update PR
3. Once approved, maintainers will merge

## 🎯 Areas to Contribute

### High Priority

- **Additional components**: Suggest and implement new components
- **Accessibility improvements**: Enhance A11Y support
- **Testing**: Increase test coverage
- **Documentation**: Improve examples and guides
- **Performance**: Optimize bundle size and runtime

### Good First Issues

Look for issues tagged with `good first issue` or `help wanted`.

## 💬 Communication

- **Issues**: For bug reports and feature requests
- **Discussions**: For questions and ideas
- **Pull Requests**: For code contributions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to AI Native Kit UI! 🎉
