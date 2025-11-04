# **Complete Guide to `useOpenAiGlobal` Hook**

## **Overview**

The `useOpenAiGlobal` hook provides reactive access to ChatGPT's `window.openai` global object in widget components. It uses React 18's `useSyncExternalStore` to automatically re-render when ChatGPT updates the global state, ensuring your widget stays in sync with ChatGPT's state changes.

## **The Data Flow**

```
MCP Server Tool
    ↓ (returns structuredContent)
ChatGPT
    ↓ (populates window.openai.toolOutput)
    ↓ (dispatches "openai:set_globals" event)
useOpenAiGlobal Hook
    ↓ (listens for changes)
    ↓ (triggers React re-render)
Your Widget Component
    ↓ (receives fresh data)
Rendered Output
```

---

## **Quick Start**

### **1. Server Side - Return `structuredContent`**

```tsx
// In your MCP server tool handler
return {
  content: [
    {
      type: 'text',
      text: 'Tool execution successful',
    }
  ],
  structuredContent: {
    // This data becomes available in window.openai.toolOutput
    items: [...],
    metadata: {...},
    summary: 'Results summary'
  },
  _meta: {
    'openai/outputTemplate': 'ui://widget/your-widget.html',
  },
};
```

### **2. Widget Side - Use the Hook**

```tsx
import { useOpenAiGlobal } from '@ainativekit/ui';

function YourWidget() {
  const toolOutput = useOpenAiGlobal('toolOutput');

  if (!toolOutput) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h2>{toolOutput.summary}</h2>
      <ul>
        {toolOutput.items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## **Data Structure Patterns**

`structuredContent` is completely flexible — each tool and widget pair can define their own custom data structure based on their needs. Here are common patterns:

### **Pattern: Search Results**

```tsx
// Server
return {
  content: [...],
  structuredContent: {
    results: [
      { id: '1', title: 'Result 1', url: 'https://...' },
      { id: '2', title: 'Result 2', url: 'https://...' }
    ],
    totalCount: 42,
    query: 'user search term'
  }
};

// Widget
interface SearchResults {
  results: Array<{ id: string; title: string; url: string }>;
  totalCount: number;
  query: string;
}

const data = useOpenAiGlobal('toolOutput') as SearchResults | null;
```

### **Pattern: Map/Location Data**

```tsx
// Server
return {
  content: [...],
  structuredContent: {
    locations: [
      {
        id: '123',
        name: 'Coffee Shop',
        lat: -33.8688,
        lng: 151.2093,
        address: '123 Main St',
        rating: 4.5
      }
    ],
    center: { lat: -33.8688, lng: 151.2093 },
    zoom: 15
  }
};

// Widget
interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  rating: number;
}

interface MapData {
  locations: Location[];
  center: { lat: number; lng: number };
  zoom: number;
}

const data = useOpenAiGlobal('toolOutput') as MapData | null;
```

### **Pattern: Product/E-commerce**

```tsx
// Server
return {
  content: [...],
  structuredContent: {
    product: {
      id: 'prod-123',
      name: 'Laptop',
      price: 1299.99,
      currency: 'USD',
      images: ['image1.jpg', 'image2.jpg'],
      specs: { cpu: 'Intel i7', ram: '16GB' }
    },
    reviews: [
      { rating: 5, comment: 'Great!' }
    ],
    inStock: true
  }
};

// Widget
interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  images: string[];
  specs: Record<string, string>;
}

interface ProductData {
  product: Product;
  reviews: Array<{ rating: number; comment: string }>;
  inStock: boolean;
}

const data = useOpenAiGlobal('toolOutput') as ProductData | null;
```

### **Pattern: Analytics/Dashboard**

```tsx
// Server
return {
  content: [...],
  structuredContent: {
    metrics: {
      revenue: 15000,
      users: 1200,
      conversion: 0.035
    },
    chart: {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [
        { label: 'Revenue', data: [1000, 1200, 1500] }
      ]
    },
    timeRange: '30d'
  }
};

// Widget
interface Analytics {
  metrics: {
    revenue: number;
    users: number;
    conversion: number;
  };
  chart: {
    labels: string[];
    datasets: Array<{ label: string; data: number[] }>;
  };
  timeRange: string;
}

