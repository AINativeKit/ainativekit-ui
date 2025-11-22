import React, { Suspense, lazy } from 'react';
import type { LocationData } from './types';
import { Skeleton } from '../Skeleton';
import styles from './Map.module.css';

export interface MapViewProps {
  /**
   * Array of location data to display on the map.
   */
  locations: LocationData[];

  /**
   * ID of the currently selected location.
   */
  selectedId?: string;

  /**
   * ID of the currently active/hovered location.
   */
  activeId?: string;

  /**
   * Callback when a location marker is clicked.
   */
  onLocationSelect?: (id: string | undefined) => void;

  /**
   * Callback when a location becomes active/hovered.
   */
  onLocationActive?: (id: string | undefined) => void;

  /**
   * Default map center coordinates [latitude, longitude].
   * @default [37.7749, -122.4194] (San Francisco)
   */
  defaultCenter?: [number, number];

  /**
   * Default zoom level.
   * @default 12
   */
  defaultZoom?: number;

  /**
   * Color for default markers.
   * @default 'var(--ai-color-accent-blue)'
   */
  markerColor?: string;

  /**
   * Color for selected marker.
   * @default 'var(--ai-color-accent-blue)'
   */
  selectedMarkerColor?: string;

  /**
   * Marker style variant.
   * - 'pin': Traditional location pin markers for all states (29×43px)
   * - 'dot': Simple circular dot markers for all states (16×16px)
   * - 'hybrid': Dots for non-selected, pin for selected (recommended for dense layouts)
   * @default 'pin'
   */
  markerVariant?: 'pin' | 'dot' | 'hybrid';

  /**
   * Additional class name for the container.
   */
  className?: string;

  /**
   * Container style.
   */
  style?: React.CSSProperties;

  /**
   * Whether the Inspector panel is open.
   * When true, the map will pan to show the selected marker on the left side.
   */
  isInspectorOpen?: boolean;

  /**
   * Loading state - renders skeleton UI
   * @default false
   */
  loading?: boolean;

  /**
   * Error state - shows error message
   * @default false
   */
  error?: boolean;

  /**
   * Enable scroll wheel zoom on the map.
   * When true, uses native Leaflet scroll wheel zoom (best for full-screen maps).
   * When false, disables scroll wheel but enables custom pinch-to-zoom (best for embedded maps).
   * @default false
   */
  scrollWheelZoom?: boolean;

  // Additional map configuration props can be introduced over time.
}

// Lazy load the MapContent component to avoid SSR issues with Leaflet
const MapContent = lazy(() =>
  import('./MapContent').then((module) => ({ default: module.MapContent }))
);

const LoadingFallback: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <div className={`${styles.mapContainer} ${className || ''}`} style={style}>
    <Skeleton width="100%" height="100%" />
  </div>
);

export const MapView: React.FC<MapViewProps> = (props) => {
  const { loading = false, error = false } = props;
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // State Priority: Loading > Error > SSR/Hydration > Content

  // Loading State
  if (loading) {
    return <LoadingFallback className={props.className} style={props.style} />;
  }

  // Error State (show skeleton since MapView doesn't have error UI, carousel handles it)
  if (error) {
    return <LoadingFallback className={props.className} style={props.style} />;
  }

  // Don't render map on server or during initial hydration
  if (!isMounted || typeof window === 'undefined') {
    return <LoadingFallback className={props.className} style={props.style} />;
  }

  return (
    <Suspense fallback={<LoadingFallback className={props.className} style={props.style} />}>
      <MapContent {...props} />
    </Suspense>
  );
};

MapView.displayName = 'MapView';
