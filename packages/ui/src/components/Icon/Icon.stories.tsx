import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { getIconsInCategory } from '../../tokens/icon-utils';
import type { IconName } from '../../tokens/icons';
import { iconCategories } from '../../tokens/icons';
import { SettingsCog, PlusCircleAdd } from '../../icons';
import type { IconTone } from './Icon';
import { Card } from '../Card';
import { PropsTable } from '../../tokens/PropsTable';
import { Button } from '../Button';
import { ListItem } from '../List/ListItem';

const meta: Meta<typeof Icon> = {
  title: 'Primitive Components/Icons',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Helper component to convert kebab-case to PascalCase
const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Helper component for icon cards
const IconCard: React.FC<{ name: IconName }> = ({ name }) => {
  const [copied, setCopied] = React.useState(false);
  const componentName = toPascalCase(name);

  const handleCopy = () => {
    navigator.clipboard.writeText(`<${componentName} />`);
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
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        minWidth: '120px',
      }}
      title={`Click to copy: <${componentName} />`}
    >
      <Icon name={name} size="xl" />
      <div
        style={{
          fontSize: '11px',
          color: 'var(--ai-color-text-secondary)',
          fontFamily: 'monospace',
          textAlign: 'center',
          wordBreak: 'break-word',
        }}
      >
        {componentName}
        {copied && (
          <span style={{ marginLeft: '4px', color: 'var(--ai-color-accent-green)' }}>✓</span>
        )}
      </div>
    </Card>
  );
};

