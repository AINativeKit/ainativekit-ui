# Performance Best Practices

This guide covers performance considerations when building applications with AI Native Kit UI, specifically for ChatGPT Apps SDK usage patterns.

## Typical Usage in ChatGPT Apps

AI Native Kit UI is optimized for **conversational UI patterns** in ChatGPT Apps, where:

- **Lists** typically contain **10-20 items** (search results, recommendations, options)
- **Carousels** show **5-15 cards** (visual browsing, product galleries)
- **Albums** display **10-30 images** (photo collections, galleries)
- **Cards** render structured data in compact, digestible formats

For these typical scenarios, **virtualization is not necessary** and would add unnecessary complexity. The components are already optimized for smooth rendering at these scales.

## Component Performance Characteristics

### List Component

The `<List>` component efficiently renders 10-50 items without performance concerns:

```tsx
import { List, ListItem } from '@ainativekit/ui';

// Typical ChatGPT use case - 15 restaurant results
<List
  items={restaurants} // 10-20 items
  renderItem={(restaurant) => (
    <ListItem
      title={restaurant.name}
      subtitle={restaurant.address}
      thumbnail={restaurant.image}
    />
  )}
/>
```

**Performance is excellent for < 100 items:**
- Rendering: < 16ms (60fps)
- Scrolling: Hardware accelerated
- Memory: Minimal overhead

### Carousel Component

The `<Carousel>` component uses **Embla Carousel**, which is already highly optimized:

```tsx
import { Carousel, ImageCard } from '@ainativekit/ui';

// Hardware-accelerated scrolling
<Carousel>
  {products.map(product => (
    <ImageCard key={product.id} {...product} />
  ))}
</Carousel>
```

**Built-in optimizations:**
- ✅ Hardware-accelerated transforms (CSS `translate3d`)
- ✅ Efficient DOM reuse
- ✅ Smooth 60fps scrolling
- ✅ Touch-optimized gestures

## Optimization Tips

### 1. Image Optimization

Images are typically the main performance bottleneck in UI:

```tsx
// ✅ Good: Properly sized images
<ImageCard
  src="https://example.com/image-400x300.jpg"
  alt="Product"
/>

// ❌ Bad: Oversized images
<ImageCard
  src="https://example.com/image-4000x3000.jpg" // 5MB image!
  alt="Product"
/>
```

**Best practices:**
- Use appropriate image dimensions (400-800px width for cards)
- Serve optimized formats (WebP with JPG fallback)
- Use CDN with automatic resizing (Cloudinary, Imgix, etc.)
- Let the browser handle lazy loading: `<img loading="lazy" />`

### 2. Avoid Expensive Computations

```tsx
// ❌ Bad: Expensive computation on every render
<List
  items={data}
  renderItem={(item) => {
    const expensiveResult = complexCalculation(item); // Runs on every render!
    return <ListItem title={expensiveResult} />;
  }}
/>

// ✅ Good: Pre-compute or memoize
const processedItems = useMemo(
  () => data.map(item => ({
    ...item,
    computed: complexCalculation(item)
  })),
  [data]
);

<List
  items={processedItems}
  renderItem={(item) => <ListItem title={item.computed} />}
/>
```

### 3. Optimize Custom Components

If you're passing custom components to `renderItem`, consider memoization:

```tsx
import { memo } from 'react';

// ✅ Good: Memoized custom component
const RestaurantItem = memo(({ restaurant }) => (
  <ListItem
    title={restaurant.name}
    subtitle={restaurant.address}
    thumbnail={restaurant.image}
    features={[
      { icon: 'star', label: restaurant.rating },
      { icon: 'location', label: restaurant.distance }
    ]}
  />
));

<List
  items={restaurants}
  renderItem={(restaurant) => <RestaurantItem restaurant={restaurant} />}
/>
```

### 4. Efficient State Management

```tsx
// ✅ Good: State only where needed
function RestaurantList() {
  const [restaurants] = useState(initialData);

  return <List items={restaurants} renderItem={...} />;
}

// ❌ Bad: Unnecessary re-renders
function RestaurantList() {
  const [restaurants] = useState(initialData);
  const [count, setCount] = useState(0); // Triggers re-render of entire list

  return (
    <>
      <div>{count}</div>
      <List items={restaurants} renderItem={...} />
    </>
  );
}
```

## When Does Performance Matter?

### Scenarios Where Optimization Is Important

1. **Image-heavy content** (galleries, product catalogs)
   - Use proper image sizing and lazy loading
   - Consider progressive loading

2. **Complex list items** (rich cards with multiple features)
   - Use `React.memo` for custom components
   - Avoid inline functions in props

3. **Frequent updates** (real-time data, live search)
   - Use proper keys for list items
   - Debounce search inputs
   - Consider optimistic UI updates

## Measuring Performance

Use React DevTools Profiler to identify bottlenecks:

```tsx
import { Profiler } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
}

<Profiler id="RestaurantList" onRender={onRenderCallback}>
  <List items={restaurants} renderItem={...} />
</Profiler>
```

**Performance targets for ChatGPT Apps:**
- Initial render: < 100ms
- Item render: < 10ms per item
- Scroll performance: 60fps (16ms per frame)

## Advanced: Large Datasets (> 100 items)

If you're building a **standalone application** (not ChatGPT App) with large datasets:

### Option 1: Pagination

```tsx
const ITEMS_PER_PAGE = 20;

function PaginatedList() {
  const [page, setPage] = useState(1);

  const visibleItems = useMemo(
    () => allItems.slice(0, page * ITEMS_PER_PAGE),
    [allItems, page]
  );

  return (
    <>
      <List items={visibleItems} renderItem={...} />
      {visibleItems.length < allItems.length && (
        <Button onClick={() => setPage(p => p + 1)}>
          Load More
        </Button>
      )}
    </>
  );
}
```

### Option 2: Search/Filter

```tsx
function SearchableList() {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(
    () => allItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    ),
    [allItems, query]
  );

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <List items={filteredItems} renderItem={...} />
    </>
  );
}
```

### Option 3: Virtual Scrolling (Advanced)

For standalone apps with 1000+ items, consider a virtualization library:

- [TanStack Virtual](https://tanstack.com/virtual) - Modern, flexible
- [react-window](https://github.com/bvaughn/react-window) - Lightweight, battle-tested
- [react-virtuoso](https://virtuoso.dev/) - Feature-rich

**Note:** This is rarely needed for ChatGPT Apps and adds significant complexity.

## Summary

**For ChatGPT Apps (typical usage):**
- ✅ No virtualization needed (10-20 items)
- ✅ Focus on image optimization
- ✅ Avoid expensive computations in render
- ✅ Use proper React patterns (keys, memoization)

**For standalone apps with large data:**
- Consider pagination first (simplest)
- Use search/filtering to reduce visible items
- Only use virtualization if absolutely necessary (1000+ items)

**Remember:** Premature optimization is the root of all evil. Start simple, measure performance, and optimize only if needed.

## Resources

- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Web.dev Performance](https://web.dev/performance/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [React DevTools Profiler](https://react.dev/reference/react/Profiler)
