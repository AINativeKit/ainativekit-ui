import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  renderComponent,
  renderComponents,
  validateComponentConfig,
  createComponentConfig,
  isSupportedComponent,
  type ComponentConfig,
} from '../renderFromJSON';

describe('renderFromJSON', () => {
  describe('isSupportedComponent', () => {
    it('should return true for supported components', () => {
      expect(isSupportedComponent('Button')).toBe(true);
      expect(isSupportedComponent('SummaryCard')).toBe(true);
      expect(isSupportedComponent('Alert')).toBe(true);
    });

    it('should return false for unsupported components', () => {
      expect(isSupportedComponent('InvalidComponent')).toBe(false);
      expect(isSupportedComponent('NotAComponent')).toBe(false);
    });
  });

  describe('createComponentConfig', () => {
    it('should create a valid component config', () => {
      const config = createComponentConfig('Button', { variant: 'primary' }, 'Click me');
      expect(config).toEqual({
        type: 'Button',
        props: { variant: 'primary' },
        children: 'Click me',
      });
    });

    it('should create config without children', () => {
      const config = createComponentConfig('Icon', { name: 'settings' });
      expect(config).toEqual({
        type: 'Icon',
        props: { name: 'settings' },
        children: undefined,
      });
    });
  });

  describe('validateComponentConfig', () => {
    it('should validate a valid config', () => {
      const config: ComponentConfig = {
        type: 'Button',
        props: { variant: 'primary' },
        children: 'Click me',
      };
      const result = validateComponentConfig(config);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject unknown component types', () => {
      const config: ComponentConfig = {
        type: 'InvalidComponent',
        props: {},
      };
      const result = validateComponentConfig(config);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Unknown component type: InvalidComponent');
    });

    it('should reject invalid props', () => {
      const config = {
        type: 'Button',
        props: 'invalid', // Should be object
      };
      const result = validateComponentConfig(config as ComponentConfig);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Props must be an object');
    });
  });

  describe('renderComponent', () => {
    it('should render a Button component', () => {
      const config: ComponentConfig = {
        type: 'Button',
        props: { variant: 'primary' },
        children: 'Click me',
      };
      const element = renderComponent(config);
      const { container } = render(element);
      expect(container.querySelector('button')).toHaveTextContent('Click me');
    });

    it('should render a Badge component', () => {
      const config: ComponentConfig = {
        type: 'Badge',
        props: { variant: 'success' },
        children: '9.2',
      };
      const element = renderComponent(config);
      const { container } = render(element);
      expect(container.textContent).toContain('9.2');
    });

    it('should return null for unknown components', () => {
      const config: ComponentConfig = {
        type: 'UnknownComponent',
        props: {},
      };
      const element = renderComponent(config);
      expect(element).toBeNull();
    });

    it('should render nested components', () => {
      const config: ComponentConfig = {
        type: 'Card',
        props: {},
        children: [
          {
            type: 'Button',
            props: { variant: 'primary' },
            children: 'Save',
          },
          {
            type: 'Button',
            props: { variant: 'secondary' },
            children: 'Cancel',
          },
        ],
      };
      const element = renderComponent(config);
      const { container } = render(element);
      const buttons = container.querySelectorAll('button');
      expect(buttons).toHaveLength(2);
      expect(buttons[0]).toHaveTextContent('Save');
      expect(buttons[1]).toHaveTextContent('Cancel');
    });
  });

  describe('renderComponents', () => {
    it('should render multiple components', () => {
      const configs: ComponentConfig[] = [
        {
          type: 'Badge',
          props: { variant: 'success' },
          children: '4.5',
        },
        {
          type: 'Badge',
          props: { variant: 'warning' },
          children: '2.1',
        },
      ];
      const elements = renderComponents(configs);
      expect(elements).toHaveLength(2);
    });
  });
});
