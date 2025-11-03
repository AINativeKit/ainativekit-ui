/**
 * @ainativekit/ui
 * AI Native Kit - Component library for AI-powered applications
 */

// Import CSS tokens
import './tokens/tokens.css';

export const version = '0.1.0';

// Export all design tokens
export * from './tokens';

// Export all components (industry standard flat structure)
export * from './components';

// Export hooks
export * from './hooks/openai';

// Export providers
export * from './providers';

// Export utilities (including JSON-to-component rendering)
export * from './utils';
