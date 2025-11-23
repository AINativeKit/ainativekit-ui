import React, { useMemo, useRef, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapViewProps } from './MapView';
import type { LocationData } from './types';
import { Features } from '../Feature/Features';
import { ThemeContext } from '../../providers/ThemeProvider';
import type { ThemeContextValue } from '../../providers/ThemeProvider';
import styles from './Map.module.css';

// Component to handle map flying to selected location
const MapFlyer: React.FC<{
  selectedId?: string;
  locations: LocationData[];
  isInspectorOpen?: boolean;
}> = ({ selectedId, locations, isInspectorOpen }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedId) {
      const location = locations.find((loc) => loc.id === selectedId);

      if (location) {
        // Calculate distance between current center and selected location
        const currentCenter = map.getCenter();
        const distance = currentCenter.distanceTo(location.coords);

        // If distance is small (less than 2km), use panTo to avoid shaking
        // Otherwise use flyTo for the nice flying animation
        const useSmoothPan = distance < 2000;

        // When Inspector is open, offset the target position to show marker with good spacing
        // to ensure the marker is visible and not hidden by the Inspector panel (on the right)
        let targetCoords: [number, number] = location.coords;
        if (isInspectorOpen && map) {
          // Offset by approximately 100px to move map center slightly right
          // This keeps marker more centered-left on screen, avoiding the Inspector on the right
          const offsetPixels = 100;
          // Convert pixel offset to lat/lng offset
          const point = map.latLngToContainerPoint(location.coords);
          const offsetPoint = L.point(point.x + offsetPixels, point.y);
          const result = map.containerPointToLatLng(offsetPoint);
          targetCoords = [result.lat, result.lng];
        }

        if (useSmoothPan) {
          map.panTo(targetCoords, {
            animate: true,
            duration: 0.5,
          });
        } else {
          map.flyTo(targetCoords, map.getZoom(), {
            duration: 0.5,
            easeLinearity: 0.5,
          });
        }
      }
    }
  }, [selectedId, locations, map, isInspectorOpen]);

  return null;
};

// Component to handle trackpad pinch-to-zoom (detects Ctrl+wheel events)
const PinchZoomHandler: React.FC = () => {
  const map = useMap();
  const accumulatedDelta = useRef<number>(0);
  const zoomTimer = useRef<NodeJS.Timeout | null>(null);
  const lastMousePos = useRef<L.Point | null>(null);

  useEffect(() => {
    const container = map.getContainer();

    function performZoom() {
      const delta = accumulatedDelta.current;
      accumulatedDelta.current = 0;

      if (!delta) return;

      const currentZoom = map.getZoom();

      // Use Leaflet's approach: map delta with sigmoid function to smooth zoom range
      // This creates smooth, proportional zooming like the +/- buttons
      const wheelPxPerZoomLevel = 60; // Leaflet default
      const d2 = delta / (wheelPxPerZoomLevel * 4);
      const d3 = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2))))) / Math.LN2;
      const d4 = Math.ceil(d3); // Snap to integer zoom levels
      const zoomDelta = delta > 0 ? -d4 : d4;

      const newZoom = Math.max(
        map.getMinZoom(),
        Math.min(map.getMaxZoom(), currentZoom + zoomDelta)
      );

      if (newZoom === currentZoom) return;

      // Zoom around mouse position if available, otherwise center
      if (lastMousePos.current) {
        const point = lastMousePos.current;
        const latLng = map.containerPointToLatLng(point);
        map.setZoomAround(latLng, newZoom, { animate: true });
      } else {
        map.setZoom(newZoom, { animate: true });
      }

      lastMousePos.current = null;
    }

    function handleWheel(e: WheelEvent) {
      // Trackpad pinch gestures come through as wheel events with ctrlKey=true
      if (e.ctrlKey) {
        e.preventDefault(); // Prevent browser page zoom
        e.stopPropagation();

        // Accumulate delta values (like Leaflet does)
        accumulatedDelta.current += e.deltaY;

        // Store mouse position for zooming around cursor
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastMousePos.current = map.mouseEventToContainerPoint(e as any);

        // Use shorter debounce (10ms instead of 40ms) for more responsive continuous zooming
        if (zoomTimer.current) {
          clearTimeout(zoomTimer.current);
        }
        zoomTimer.current = setTimeout(performZoom, 10);
      }
      // If ctrlKey is false, it's a normal scroll - let it bubble to scroll the page
    }

    // CRITICAL: Use { passive: false } to allow preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (zoomTimer.current) {
        clearTimeout(zoomTimer.current);
      }
    };
  }, [map]);

  return null;
};

