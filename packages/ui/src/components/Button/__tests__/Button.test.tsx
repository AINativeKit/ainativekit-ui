import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeProvider } from '../../../providers/ThemeProvider';

describe('Button', () => {
  describe('basic rendering', () => {
    it('should render with children', () => {
      const { container } = render(<Button>Click me</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveTextContent('Click me');
    });

    it('should render with default variant', () => {
      const { container } = render(<Button>Default</Button>);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
    });

    it('should forward ref correctly', () => {
      const ref = { current: null };
      render(<Button ref={ref as React.RefObject<HTMLButtonElement>}>Test</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('variant prop', () => {
    it('should render primary variant', () => {
      const { container } = render(<Button variant="primary">Primary</Button>);
      expect(container.querySelector('button')).toBeInTheDocument();
    });

    it('should render secondary variant', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>);
      expect(container.querySelector('button')).toBeInTheDocument();
    });

    it('should render tertiary variant', () => {
      const { container } = render(<Button variant="tertiary">Tertiary</Button>);
      expect(container.querySelector('button')).toBeInTheDocument();
    });

    it('should render ghost variant', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>);
      expect(container.querySelector('button')).toBeInTheDocument();
    });
  });

  describe('color prop', () => {
    it('should render with primary color by default', () => {
      const { container } = render(<Button variant="primary">Primary Color</Button>);
      expect(container.querySelector('button')).toBeInTheDocument();
    });

    it('should render with success color', () => {
      const { container } = render(
        <Button variant="primary" color="success">
          Success
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Success');
    });

    it('should render with warning color', () => {
      const { container } = render(
        <Button variant="primary" color="warning">
          Warning
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Warning');
    });

    it('should render with error color', () => {
      const { container } = render(
        <Button variant="primary" color="error">
          Error
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Error');
    });

    it('should render with neutral color', () => {
      const { container } = render(
        <Button variant="primary" color="neutral">
          Neutral
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Neutral');
    });
  });

  describe('color prop with variants', () => {
    it('should work with primary variant and success color', () => {
      const { container } = render(
        <Button variant="primary" color="success">
          Save
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Save');
    });

    it('should work with secondary variant and all colors', () => {
      const { container } = render(
        <>
          <Button variant="secondary" color="primary">
            Primary
          </Button>
          <Button variant="secondary" color="success">
            Success
          </Button>
          <Button variant="secondary" color="warning">
            Warning
          </Button>
          <Button variant="secondary" color="error">
            Error
          </Button>
        </>
      );
      expect(container.querySelectorAll('button')).toHaveLength(4);
    });

    it('should work with icon-only buttons and color prop', () => {
      const { container } = render(
        <Button variant="primary" color="error" iconOnly aria-label="Delete">
          <svg />
        </Button>
      );
      expect(container.querySelector('button')).toHaveAttribute('aria-label', 'Delete');
    });
  });

  describe('integration with ThemeProvider brand colors', () => {
    it('should use brand colors from ThemeProvider', () => {
      const { container } = render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <Button variant="primary" color="primary">
            Purple Button
          </Button>
        </ThemeProvider>
      );

      const button = container.querySelector('button');
      expect(button).toHaveTextContent('Purple Button');

      // Verify brand color CSS was injected
      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement).toBeInTheDocument();
      expect(styleElement?.textContent).toContain('#6B46C1');
    });

    it('should work with all brand color variants', () => {
      const { container } = render(
        <ThemeProvider
          brandColors={{
            primary: '#6B46C1',
            success: '#00C853',
            warning: '#FFB300',
            error: '#D32F2F',
          }}
        >
          <Button variant="primary" color="primary">
            Primary
          </Button>
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
      expect(buttons).toHaveLength(4);

      // Verify all brand colors are in CSS
      const styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#6B46C1');
      expect(styleElement?.textContent).toContain('#00C853');
      expect(styleElement?.textContent).toContain('#FFB300');
      expect(styleElement?.textContent).toContain('#D32F2F');
    });

    it('should update when brand colors change', () => {
      const { rerender } = render(
        <ThemeProvider brandColors={{ primary: '#6B46C1' }}>
          <Button variant="primary" color="primary">
            Button
          </Button>
        </ThemeProvider>
      );

      let styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#6B46C1');

      rerender(
        <ThemeProvider brandColors={{ primary: '#FF006E' }}>
          <Button variant="primary" color="primary">
            Button
          </Button>
        </ThemeProvider>
      );

      styleElement = document.querySelector('[data-ainativekit-brand-colors]');
      expect(styleElement?.textContent).toContain('#FF006E');
    });
  });

  describe('disabled state with colors', () => {
    it('should render disabled button with color', () => {
      const { container } = render(
        <Button variant="primary" color="success" disabled>
          Disabled
        </Button>
      );
      const button = container.querySelector('button');
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent('Disabled');
    });

    it('should not be clickable when disabled', () => {
      let clicked = false;
      const { container } = render(
        <Button
          variant="primary"
          color="error"
          disabled
          onClick={() => {
            clicked = true;
          }}
        >
          Click me
        </Button>
      );

      const button = container.querySelector('button');
      button?.click();
      expect(clicked).toBe(false);
    });
  });

  describe('children content with colors', () => {
    it('should render children with color prop', () => {
      const { container } = render(
        <Button variant="primary" color="primary">
          Button Content
        </Button>
      );
      const button = container.querySelector('button');
      expect(button).toHaveTextContent('Button Content');
    });

    it('should render complex children with color', () => {
      const { container } = render(
        <Button variant="primary" color="success">
          <span>Save</span>
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Save');
    });
  });

  describe('semantic color usage patterns', () => {
    it('should support save action with success color', () => {
      const { container } = render(
        <Button variant="primary" color="success">
          Save Changes
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Save Changes');
    });

    it('should support delete action with error color', () => {
      const { container } = render(
        <Button variant="primary" color="error">
          Delete Account
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Delete Account');
    });

    it('should support warning action with warning color', () => {
      const { container } = render(
        <Button variant="secondary" color="warning">
          Proceed with Caution
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Proceed with Caution');
    });

    it('should support neutral action with neutral color', () => {
      const { container } = render(
        <Button variant="tertiary" color="neutral">
          Cancel
        </Button>
      );
      expect(container.querySelector('button')).toHaveTextContent('Cancel');
    });
  });

  describe('TypeScript type safety', () => {
    it('should accept valid color values', () => {
      // These should compile without errors
      render(<Button color="primary">Primary</Button>);
      render(<Button color="success">Success</Button>);
      render(<Button color="warning">Warning</Button>);
      render(<Button color="error">Error</Button>);
      render(<Button color="neutral">Neutral</Button>);
    });

    it('should work with variant and color combinations', () => {
      const variants: Array<'primary' | 'secondary' | 'tertiary' | 'ghost'> = [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
      ];
      const colors: Array<'primary' | 'success' | 'warning' | 'error' | 'neutral'> = [
        'primary',
        'success',
        'warning',
        'error',
        'neutral',
      ];

      const { container } = render(
        <>
          {variants.map((variant) =>
            colors.map((color) => (
              <Button key={`${variant}-${color}`} variant={variant} color={color}>
                {variant}-{color}
              </Button>
            ))
          )}
        </>
      );

      // Should render 4 variants × 5 colors = 20 buttons
      expect(container.querySelectorAll('button')).toHaveLength(20);
    });
  });

  describe('accessibility with colors', () => {
    it('should maintain aria-label with color prop', () => {
      const { container } = render(
        <Button variant="primary" color="error" aria-label="Delete item">
          Delete
        </Button>
      );
      expect(container.querySelector('button')).toHaveAttribute('aria-label', 'Delete item');
    });

    it('should be keyboard accessible with colors', () => {
      const { container } = render(
        <Button variant="primary" color="success">
          Submit
        </Button>
      );
      const button = container.querySelector('button');
      expect(button?.tagName).toBe('BUTTON');
      expect(button).not.toHaveAttribute('tabindex', '-1');
    });
  });
});
