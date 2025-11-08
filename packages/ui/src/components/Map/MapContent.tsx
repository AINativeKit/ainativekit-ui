import React, { useMemo, useRef, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapViewProps } from './MapView';
import type { LocationData } from './types';
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

const DEFAULT_ICON_SIZE: [number, number] = [29, 43];
const DEFAULT_ICON_ANCHOR: [number, number] = [14.5, 43];
const DEFAULT_POPUP_ANCHOR: [number, number] = [0, -42]; /* Adjusted for custom popup styling */

function createMarkerIcon(color: string, isSelected: boolean) {
  const innerCircle = isSelected
    ? `<circle cx="14.5" cy="13.5" r="4" fill="${color}" />`
    : `<circle cx="14.5" cy="13.5" r="3.5" fill="var(--ai-color-border-default)" />`; /* Use token for subtle background */

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="43" viewBox="0 0 29 43">
      <path fill="${color}" stroke="var(--ai-color-bg-primary)" stroke-width="2" d="M14.5 1C7.596 1 2 6.596 2 13.5c0 8.437 12.5 28.5 12.5 28.5S27 21.937 27 13.5C27 6.596 21.404 1 14.5 1z" />
      <circle cx="14.5" cy="13.5" r="6" fill="#ffffff" />
      ${innerCircle.replace('cx="13.5" cy="12.5"', 'cx="14.5" cy="13.5"')}
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

export const MapContent: React.FC<MapViewProps> = ({
  locations,
  selectedId,
  activeId,
  onLocationSelect,
  onLocationActive,
  defaultCenter = [37.7749, -122.4194],
  defaultZoom = 12,
  markerColor = 'var(--ai-color-accent-blue)',
  selectedMarkerColor = 'var(--ai-color-accent-blue, #0285ff)',
  className,
  style,
  isInspectorOpen,
  scrollWheelZoom = false,
}) => {
  const containerClassName = className
    ? `${styles.mapContainer} ${className}`
    : styles.mapContainer;

  const markerRefs = useRef<Map<string, L.Marker>>(new Map());

  const defaultIcon = useMemo(() => createMarkerIcon(markerColor, false), [markerColor]);
  const activeIcon = useMemo(
    () => createMarkerIcon(selectedMarkerColor, false),
    [selectedMarkerColor]
  );
  const selectedIcon = useMemo(
    () => createMarkerIcon(selectedMarkerColor, true),
    [selectedMarkerColor]
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
            icon = selectedIcon;
          } else if (isActive) {
            icon = activeIcon;
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
                  <h3 className={styles.popupTitle}>{location.name}</h3>
                  {location.description && (
                    <div className={styles.popupDescription}>{location.description}</div>
                  )}
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
