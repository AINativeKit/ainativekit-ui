import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

describe('Alert', () => {
  describe('Basic Rendering', () => {
    it('should render with default error title', () => {
      render(<Alert />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    it('should render with custom title', () => {
      render(<Alert title="Custom Error" />);
      expect(screen.getByText('Custom Error')).toBeInTheDocument();
    });

    it('should render with message', () => {
      render(<Alert title="Error" message="Detailed error message" />);
      expect(screen.getByText('Detailed error message')).toBeInTheDocument();
    });

    it('should render without message when not provided', () => {
      const { container } = render(<Alert title="Error" />);
      expect(container.querySelector('p')).not.toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render error variant with default title', () => {
      const { container } = render(<Alert variant="error" />);
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      const alertDiv = container.firstChild as HTMLElement;
      expect(alertDiv.className).toContain('alert--error');
    });

    it('should render warning variant with default title', () => {
      const { container } = render(<Alert variant="warning" />);
      expect(screen.getByText('Warning')).toBeInTheDocument();
      const alertDiv = container.firstChild as HTMLElement;
      expect(alertDiv.className).toContain('alert--warning');
    });

    it('should render info variant with default title', () => {
      const { container } = render(<Alert variant="info" />);
      expect(screen.getByText('Information')).toBeInTheDocument();
      const alertDiv = container.firstChild as HTMLElement;
      expect(alertDiv.className).toContain('alert--info');
    });

    it('should render success variant with default title', () => {
      const { container } = render(<Alert variant="success" />);
      expect(screen.getByText('Success')).toBeInTheDocument();
      const alertDiv = container.firstChild as HTMLElement;
      expect(alertDiv.className).toContain('alert--success');
    });
  });

  describe('Layout', () => {
    it('should render default layout', () => {
      const { container } = render(<Alert layout="default" />);
      const alertDiv = container.firstChild as HTMLElement;
      expect(alertDiv.className).toContain('alert--default');
    });

    it('should render card layout', () => {
      const { container } = render(<Alert layout="card" />);
      const alertDiv = container.firstChild as HTMLElement;
      expect(alertDiv.className).toContain('alert--card');
    });
  });

  describe('Icon', () => {
    it('should render default error icon', () => {
      const { container } = render(<Alert />);
      const iconContainer = container.querySelector('[class*="alert__icon"]');
      expect(iconContainer).toBeInTheDocument();
      // The Error icon is rendered as a span with mask-image, not SVG
      expect(iconContainer?.querySelector('span[class*="icon"]')).toBeInTheDocument();
    });

    it('should render custom icon when provided', () => {
      const CustomIcon = () => <div data-testid="custom-icon">Custom</div>;
      render(<Alert icon={<CustomIcon />} />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('should hide icon when hideIcon is true', () => {
      const { container } = render(<Alert hideIcon />);
      const iconContainer = container.querySelector('[class*="alert__icon"]');
      expect(iconContainer).not.toBeInTheDocument();
    });
  });

  describe('Action Button', () => {
    it('should render action button when onAction provided', () => {
      const onAction = vi.fn();
      render(<Alert onAction={onAction} />);
      expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();
    });

    it('should not render action button when onAction not provided', () => {
      render(<Alert />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should call onAction when button clicked', async () => {
      const user = userEvent.setup();
      const onAction = vi.fn();
      render(<Alert onAction={onAction} />);
      
      await user.click(screen.getByRole('button', { name: 'Try Again' }));
      expect(onAction).toHaveBeenCalledTimes(1);
    });

    it('should use custom actionLabel', () => {
      const onAction = vi.fn();
      render(<Alert onAction={onAction} actionLabel="Refresh" />);
      expect(screen.getByRole('button', { name: 'Refresh' })).toBeInTheDocument();
    });

    it('should use variant-specific default labels', () => {
      const onAction = vi.fn();
      
      const { rerender } = render(<Alert variant="error" onAction={onAction} />);
      expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();
      
      rerender(<Alert variant="warning" onAction={onAction} />);
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
      
      rerender(<Alert variant="info" onAction={onAction} />);
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
      
      rerender(<Alert variant="success" onAction={onAction} />);
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have role="alert"', () => {
      render(<Alert />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should have aria-live="polite"', () => {
      const { container } = render(<Alert />);
      const alert = container.querySelector('[role="alert"]');
      expect(alert).toHaveAttribute('aria-live', 'polite');
    });

    it('should have aria-hidden on icon', () => {
      const { container } = render(<Alert />);
      const icon = container.querySelector('span[class*="icon"]');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Test ID', () => {
    it('should apply data-testid when provided', () => {
      render(<Alert data-testid="error-component" />);
      expect(screen.getByTestId('error-component')).toBeInTheDocument();
    });
  });

  describe('Ref Forwarding', () => {
    it('should forward ref to div element', () => {
      const ref = vi.fn();
      render(<Alert ref={ref} />);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    });
  });

  describe('Props Inheritance', () => {
    it('should apply custom className', () => {
      const { container } = render(<Alert className="custom-class" />);
      const errorDiv = container.firstChild as HTMLElement;
      expect(errorDiv.className).toContain('custom-class');
    });

    it('should spread additional props', () => {
      render(<Alert data-custom="value" />);
      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Complex Scenarios', () => {
    it('should render complete alert with all features', () => {
      const onAction = vi.fn();
      render(
        <Alert
          variant="error"
          layout="card"
          title="Network Error"
          message="Unable to connect to the server. Please check your connection."
          onAction={onAction}
          actionLabel="Reconnect"
          data-testid="network-error"
        />
      );

      expect(screen.getByTestId('network-error')).toBeInTheDocument();
      expect(screen.getByText('Network Error')).toBeInTheDocument();
      expect(screen.getByText('Unable to connect to the server. Please check your connection.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Reconnect' })).toBeInTheDocument();
    });

    it('should render minimal alert with just title', () => {
      render(<Alert title="Error" hideIcon />);
      
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      expect(screen.queryByText('p')).not.toBeInTheDocument();
    });

    it('should combine all variant types with card layout', () => {
      const onAction = vi.fn();
      
      // Test all 4 variants with card layout
      const { rerender } = render(
        <Alert variant="error" layout="card" message="Error message" onAction={onAction} />
      );
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      
      rerender(<Alert variant="warning" layout="card" message="Warning message" onAction={onAction} />);
      expect(screen.getByText('Warning')).toBeInTheDocument();
      
      rerender(<Alert variant="info" layout="card" message="Info message" onAction={onAction} />);
      expect(screen.getByText('Information')).toBeInTheDocument();
      
      rerender(<Alert variant="success" layout="card" message="Success message" onAction={onAction} />);
      expect(screen.getByText('Success')).toBeInTheDocument();
    });
  });
});