const data = useOpenAiGlobal('toolOutput') as Analytics | null;
```

### **Pattern: Weather Data**

```tsx
// Server
return {
  content: [...],
  structuredContent: {
    location: 'Sydney, NSW',
    current: {
      temp: 22,
      condition: 'Partly Cloudy',
      humidity: 65
    },
    forecast: [
      { day: 'Tomorrow', high: 24, low: 18, condition: 'Sunny' }
    ]
  }
};

// Widget
interface WeatherData {
  location: string;
  current: {
    temp: number;
    condition: string;
    humidity: number;
  };
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
  }>;
}

const data = useOpenAiGlobal('toolOutput') as WeatherData | null;
```

### **Design Best Practices**

```tsx
// ✅ DO: Simple, flat structures where possible
interface GoodData {
  items: Item[];
  metadata: Metadata;
}

// ❌ AVOID: Overly nested structures
interface BadData {
  data: {
    results: {
      items: {
        values: Item[]
      }
    }
  };
}

// ✅ DO: Use consistent, clear naming
interface ConsistentData {
  users: User[];           // Plural for arrays
  totalCount: number;      // camelCase, not snake_case
  createdAt: string;       // ISO dates
  status: 'active' | 'inactive';  // Specific types, not string
}

// ✅ DO: Add UI-aware metadata
interface UIFriendlyData {
  items: Item[];
  displayMode: 'grid' | 'list';  // Tells widget how to render
  totalPages: number;            // Helps with pagination
  sortBy: 'date' | 'relevance';  // Helps with sorting
}

// ✅ DO: Use specific types for type safety
interface SpecificData {
  price: number;           // Not any
  status: 'active' | 'inactive';  // Not generic string
  tags: string[];          // Not Record<string, any>
}
```

### **Generic vs Specific Structures**

```tsx
// Generic (flexible but less type-safe)
interface GenericResult {
  items: Array<Record<string, unknown>>;
  metadata: Record<string, unknown>;
}

// Specific (more type-safe, better DX)
interface SpecificResult {
  items: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  metadata: {
    totalCount: number;
    pageSize: number;
  };
}

// Recommendation: Use specific types for better TypeScript support
// and a better developer experience
```

---

## **Hook API**

### **Full Hook Implementation**

```tsx
import { useSyncExternalStore } from 'react';

export const SET_GLOBALS_EVENT_TYPE = 'openai:set_globals';

export type SetGlobalsEvent = CustomEvent<{
  globals: Partial<OpenAiGlobals>;
}>;

export type OpenAiGlobals = {
  // UI Configuration
  theme: 'light' | 'dark';
  locale: string;
  displayMode: 'pip' | 'inline' | 'fullscreen';
  safeArea: {
    insets: { top: number; bottom: number; left: number; right: number };
  };
  maxHeight: number;

  // Device Information
  userAgent: {
    device: { type: 'mobile' | 'tablet' | 'desktop' | 'unknown' };
    capabilities: { hover: boolean; touch: boolean };
  };

  // Tool Communication
  toolInput: Record<string, unknown>;           // Tool input parameters
  toolOutput: Record<string, unknown> | null;   // Tool response data
  toolResponseMetadata: Record<string, unknown> | null;

  // State Management
  widgetState: Record<string, unknown> | null;
  setWidgetState: (state: Record<string, unknown>) => Promise<void>;
};

declare global {
  interface Window {
    openai?: OpenAiGlobals;
  }
}

export function useOpenAiGlobal<K extends keyof OpenAiGlobals>(
  key: K
): OpenAiGlobals[K] | null {
  return useSyncExternalStore(
    // Subscribe function - attach listener and return cleanup
    (onChange) => {
      // SSR: window is undefined on server
      if (typeof window === 'undefined') {
        return () => {};
      }

      const handleSetGlobal = (event: SetGlobalsEvent) => {
        // Only trigger re-render if the requested key changed
        const value = event.detail.globals[key];
        if (value === undefined) {
          return;
        }
        onChange();
      };

      // Attach listener (passive for better performance)
      window.addEventListener(SET_GLOBALS_EVENT_TYPE, handleSetGlobal, {
        passive: true,
      });

      // Return cleanup function (called on unmount)
      return () => {
        window.removeEventListener(SET_GLOBALS_EVENT_TYPE, handleSetGlobal);
      };
    },

    // Get current snapshot from window.openai
    () => window.openai?.[key] ?? null,

    // SSR fallback
    () => null
  );
}
```

---

## **Available Keys**

```tsx
// Most Common
useOpenAiGlobal('toolOutput')           // Tool response data (use this!)
useOpenAiGlobal('toolInput')            // Tool input parameters

