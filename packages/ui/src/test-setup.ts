import '@testing-library/jest-dom';

// React 19 Testing Setup
// Disable the deprecated ReactDOMTestUtils.act warning since we're using React 19
// where act is properly exported from 'react' directly
process.env.NODE_ENV = 'test';

// Mock window.matchMedia for theme detection tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});