const DEFAULT_TILE_URL =
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';

const DEFAULT_ICON_SIZE: [number, number] = [28, 40];
const DEFAULT_ICON_ANCHOR: [number, number] = [14, 40];
const DEFAULT_POPUP_ANCHOR: [number, number] = [0, -40]; /* Adjusted for custom popup styling */

function createMarkerIcon(color: string, isSelected: boolean) {
  const innerCircle = isSelected
    ? `<circle cx="14" cy="13.5" r="4" fill="${color}" />`
    : `<circle cx="14" cy="13.5" r="3.5" fill="var(--ai-color-border-default)" />`; /* Use token for subtle background */

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
      <path fill="${color}" stroke="var(--ai-color-bg-primary)" stroke-width="2" d="M14 1C7.373 1 2 6.373 2 13c0 8 12 26 12 26S26 21 26 13c0-6.627-5.373-12-12-12z" />
      <circle cx="14" cy="13.5" r="7" fill="#ffffff" />
      ${innerCircle}
    </svg>
  `;

  const className = isSelected ? `${styles.marker} ${styles.selectedMarker}`.trim() : styles.marker;

  return L.divIcon({
    html: svg,
    iconSize: DEFAULT_ICON_SIZE,
    iconAnchor: DEFAULT_ICON_ANCHOR,
    popupAnchor: DEFAULT_POPUP_ANCHOR,
    className,
  });
}

/**
 * Create dot marker icon (16x16px with 2px border)
 * Uses CSS variables for automatic dark mode support
 */
function createDotMarkerIcon(color: string, isSelected: boolean): L.DivIcon {
  const size = 16;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <circle
        cx="8" cy="8" r="7"
        fill="${color}"
        stroke="var(--ai-color-bg-primary)"
        stroke-width="2"
      />
      ${isSelected ? '<circle cx="8" cy="8" r="3" fill="var(--ai-color-bg-primary)" />' : ''}
    </svg>
  `;

  const className = isSelected ? `${styles.marker} ${styles.selectedMarker}`.trim() : styles.marker;

  return L.divIcon({
    html: svg,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
    className,
  });
}