// Main unified Icon story component
const IconsComponent: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>Icon System</h1>

      {/* How Icons Work Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>How Icons Work</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          This library includes 417 pre-built icon components covering 10 categories (arrows, interface, media, social,
          and more). All icons are properly distributed in the npm package and resolved at module runtime.
        </p>

        <div
          style={{
            backgroundColor: 'var(--ai-color-bg-blue-alpha)',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '13px',
          }}
        >
          <strong>✨ What's Changed:</strong> Icons now use module-relative URL resolution, ensuring they work
          perfectly in all environments (npm packages, monorepos, different build tools, etc.). SVG files are
          automatically resolved relative to the installed module location.
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Two Ways to Use Icons</h3>
        <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)' }}>
          Both approaches work identically - choose based on your use case:
        </p>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 600 }}>Option 1: Named Components (Recommended)</h4>
          <p style={{ fontSize: '13px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
            Import components by name for better tree-shaking and clearer code:
          </p>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`import { SettingsCog, PlusCircleAdd } from '@ainativekit/ui/icons';

<SettingsCog size="md" />
<PlusCircleAdd tone="primary" />`}</code>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 600 }}>Option 2: Dynamic Icon Names</h4>
          <p style={{ fontSize: '13px', marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
            Use the base Icon component when icon name comes from configuration or APIs:
          </p>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`import { Icon } from '@ainativekit/ui';

const iconName = getConfigValue('menuIcon');
<Icon name={iconName} size="md" />`}</code>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Icon Categories</h3>
        <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)' }}>
          All 417 icons are organized into these categories:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {iconCategories.map(category => (
            <div
              key={category}
              style={{
                backgroundColor: 'var(--ai-color-bg-secondary)',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '13px',
              }}
            >
              <strong style={{ textTransform: 'capitalize' }}>{category.replace('-', ' ')}</strong>
              <div style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)', marginTop: '4px' }}>
                {getIconsInCategory(category).length} icons
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Icon Gallery - shown next */}
      <section style={{ marginBottom: '64px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Click any icon below to copy its React component name. All icons are organized by category for easy browsing.
        </p>

        <div style={{ display: 'grid', gap: '48px' }}>
          {iconCategories.map(category => {
            const icons = getIconsInCategory(category);
            return (
              <section key={category}>
                <header style={{ marginBottom: '24px' }}>
                  <h2 style={{ marginBottom: '8px', textTransform: 'capitalize' }}>
                    {category.replace('-', ' ')} Icons
                  </h2>
                  <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                    {icons.length} icons available
                  </p>
                </header>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {icons.map(iconName => (
                    <IconCard key={iconName} name={iconName} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* Size Examples */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Sizes</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Icons support semantic size tokens and custom pixel values.
        </p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <PlusCircleAdd size={size} />
              <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
                size="{size}"
              </code>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <PlusCircleAdd size={32} />
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size={'{32}'}
            </code>
          </div>
        </div>
      </section>

      {/* Tone Examples */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Tones</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Icon colors map to text hierarchy tokens for consistent visual weight.
        </p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          {(['primary', 'secondary', 'tertiary', 'inverted'] as IconTone[]).map(tone => (
            <div key={tone} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <SettingsCog size="lg" tone={tone} />
              <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
                tone="{tone}"
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Common Patterns Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Common Patterns</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Real-world examples of how to use icons in your UI.
        </p>

        {/* Icon Before Text */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Icon Before Text</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            Most common pattern. Icon is decorative, button text provides accessible name.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" leftIcon="plus-circle-add">
              Add Item
            </Button>
            <Button variant="secondary" leftIcon="settings-cog">
              Settings
            </Button>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`<Button variant="primary" leftIcon="plus-circle-add">
  Add Item
</Button>`}</code>
          </div>
        </div>

        {/* Icon After Text */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Icon After Text</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            Common for actions that lead to external content or next steps.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="secondary" rightIcon="arrow-right-lg">
              View Details
            </Button>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`<Button variant="secondary" rightIcon="arrow-right-lg">
  View Details
</Button>`}</code>
          </div>
        </div>

        {/* Icon-Only Button */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Icon-Only Button</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            <strong>Important:</strong> The button needs aria-label for accessibility.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="secondary" iconOnly="close-bold" aria-label="Close dialog" />
            <Button variant="ghost" iconOnly="settings-cog" aria-label="Settings" />
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`<Button 
  variant="secondary" 
  iconOnly="close-bold" 
  aria-label="Close dialog" 
/>`}</code>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-yellow-alpha)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '13px',
            }}
          >
            <strong>⚠️ Accessibility:</strong> Icon-only buttons require aria-label for screen readers.
          </div>
        </div>

        {/* Icon in List Items */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Icon in List Items</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            Icons enhance visual hierarchy in lists and menus. Use ListItem component with icons.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {[
              { icon: 'user', label: 'Profile Settings' },
              { icon: 'notification-bell', label: 'Notifications' },
              { icon: 'shield-lock', label: 'Privacy & Security' },
            ].map((item, i) => (
              <ListItem
                key={i}
                title={item.label}
                media={<Icon name={item.icon as IconName} size="md" tone="secondary" />}
                interactive
                onClick={() => console.log(`Clicked ${item.label}`)}
              />
            ))}
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`import { ListItem } from '@ainativekit/ui';

<ListItem
  title="Profile Settings"
  media={<Icon name="user" size="md" tone="secondary" />}
  interactive
  onClick={handleClick}
/>`}</code>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-blue-alpha)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '13px',
            }}
          >
            <strong>💡 Tip:</strong> Use ListItem component for menu lists and settings screens. 
            It handles hover states, accessibility, and responsive layouts automatically.
          </div>
        </div>
      </section>

      {/* Interactive & Disabled States Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Interactive & Disabled States</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Icons can have hover/active effects when used as standalone interactive elements, or be visually disabled.
        </p>

        {/* Interactive Icons */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Interactive Icons</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            Use the <code>interactive</code> prop for standalone clickable icons. Hover and active states are automatically applied.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Icon name="settings-cog" size="lg" interactive onClick={() => alert('Settings clicked!')} />
              <span style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>Hover me</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Icon name="user-heart" size="lg" tone="primary" interactive onClick={() => alert('Favorited!')} />
              <span style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>Click me</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Icon name="book-bookmark" size="lg" tone="secondary" interactive onClick={() => alert('Bookmarked!')} />
              <span style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>Try clicking</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`<Icon 
  name="settings-cog" 
  size="lg" 
  interactive 
  onClick={() => alert('Clicked!')} 
/>`}</code>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-blue-alpha)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '13px',
            }}
          >
            <strong>💡 Tip:</strong> Interactive icons get hover opacity (0.8) and active scale (0.95) automatically.
          </div>
        </div>

        {/* Disabled Icons */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Disabled Icons</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            Use the <code>disabled</code> prop to visually indicate an icon is not available or inactive.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Icon name="download" size="lg" />
              <span style={{ fontSize: '14px' }}>Normal</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Icon name="download" size="lg" disabled />
              <span style={{ fontSize: '14px', color: 'var(--ai-color-text-tertiary)' }}>Disabled</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`<Icon name="download" size="lg" disabled />`}</code>
          </div>
        </div>

        {/* Combined Example */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Interactive + Disabled States</h3>
          <p style={{ marginBottom: '16px', color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
            When both <code>interactive</code> and <code>disabled</code> are set, disabled takes precedence.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Icon name="trash-remove" size="lg" tone="primary" interactive onClick={() => alert('Delete!')} />
              <span style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>Active</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Icon name="trash-remove" size="lg" tone="primary" interactive disabled onClick={() => alert('Cannot delete')} />
              <span style={{ fontSize: '12px', color: 'var(--ai-color-text-tertiary)' }}>Disabled</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: 'monospace',
              whiteSpace: 'pre',
            }}
          >
            <code>{`// Active state
<Icon name="trash-remove" interactive onClick={handleDelete} />

// Disabled state  
<Icon name="trash-remove" interactive disabled onClick={handleDelete} />`}</code>
          </div>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-yellow-alpha)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '13px',
            }}
          >
            <strong>⚠️ Note:</strong> Disabled state prevents hover effects AND blocks onClick handlers from executing.
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Usage</h2>
        
        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
          Named Components (Recommended)
        </h3>
        <p style={{ marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
          Import named components directly for maximum tree-shaking and clearer JSX:
        </p>
        <div
          style={{
            backgroundColor: 'var(--ai-color-bg-secondary)',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            overflow: 'auto',
            marginBottom: '24px',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
          }}
        >
          <code>{`import { SettingsCog, PlusCircleAdd, Search } from '@ainativekit/ui/icons';

<SettingsCog size="md" />
<PlusCircleAdd size={24} />
<Search tone="secondary" />`}</code>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
          Dynamic Icon Names
        </h3>
        <p style={{ marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
          Use the base Icon component when the icon name comes from configuration or CMS:
        </p>
        <div
          style={{
            backgroundColor: 'var(--ai-color-bg-secondary)',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            overflow: 'auto',
            marginBottom: '24px',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
          }}
        >
          <code>{`import { Icon } from '@ainativekit/ui';

const iconName = getIconNameFromConfig();

<Icon name={iconName} size="md" />`}</code>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
          Accessibility Best Practices
        </h3>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '16px', marginTop: '24px' }}>
            🎯 Three Icon Accessibility Patterns
          </h4>

          {/* Pattern 1: Decorative */}
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '16px',
            }}
          >
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
              1. Decorative Icons (Most Common - Default)
            </h5>
            <p style={{ fontSize: '13px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Icons that add visual interest but don't convey unique information. The icon automatically gets aria-hidden="true".
            </p>
            <div
              style={{
                backgroundColor: 'var(--ai-color-bg-primary)',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                marginBottom: '8px',
              }}
            >
              <code>{`<Button variant="primary" leftIcon="plus-circle-add">
  Add Item
</Button>`}</code>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ai-color-accent-green)' }}>
              ✅ Icon is automatically aria-hidden, button text provides accessible name
            </div>
          </div>

          {/* Pattern 2: Icon-Only Buttons */}
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '16px',
            }}
          >
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
              2. Icon-Only Buttons
            </h5>
            <p style={{ fontSize: '13px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Interactive icons without visible text need accessible names on the parent element.
            </p>
            <div
              style={{
                backgroundColor: 'var(--ai-color-bg-primary)',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                marginBottom: '8px',
              }}
            >
              <code>{`<Button 
  iconOnly="close-bold" 
  aria-label="Close dialog" 
/>`}</code>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ai-color-accent-green)' }}>
              ✅ Button has aria-label, icon remains decorative (aria-hidden)
            </div>
          </div>

          {/* Pattern 3: Standalone Meaningful */}
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '16px',
            }}
          >
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
              3. Standalone Meaningful Icons
            </h5>
            <p style={{ fontSize: '13px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Icons that convey information independently (rare). Provide explicit aria-label on the icon.
            </p>
            <div
              style={{
                backgroundColor: 'var(--ai-color-bg-primary)',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                marginBottom: '8px',
              }}
            >
              <code>{`<Icon 
  name="warning" 
  aria-label="Warning: Action required" 
/>`}</code>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ai-color-accent-green)' }}>
              ✅ Icon has explicit aria-label and role="img" (not aria-hidden)
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div
          style={{
            backgroundColor: 'var(--ai-color-bg-yellow-alpha)',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
          }}
        >
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
            ⚠️ Common Mistakes to Avoid
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px' }}>
            <li style={{ marginBottom: '8px' }}>
              <code style={{ color: 'red', backgroundColor: 'rgba(255,0,0,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                ❌ {'<Button iconOnly="close-bold" />'}
              </code>
              <br />
              <span style={{ color: 'var(--ai-color-text-secondary)', fontSize: '12px' }}>
                Icon-only button has no accessible name - missing aria-label for screen reader users
              </span>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <code style={{ color: 'red', backgroundColor: 'rgba(255,0,0,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                ❌ {'<Icon name="settings" aria-label="Settings icon" />'}
              </code>
              <br />
              <span style={{ color: 'var(--ai-color-text-secondary)', fontSize: '12px' }}>
                Don't say "icon" in the label - screen readers already announce it as an image
              </span>
            </li>
            <li>
              <code style={{ color: 'red', backgroundColor: 'rgba(255,0,0,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                ❌ {'<Icon name="check" aria-hidden="true" aria-label="Complete" />'}
              </code>
              <br />
              <span style={{ color: 'var(--ai-color-text-secondary)', fontSize: '12px' }}>
                Can't be both hidden and labeled - choose one pattern
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Props</h2>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'size',
              description: 'Icon size. Accepts semantic tokens ("xs", "sm", "md", "lg", "xl") or pixel numbers (16, 24, 32, etc.). Default: "md" (24px)',
            },
            {
              name: 'tone',
              description: 'Icon color mapped to text hierarchy. Options: "primary" (default), "secondary", "tertiary", "inverted"',
            },
            {
              name: 'name',
              description: 'Icon name (kebab-case) when using dynamic <Icon /> component. Not needed for named components.',
            },
            {
              name: 'aria-label',
              description: 'Required for interactive icons. Provides accessible name for screen readers.',
            },
            {
              name: 'className',
              description: 'Additional CSS classes for custom styling',
            },
          ]}
        />
      </section>
    </div>
  );
};

export const Icons: StoryObj = {
  render: () => <IconsComponent />,
};
