import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonVariant } from './Button';
import { Card } from '../Card';
import { PropsTable } from '../../tokens/PropsTable';
import type { IconName } from '../../tokens/icons';

const meta: Meta<typeof Button> = {
  title: 'Primitive Components/Buttons',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Helper component for button showcase cards
const ButtonCard: React.FC<{
  variant: ButtonVariant;
  children: React.ReactNode;
  label: string;
  description: string;
  leftIcon?: string;
  rightIcon?: string;
}> = ({ variant, children, label, description, leftIcon, rightIcon }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const iconProps = leftIcon
      ? ` leftIcon="${leftIcon}"`
      : rightIcon
        ? ` rightIcon="${rightIcon}"`
        : '';
    const code = `<Button variant="${variant}"${iconProps}>${typeof children === 'string' ? children : '...'}</Button>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      elevationLevel={1}
      interactive
      onClick={handleCopy}
      style={{
        cursor: 'pointer',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        minWidth: '180px',
      }}
      title="Click to copy code"
    >
      <Button variant={variant} leftIcon={leftIcon as IconName | undefined} rightIcon={rightIcon as IconName | undefined}>
        {children}
      </Button>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          {label}
          {copied && (
            <span style={{ marginLeft: '4px', color: 'var(--ai-color-accent-green)' }}>✓</span>
          )}
        </div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--ai-color-text-secondary)',
            lineHeight: '1.4',
          }}
        >
          {description}
        </div>
      </div>
    </Card>
  );
};

// Main unified Button showcase component
const ButtonsComponent: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>Button System</h1>

      {/* Button Gallery */}
      <section style={{ marginBottom: '64px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Versatile, accessible buttons for actions and interactions. Click any button card to copy
          its code.
        </p>

        {/* Variants Section */}
        <div style={{ marginBottom: '48px' }}>
          <header style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '8px' }}>Button Variants</h2>
            <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
              4 variants available for different use cases
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '16px',
            }}
          >
            <ButtonCard variant="primary" label="Primary" description="Main actions & CTAs">
              Get Started
            </ButtonCard>
            <ButtonCard
              variant="secondary"
              label="Secondary"
              description="Alternative actions"
            >
              Learn More
            </ButtonCard>
            <ButtonCard variant="tertiary" label="Tertiary" description="Subtle actions">
              Settings
            </ButtonCard>
            <ButtonCard variant="ghost" label="Ghost" description="Minimal actions">
              Cancel
            </ButtonCard>
          </div>
        </div>

        {/* Icon Combinations */}
        <div style={{ marginBottom: '48px' }}>
          <header style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '8px' }}>With Icons</h3>
            <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
              Combine text with left or right icons for better clarity
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '16px',
            }}
          >
            <ButtonCard
              variant="primary"
              leftIcon="plus-circle-add"
              label="Left Icon"
              description="Icon before text"
            >
              Add Item
            </ButtonCard>
            <ButtonCard
              variant="primary"
              rightIcon="arrow-right-sm"
              label="Right Icon"
              description="Icon after text"
            >
              Continue
            </ButtonCard>
            <ButtonCard
              variant="secondary"
              leftIcon="filter"
              label="Secondary + Icon"
              description="Outlined with icon"
            >
              Filter
            </ButtonCard>
            <ButtonCard
              variant="tertiary"
              leftIcon="settings-cog"
              label="Tertiary + Icon"
              description="Subtle with icon"
            >
              Settings
            </ButtonCard>
          </div>
        </div>
      </section>

      {/* Interactive States */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Interactive States</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          All buttons support hover, active, and disabled states. Try interacting with them!
        </p>

        <div style={{ display: 'grid', gap: '32px' }}>
          {/* Primary States */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Primary Variant</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="primary">Default</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  Default
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="primary">Hover Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :hover
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="primary">Click Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :active
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  disabled
                </code>
              </div>
            </div>
          </div>

          {/* Secondary States */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Secondary Variant</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="secondary">Default</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  Default
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="secondary">Hover Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :hover
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="secondary">Click Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :active
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  disabled
                </code>
              </div>
            </div>
          </div>

          {/* Tertiary States */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Tertiary Variant</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="tertiary">Default</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  Default
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="tertiary">Hover Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :hover
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="tertiary">Click Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :active
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="tertiary" disabled>
                  Disabled
                </Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  disabled
                </code>
              </div>
            </div>
          </div>

          {/* Ghost States */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Ghost Variant</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="ghost">Default</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  Default
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="ghost">Hover Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :hover
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="ghost">Click Me</Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  :active
                </code>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Button variant="ghost" disabled>
                  Disabled
                </Button>
                <code style={{ fontSize: '11px', color: 'var(--ai-color-text-secondary)' }}>
                  disabled
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon-Only Buttons */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Icon-Only Buttons</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Circular 44×44 buttons with icons only.{' '}
          <strong>Always provide an aria-label for accessibility.</strong>
        </p>

        <div style={{ display: 'grid', gap: '32px' }}>
          {/* Ghost Icon Buttons */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Ghost Icon Buttons (Minimal)</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit" />
              <Button variant="ghost" iconOnly="settings-cog" aria-label="Settings" />
              <Button variant="ghost" iconOnly="close-bold" aria-label="Close" />
              <Button variant="ghost" iconOnly="filter" aria-label="Filter" />
              <Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit" disabled />
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--ai-color-text-secondary)' }}>
              Perfect for headers, toolbars, and minimal interfaces
            </div>
          </div>

          {/* Tertiary Icon Buttons */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Tertiary Icon Buttons (With Background)</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="tertiary" iconOnly="plus-circle-add" aria-label="Add" />
              <Button variant="tertiary" iconOnly="settings-cog" aria-label="Settings" />
              <Button variant="tertiary" iconOnly="close-bold" aria-label="Close" />
              <Button variant="tertiary" iconOnly="filter" aria-label="Filter" />
              <Button variant="tertiary" iconOnly="plus-circle-add" aria-label="Add" disabled />
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--ai-color-text-secondary)' }}>
              More visible than ghost, good for action buttons in lists
            </div>
          </div>

          {/* Primary & Secondary Icon Buttons */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Primary & Secondary Icon Buttons</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary" iconOnly="plus-circle-add" aria-label="Add" />
              <Button variant="secondary" iconOnly="settings-cog" aria-label="Settings" />
              <Button variant="primary" iconOnly="close-bold" aria-label="Close" />
              <Button variant="secondary" iconOnly="filter" aria-label="Filter" />
              <Button variant="primary" iconOnly="settings-cog" aria-label="Settings" disabled />
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--ai-color-text-secondary)' }}>
              Use sparingly for high-emphasis icon actions
            </div>
          </div>

          {/* Code Example */}
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-tertiary)',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}
          >
            <div style={{ marginBottom: '8px', color: 'var(--ai-color-text-secondary)' }}>
              ✅ Always provide aria-label:
            </div>
            <code>{`<Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit" />`}</code>
            <div style={{ marginTop: '12px', marginBottom: '8px', color: 'var(--ai-color-text-secondary)' }}>
              ❌ Missing aria-label (inaccessible):
            </div>
            <code style={{ textDecoration: 'line-through', opacity: 0.5 }}>
              {`<Button variant="ghost" iconOnly="edit-pencil" />`}
            </code>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Real-World Examples</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          See buttons in common UI patterns and contexts.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Form Actions */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Form Actions</h3>
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '12px',
                maxWidth: '400px',
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--ai-color-border-heavy)',
                    backgroundColor: 'var(--ai-color-bg-primary)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Call to Action</h3>
            <div
              style={{
                padding: '32px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '12px',
                textAlign: 'center',
                maxWidth: '500px',
              }}
            >
              <h4 style={{ marginBottom: '8px', fontSize: '18px' }}>Ready to get started?</h4>
              <p style={{ marginBottom: '20px', color: 'var(--ai-color-text-secondary)' }}>
                Create your first AI-powered ChatGPT app today
              </p>
              <Button variant="primary" rightIcon="arrow-right-sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* List Item Actions */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>List Item Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '500px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--ai-color-bg-secondary)',
                      borderRadius: '6px',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Project Alpha</div>
                    <div style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
                      Last updated 2h ago
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit project" />
                  <Button variant="ghost" iconOnly="settings-cog" aria-label="Project settings" />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--ai-color-bg-secondary)',
                      borderRadius: '6px',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Project Beta</div>
                    <div style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
                      Last updated 1d ago
                    </div>
                  </div>
                </div>
                <Button variant="tertiary" iconOnly="plus-circle-add" aria-label="Add to favorites" />
              </div>
            </div>
          </div>

          {/* Toolbar Actions */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Toolbar Actions</h3>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '12px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
                maxWidth: '500px',
              }}
            >
              <Button variant="tertiary" leftIcon="plus-circle-add">
                Add New
              </Button>
              <Button variant="tertiary" leftIcon="filter">
                Filter
              </Button>
              <Button variant="tertiary" leftIcon="settings-cog">
                Settings
              </Button>
              <div style={{ marginLeft: 'auto' }}>
                <Button variant="ghost" iconOnly="close-bold" aria-label="Close toolbar" />
              </div>
            </div>
          </div>

          {/* Dialog Actions */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Dialog/Modal Actions</h3>
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '12px',
                maxWidth: '400px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600 }}>Delete Project?</h4>
                <Button variant="ghost" iconOnly="close-bold" aria-label="Close dialog" />
              </div>
              <p style={{ marginBottom: '20px', fontSize: '14px', color: 'var(--ai-color-text-secondary)' }}>
                This action cannot be undone. Are you sure you want to permanently delete this project?
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Usage Guide</h2>

        {/* Import */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Import</h3>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-tertiary)',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}
          >
            <code>{`import { Button } from '@ainativekit/ui';`}</code>
            <br />
            <code style={{ opacity: 0.7 }}>{`// or`}</code>
            <br />
            <code>{`import { Button } from '@ainativekit/ui/primitives';`}</code>
          </div>
        </div>

        {/* When to Use Button vs Link */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Button vs Link: When to Use Each</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ai-color-accent-green)' }}>
                ✅ Use Button for:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Triggering actions (submit form, open modal, delete item)</li>
                <li>Toggling states (play/pause, expand/collapse)</li>
                <li>JavaScript interactions (onClick handlers)</li>
                <li>Form submissions</li>
              </ul>
            </div>

            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ai-color-accent-blue)' }}>
                ℹ️ Use Link (anchor tag) for:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Navigation to different pages/URLs</li>
                <li>Opening external resources</li>
                <li>Anything with an href attribute</li>
                <li>Content that should work without JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility Best Practices */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Accessibility Best Practices</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            {/* Icon-only aria-label */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                1. Icon-only buttons MUST have aria-label
              </div>
              <div style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
                Screen readers need text alternatives for icon-only buttons.
              </div>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '12px',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                }}
              >
                <div style={{ color: 'var(--ai-color-accent-green)', marginBottom: '4px' }}>
                  ✅ Good:
                </div>
                <code>{`<Button iconOnly="edit-pencil" aria-label="Edit document" />`}</code>
                <div style={{ marginTop: '12px', color: 'var(--ai-color-text-error)', marginBottom: '4px' }}>
                  ❌ Bad:
                </div>
                <code style={{ opacity: 0.5 }}>{`<Button iconOnly="edit-pencil" />`}</code>
              </div>
            </div>

            {/* Disabled state */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                2. Use disabled attribute for disabled buttons
              </div>
              <div style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
                The <code>disabled</code> attribute removes the button from keyboard navigation and
                prevents all interactions.
              </div>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '12px',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                }}
              >
                <code>{`<Button disabled>Cannot Click</Button>`}</code>
              </div>
            </div>

            {/* Focus visible */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                3. Keyboard focus is automatically visible
              </div>
              <div style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)' }}>
                Try tabbing through the buttons on this page - you'll see focus indicators for keyboard
                navigation.
              </div>
            </div>

            {/* Clear labels */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                4. Use clear, action-oriented labels
              </div>
              <div style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
                Button labels should clearly indicate what will happen when clicked.
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--ai-color-accent-green)', marginBottom: '4px' }}>
                    ✅ Good:
                  </div>
                  <Button variant="primary">Save Changes</Button>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--ai-color-text-error)', marginBottom: '4px' }}>
                    ❌ Vague:
                  </div>
                  <Button variant="primary">OK</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Patterns */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Common Patterns</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            {/* Primary + Secondary */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                Primary + Secondary for actions
              </div>
              <div style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
                Use primary for the main action, secondary for alternatives.
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Confirm</Button>
              </div>
            </div>

            {/* Icon + Text */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                Icons for visual clarity
              </div>
              <div style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
                Add icons to reinforce the button's action (especially for common actions).
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="primary" leftIcon="plus-circle-add">
                  Add Item
                </Button>
                <Button variant="tertiary" leftIcon="filter">
                  Filter
                </Button>
                <Button variant="primary" rightIcon="arrow-right-sm">
                  Next Step
                </Button>
              </div>
            </div>

            {/* Ghost for minimal */}
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                Ghost for minimal interfaces
              </div>
              <div style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
                Use ghost buttons in headers, toolbars, and minimal UIs.
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit" />
                <Button variant="ghost" iconOnly="settings-cog" aria-label="Settings" />
                <Button variant="ghost" iconOnly="close-bold" aria-label="Close" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Props Table */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Props</h2>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'variant',
              description: `Visual variant of the button. Options: "primary" (filled, main actions), "secondary" (outlined, alternatives), "tertiary" (subtle background), "ghost" (minimal). Default: "primary"`,
            },
            {
              name: 'leftIcon',
              description: 'Icon to display before the button text (IconName). See Icon component for available icons. Example: leftIcon="plus-circle-add"',
            },
            {
              name: 'rightIcon',
              description: 'Icon to display after the button text (IconName). Commonly used for directional actions. Example: rightIcon="arrow-right-sm"',
            },
            {
              name: 'iconOnly',
              description: 'Render as a circular 44×44 icon-only button (IconName). When set, children are ignored and aria-label is REQUIRED for accessibility.',
            },
            {
              name: 'disabled',
              description: 'Disables the button (boolean), preventing interaction and removing it from keyboard navigation. Default: false',
            },
            {
              name: 'children',
              description: 'Button label text (ReactNode). Ignored when iconOnly is set.',
            },
            {
              name: 'aria-label',
              description: 'Accessible label for screen readers (string). REQUIRED when using iconOnly. Provides context for icon-only buttons.',
            },
            {
              name: 'type',
              description: `HTML button type: "button" (default), "submit", or "reset". Use "submit" for form submissions.`,
            },
            {
              name: 'onClick',
              description: 'Click event handler function: (event: MouseEvent) => void',
            },
            {
              name: 'className',
              description: 'Additional CSS classes to apply (string).',
            },
          ]}
        />

        <div
          style={{
            marginTop: '16px',
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
            fontSize: '14px',
            color: 'var(--ai-color-text-secondary)',
          }}
        >
          <strong>Note:</strong> Button also supports all standard HTML button attributes (disabled,
          type, onClick, onFocus, onBlur, etc.) via <code>ComponentPropsWithoutRef&lt;'button'&gt;</code>.
        </div>
      </section>
    </div>
  );
};

export const Buttons: StoryObj = {
  render: () => <ButtonsComponent />,
};