export const MapContent: React.FC<MapViewProps> = ({
  locations,
  selectedId,
  activeId,
  onLocationSelect,
  onLocationActive,
  defaultCenter = [37.7749, -122.4194],
  defaultZoom = 12,
  markerVariant = 'pin',
  className,
  style,
  isInspectorOpen,
  scrollWheelZoom = false,
}) => {
  const containerClassName = className
    ? `${styles.mapContainer} ${className}`
    : styles.mapContainer;

  const markerRefs = useRef<Map<string, L.Marker>>(new Map());

  // Get resolved brand color from theme (optional - graceful fallback)
  const themeContext: ThemeContextValue | null = React.useContext(ThemeContext);
  const brandColors = themeContext?.brandColors;
  const theme = themeContext?.theme || 'light';
  const primaryColor = brandColors?.primary;
  const MARKER_COLOR =
    typeof primaryColor === 'string'
      ? primaryColor
      : primaryColor?.[theme] || primaryColor?.light || 'var(--ai-color-brand-primary)';

  const defaultIcon = useMemo(
    () =>
      markerVariant === 'dot'
        ? createDotMarkerIcon(MARKER_COLOR, false)
        : createMarkerIcon(MARKER_COLOR, false),
    [markerVariant, MARKER_COLOR]
  );
  const activeIcon = useMemo(
    () =>
      markerVariant === 'dot'
        ? createDotMarkerIcon(MARKER_COLOR, false)
        : createMarkerIcon(MARKER_COLOR, false),
    [markerVariant, MARKER_COLOR]
  );
  const selectedIcon = useMemo(
    () =>
      markerVariant === 'dot'
        ? createDotMarkerIcon(MARKER_COLOR, true)
        : createMarkerIcon(MARKER_COLOR, true),
    [markerVariant, MARKER_COLOR]
  );

  useEffect(() => {
    const validIds = new Set(locations.map((location) => location.id));
    markerRefs.current.forEach((_, id) => {
      if (!validIds.has(id)) {
        markerRefs.current.delete(id);
      }
    });
  }, [locations]);

  // Open/close popups based on selectedId
  useEffect(() => {
    // Close all popups
    markerRefs.current.forEach((marker) => {
      marker.closePopup();
    });

    // Open selected popup
    if (selectedId && markerRefs.current.has(selectedId)) {
      const marker = markerRefs.current.get(selectedId);
      if (marker) {
        marker.openPopup();
      }
    }
  }, [selectedId]);

  // Update marker icons when selection changes
  useEffect(() => {
    markerRefs.current.forEach((marker, locationId) => {
      const isSelected = locationId === selectedId;
      const isActive = locationId === activeId;

      let icon;
      if (isSelected) {
        icon = markerVariant === 'hybrid' ? createMarkerIcon(MARKER_COLOR, true) : selectedIcon;
      } else if (isActive) {
        icon = markerVariant === 'hybrid' ? createDotMarkerIcon(MARKER_COLOR, false) : activeIcon;
      } else if (markerVariant === 'hybrid') {
        icon = createDotMarkerIcon(MARKER_COLOR, false);
      } else {
        icon = defaultIcon;
      }

      marker.setIcon(icon);
    });
  }, [selectedId, activeId, markerVariant, defaultIcon, activeIcon, selectedIcon, MARKER_COLOR]);

  return (
    <div className={containerClassName} style={style}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className={styles.map}
        scrollWheelZoom={scrollWheelZoom}
        touchZoom={scrollWheelZoom}
        dragging={true}
      >
        <MapFlyer selectedId={selectedId} locations={locations} isInspectorOpen={isInspectorOpen} />
        {!scrollWheelZoom && <PinchZoomHandler />}
        <TileLayer
          url={DEFAULT_TILE_URL}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains={['a', 'b', 'c', 'd']}
        />
        {locations.map((location) => {
          const isSelected = location.id === selectedId;
          const isActive = location.id === activeId;
          let icon = defaultIcon;
          if (isSelected) {
            icon = markerVariant === 'hybrid' ? createMarkerIcon(MARKER_COLOR, true) : selectedIcon;
          } else if (isActive) {
            icon = markerVariant === 'hybrid' ? createDotMarkerIcon(MARKER_COLOR, false) : activeIcon;
          } else if (markerVariant === 'hybrid') {
            icon = createDotMarkerIcon(MARKER_COLOR, false);
          }

          const eventHandlers: Partial<L.LeafletEventHandlerFnMap> = {};
          if (onLocationSelect) {
            eventHandlers.click = () => onLocationSelect(location.id);
          }
          if (onLocationActive) {
            eventHandlers.mouseover = () => onLocationActive(location.id);
            eventHandlers.mouseout = () => onLocationActive(undefined);
          }

          return (
            <Marker
              key={location.id}
              position={location.coords}
              icon={icon}
              eventHandlers={Object.keys(eventHandlers).length > 0 ? eventHandlers : undefined}
              ref={(marker) => {
                if (marker) {
                  markerRefs.current.set(location.id, marker);
                  return;
                }
                markerRefs.current.delete(location.id);
              }}
            >
              <Popup>
                <article className={styles.popup}>
                  <div className={styles.popupContent}>
                    <h3 className={styles.popupTitle}>{location.name}</h3>
                    {location.subtitle && (
                      <div className={styles.popupSubtitle}>{location.subtitle}</div>
                    )}
                    {location.features && location.features.length > 0 && (
                      <Features items={location.features} iconSize={14} />
                    )}
                  </div>
                </article>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

MapContent.displayName = 'MapContent';
