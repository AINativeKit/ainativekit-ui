import React from 'react';
import type { Meta } from '@storybook/react';
import { Alert } from './Alert';
import { Card } from '../Card';
import { PropsTable } from '../../tokens/PropsTable';

const meta: Meta<typeof Alert> = {
  title: 'Primitive Components',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Main showcase component
const AlertShowcaseComponent: React.FC = () => {
  const [retryCount, setRetryCount] = React.useState(0);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    console.log('Retry clicked', retryCount + 1);
  };

  const handleDismiss = () => {
    console.log('Dismissed');
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Introduction */}
      <header style={{ marginBottom: '48px' }}>
        <h1 style={{ marginBottom: '16px', fontSize: '32px', fontWeight: 600 }}>Alert System</h1>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.6', 
          color: 'var(--ai-color-text-subtle)',
          maxWidth: '800px'
        }}>
          Display feedback messages for various states: errors, warnings, informational messages, and success confirmations.
          Follows industry standards from Material UI, Chakra UI, and Ant Design.
        </p>
      </header>

      {/* All Variants Section */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>All Variants</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Four severity levels with appropriate colors and icons
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '12px',
          maxWidth: '400px'
        }}>
          <Alert 
            variant="error"
            title="Error"
            message="Something went wrong. Please try again."
            onAction={handleRetry}
          />

          <Alert 
            variant="warning"
            title="Warning"
            message="Your session will expire in 5 minutes."
          />

          <Alert 
            variant="info"
            title="Information"
            message="New features are now available in settings."
            onAction={handleDismiss}
            actionLabel="Got it"
          />

          <Alert 
            variant="success"
            title="Success"
            message="Your changes have been saved successfully."
          />
        </div>
      </section>

      {/* Simple Messages */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Simple Messages</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Auto-generated titles, message-only display
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '12px',
          maxWidth: '400px'
        }}>
          <Alert 
            variant="error"
            message="Unable to connect to server"
          />

          <Alert 
            variant="warning"
            message="Unsaved changes will be lost"
          />

          <Alert 
            variant="info"
            message="Update available for download"
          />

          <Alert 
            variant="success"
            message="File uploaded successfully"
          />
        </div>
      </section>

      {/* With Actions */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>With Action Buttons</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Add retry, dismiss, or other actions
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '12px',
          maxWidth: '400px'
        }}>
          <Alert 
            variant="error"
            title="Connection failed"
            message="Check your internet connection and try again."
            onAction={handleRetry}
            actionLabel="Retry"
          />

          <Alert 
            variant="warning"
            title="Storage almost full"
            message="Only 10% storage remaining. Consider upgrading."
            onAction={handleDismiss}
            actionLabel="Upgrade Now"
          />

          <Alert 
            variant="info"
            title="New version available"
            message="Version 2.0 is ready to install with new features."
            onAction={handleDismiss}
            actionLabel="Update"
          />

          <Alert 
            variant="success"
            title="Payment received"
            message="Your payment of $49.99 was processed successfully."
            onAction={handleDismiss}
            actionLabel="View Receipt"
          />
        </div>

        {retryCount > 0 && (
          <p style={{ 
            marginTop: '16px', 
            fontSize: '13px', 
            color: 'var(--ai-color-text-subtle)' 
          }}>
            ↑ Retry clicked {retryCount} time{retryCount > 1 ? 's' : ''}
          </p>
        )}
      </section>

      {/* Center Layout */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Center Layout</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Centered content without additional card styling
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '12px',
          maxWidth: '400px'
        }}>
          <Alert
            variant="error"
            layout="center"
            title="Connection Error"
            message="Unable to connect to the server"
            onAction={handleRetry}
            actionLabel="Retry"
          />

          <Alert
            variant="info"
            layout="center"
            title="Update Available"
            message="A new version is ready to install"
            onAction={handleDismiss}
            actionLabel="Update Now"
          />

          <Alert
            variant="success"
            layout="center"
            title="Operation Complete"
            message="Your request has been processed"
          />
        </div>
      </section>

      {/* Card Layout */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Card Layout</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Centered layout with card container styling (padding, min-height)
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <Card elevationLevel="1">
            <Alert
              variant="error"
              layout="card"
              title="No results found"
              message="Try adjusting your search filters"
            />
          </Card>

          <Card elevationLevel="1">
            <Alert
              variant="warning"
              layout="card"
              title="Limited access"
              message="Upgrade to view this content"
              onAction={handleDismiss}
              actionLabel="Upgrade"
            />
          </Card>

          <Card elevationLevel="1">
            <Alert
              variant="success"
              layout="card"
              title="All caught up!"
              message="You've read all notifications"
            />
          </Card>
        </div>
      </section>

      {/* Without Icons */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Without Icons</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Hide icons for minimal design
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '12px',
          maxWidth: '400px'
        }}>
          <Alert 
            variant="error"
            hideIcon
            message="Error occurred"
          />

          <Alert 
            variant="warning"
            hideIcon
            message="Warning message"
          />

          <Alert 
            variant="info"
            hideIcon
            message="Informational message"
          />

          <Alert 
            variant="success"
            hideIcon
            message="Success message"
          />
        </div>
      </section>

      {/* Custom Icons */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Custom Icons</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Override default icons with custom SVGs
          </p>
        </header>

        <div style={{ maxWidth: '400px' }}>
          <Alert 
            variant="info"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            }
            title="Featured"
            message="This is a featured announcement"
          />
        </div>
      </section>

      {/* Props Documentation */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Props</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Complete props reference for the Alert component
          </p>
        </header>

        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'variant',
              description: 'Alert severity/type. Options: "error" | "warning" | "info" | "success". Default: "error"',
            },
            {
              name: 'layout',
              description: 'Layout style. Options: "default" (left-aligned) | "center" (centered without card styling) | "card" (centered with card styling). Default: "default"',
            },
            {
              name: 'title',
              description: 'Alert heading. Auto-generated based on variant if not provided.',
            },
            {
              name: 'message',
              description: 'Detailed alert message or description.',
            },
            {
              name: 'onAction',
              description: 'Optional action handler. Shows action button when provided.',
            },
            {
              name: 'actionLabel',
              description: 'Label for the action button. Defaults to variant-specific label if not provided.',
            },
            {
              name: 'icon',
              description: 'Custom icon element to display instead of default variant icon.',
            },
            {
              name: 'hideIcon',
              description: 'Hide the icon completely for minimal design. Default: false',
            },
            {
              name: 'className',
              description: 'Additional CSS classes to apply.',
            },
            {
              name: 'data-testid',
              description: 'Test ID for automated testing.',
            },
          ]}
        />
      </section>

      {/* Best Practices */}
      <section style={{ marginBottom: '48px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Best Practices</h2>
        </header>

        <div style={{ display: 'grid', gap: '24px' }}>
          <div>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              marginBottom: '12px',
              color: 'var(--ai-color-success-default)'
            }}>
              ✓ Do
            </h3>
            <ul style={{
              margin: 0,
              paddingLeft: '24px',
              fontSize: '14px',
              lineHeight: '1.8',
              color: 'var(--ai-color-text-default)'
            }}>
              <li>Use appropriate variant for the situation (error for failures, success for confirmations)</li>
              <li>Keep messages concise and actionable</li>
              <li>Provide action buttons for errors that users can recover from</li>
              <li>Use "default" layout for inline/inline alerts in normal content flow</li>
              <li>Use "center" layout for centered alerts without container styling</li>
              <li>Use "card" layout when alert is the main content of a card container</li>
              <li>Include clear titles that summarize the alert purpose</li>
            </ul>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              marginBottom: '12px',
              color: 'var(--ai-color-error-default)'
            }}>
              ✗ Don't
            </h3>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '24px',
              fontSize: '14px',
              lineHeight: '1.8',
              color: 'var(--ai-color-text-default)'
            }}>
              <li>Don't use warnings for critical errors - use error variant</li>
              <li>Don't write long paragraphs - keep messages brief</li>
              <li>Don't hide important errors - make them visible</li>
              <li>Don't use success alerts for trivial actions</li>
              <li>Don't forget to provide action buttons for recoverable errors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>Accessibility</h2>
          <p style={{ color: 'var(--ai-color-text-subtle)', margin: 0, fontSize: '14px' }}>
            Alert component follows WCAG 2.1 AA guidelines
          </p>
        </header>

        <ul style={{ 
          margin: 0, 
          paddingLeft: '24px',
          fontSize: '14px',
          lineHeight: '1.8',
          color: 'var(--ai-color-text-default)'
        }}>
          <li><code>role="alert"</code> - Announces alert to screen readers</li>
          <li><code>aria-live="polite"</code> - Non-intrusive announcements</li>
          <li><code>aria-hidden="true"</code> on icons - Icons are decorative</li>
          <li>Sufficient color contrast ratios (WCAG AA compliant)</li>
          <li>Clear focus indicators on action buttons</li>
          <li>Keyboard accessible action buttons</li>
        </ul>
      </section>
    </div>
  );
};

export const Alerts = () => <AlertShowcaseComponent />;