// UI Configuration
useOpenAiGlobal('theme')                // 'light' or 'dark'
useOpenAiGlobal('locale')               // User's locale (e.g., 'en-US')
useOpenAiGlobal('displayMode')          // 'inline', 'pip', or 'fullscreen'

// State & Device
useOpenAiGlobal('widgetState')          // Persistent widget state
useOpenAiGlobal('userAgent')            // Device and capability info
useOpenAiGlobal('safeArea')             // Safe area insets
useOpenAiGlobal('maxHeight')            // Available widget height
```

---

## **Type-Safe Usage**

### **Typing Tool Response Data**

```tsx
// Define your specific data structure
interface SearchResults {
  items: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  metadata: {
    total: number;
    query: string;
  };
}

function SearchWidget() {
  const toolOutput = useOpenAiGlobal('toolOutput') as SearchResults | null;

  if (!toolOutput) {
    return <div>Waiting for results...</div>;
  }

  return (
    <div>
      <p>Found {toolOutput.metadata.total} results</p>
      {toolOutput.items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### **Multiple Global Values**

```tsx
function ConfigurableWidget() {
  // Subscribe to multiple global values independently
  const toolOutput = useOpenAiGlobal('toolOutput');
  const theme = useOpenAiGlobal('theme');
  const locale = useOpenAiGlobal('locale');

  const isDark = theme === 'dark';
  const isRTL = locale?.startsWith('ar') || locale?.startsWith('he');

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'} dir={isRTL ? 'rtl' : 'ltr'}>
      {toolOutput && <ResultsList data={toolOutput} />}
    </div>
  );
}
```

### **Persistent Widget State**

```tsx
function StatefulWidget() {
  const widgetState = useOpenAiGlobal('widgetState');

  const handleStateChange = async (newState: Record<string, unknown>) => {
    // Persist state across ChatGPT sessions
    await window.openai?.setWidgetState?.(newState);
  };

  return (
    <div>
      <p>Current view: {widgetState?.view ?? 'default'}</p>
      <button onClick={() => handleStateChange({ view: 'expanded' })}>
        Expand
      </button>
    </div>
  );
}
```

---

## **Common Patterns**

### **Pattern 1: Conditional Rendering Based on Data**

```tsx
function ContentWidget() {
  const data = useOpenAiGlobal('toolOutput');

  if (data === null) {
    return <LoadingState />;
  }

  if (!data?.items || data.items.length === 0) {
    return <EmptyState />;
  }

  return <ContentList items={data.items} />;
}
```

### **Pattern 2: Theme-Aware Components**

```tsx
function ThemedContent() {
  const theme = useOpenAiGlobal('theme');

  return (
    <div style={{
      color: theme === 'dark' ? '#fff' : '#000',
      backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff',
    }}>
      Content
    </div>
  );
}
```

### **Pattern 3: Locale-Specific Rendering**

```tsx
function LocalizedWidget() {
  const locale = useOpenAiGlobal('locale');
  const data = useOpenAiGlobal('toolOutput');

  const formatter = new Intl.DateTimeFormat(locale);

  return (
    <div>
      {data?.timestamp && <p>{formatter.format(new Date(data.timestamp))}</p>}
    </div>
  );
}
```

### **Pattern 4: Responsive Display Modes**

```tsx
function ResponsiveWidget() {
  const displayMode = useOpenAiGlobal('displayMode');
  const maxHeight = useOpenAiGlobal('maxHeight');

  return (
    <div style={{
      maxHeight: `${maxHeight}px`,
      overflow: displayMode === 'fullscreen' ? 'auto' : 'hidden',
    }}>
      Content
    </div>
  );
}
```

---

## **Troubleshooting**

### **Problem: `toolOutput` is always `null`**

**Solution 1:** Verify server returns `structuredContent`

Your MCP server tool must return the `structuredContent` field:

```tsx
return {
  content: [...],
  structuredContent: { your: 'data' },  // ← Must be present
  _meta: {...}
};
```

**Solution 2:** Verify tool metadata includes output template

```tsx
// Server response must have _meta field pointing to your widget
return {
  content: [...],
  structuredContent: { ... },
  _meta: {
    'openai/outputTemplate': 'ui://widget/your-widget.html',  // ← Required
  }
};
```

**Solution 3:** Check browser console

```tsx
// Verify window.openai is available
console.log('window.openai:', window.openai);
console.log('toolOutput:', window.openai?.toolOutput);
```

### **Problem: Widget doesn't re-render when data changes**

- **Verify React version:** Requires React 18+
- **Check component mount:** Ensure component is mounted when events fire
- **Verify listener:** Check DevTools to confirm event listeners are attached
- **Check events:** Open DevTools console and verify `"openai:set_globals"` events are firing

### **Problem: Rendering with SSR**

The hook is SSR-safe and returns `null` on the server. For SSR-rendered content:

```tsx
// Hook always returns null during server-side rendering
function Widget() {
  const data = useOpenAiGlobal('toolOutput');

  // This works fine with SSR - initial render shows loading state
  if (!data) {
    return <LoadingState />;
  }

  // Once hydrated on client, data will populate automatically
  return <Content data={data} />;
}
```

---

## **Browser & Environment Compatibility**

| Feature | Required | Notes |
|---------|----------|-------|
| React Version | 18+ | `useSyncExternalStore` requires React 18 |
| CustomEvent API | Yes | Available in all modern browsers |
| window object | Client-side | SSR-safe (returns null on server) |
| Event Listeners | Yes | Standard Web API |

---

## **Best Practices**

1. **Always handle null state** - `toolOutput` is `null` until data arrives
2. **Use TypeScript** - Type your `structuredContent` for better DX and safety
3. **Subscribe to what you need** - Only call hook for keys you actually use
4. **Don't poll** - Never use `setInterval` to check for changes; hook updates automatically
5. **Trust the hook** - When data arrives, your component **will** re-render
6. **Minimize re-renders** - Each global key is independent; only subscribe to what you need
7. **Use React.memo** - Wrap child components to prevent unnecessary cascading renders

---

## **How It Works Internally**

### **Why `useSyncExternalStore`?**

- **Automatic sync:** React knows when external state (window.openai) changes
- **No stale closures:** Always gets fresh snapshot from window
- **Batched updates:** Multiple state changes are efficiently batched
- **SSR safe:** Handles server-side rendering properly

### **Event Flow**

```
1. ChatGPT tool execution completes
2. ChatGPT populates window.openai.toolOutput
3. ChatGPT dispatches "openai:set_globals" custom event
4. Hook's listener triggers onChange callback
5. useSyncExternalStore re-renders component with fresh snapshot
6. Component receives new toolOutput value
```

### **Memory Management**

- Listener automatically removed on component unmount
- No circular references
- Safe to create multiple widgets with same hook
- No memory leaks with proper cleanup

---

## **Testing & Mocking**

### **Mock Setup for Tests**

```tsx
// jest.setup.ts
beforeEach(() => {
  // Mock window.openai
  Object.defineProperty(window, 'openai', {
    value: {
      toolOutput: null,
      theme: 'light',
      locale: 'en-US',
    },
    writable: true,
    configurable: true,
  });
});

afterEach(() => {
  delete (window as any).openai;
});
```

### **Simulating Data Updates**

```tsx
// In your test
function updateToolOutput(data: any) {
  (window.openai as any).toolOutput = data;

  const event = new CustomEvent('openai:set_globals', {
    detail: { globals: { toolOutput: data } },
  });
  window.dispatchEvent(event);
}

it('renders data when toolOutput updates', () => {
  const { rerender } = render(<YourWidget />);

  updateToolOutput({ items: [{ id: '1', name: 'Item 1' }] });
  rerender(<YourWidget />);

  expect(screen.getByText('Item 1')).toBeInTheDocument();
});
```

---

## **Complete Working Examples**

Find full implementations in the codebase:

- **Hook:** [packages/ui/src/hooks/openai/useOpenAiGlobal.ts](../../src/hooks/openai/useOpenAiGlobal.ts)
- **Types:** [packages/ui/src/hooks/openai/types.ts](../../src/hooks/openai/types.ts)

---

## **Key Takeaways**

✅ Return `structuredContent` from your server tool
✅ Include `openai/outputTemplate` in tool metadata
✅ Always handle null state initially
✅ Subscribe to only the keys you need
✅ Component re-renders automatically when data changes
✅ No manual polling or state management needed
✅ Fully type-safe with TypeScript support

---

## **References**

- [React 18 `useSyncExternalStore` documentation](https://react.dev/reference/react/useSyncExternalStore)
- [CustomEvent API](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- OpenAI Apps SDK
