import React from 'react';
import { CompactMap, type CompactMapProps } from './CompactMap';
import { FullscreenMap, type FullscreenMapProps } from './FullscreenMap';
import type { MapViewProps } from './MapView';

export interface MapProps extends Omit<MapViewProps, 'className' | 'style'> {
  /**
   * Controlled fullscreen state (optional - for external state control)
   */
  isFullscreen?: boolean;

  /**
   * Callback when user toggles fullscreen mode (optional - for external state control)
   */
  onToggleFullscreen?: (isFullscreen: boolean) => void;

  /**
   * Props passed to CompactMap when not in fullscreen
   */
  compactMapProps?: Omit<CompactMapProps, keyof MapViewProps | 'onExpand'>;

  /**
   * Props passed to FullscreenMap when in fullscreen
   */
  fullscreenMapProps?: Omit<FullscreenMapProps, keyof MapViewProps | 'onCollapse'>;
}

/**
 * Map component - Main orchestrator for compact and fullscreen map views.
 *
 * Features:
 * - Displays either CompactMap or FullscreenMap based on fullscreen state
 * - Manages fullscreen toggle (can be controlled or uncontrolled)
 * - Expand button in CompactMap to enter fullscreen
 * - Collapse button in FullscreenMap to exit fullscreen
 *
 * Following the Album component pattern for ChatGPT Apps SDK integration.
 *
 * @example
 * ```tsx
 * // Uncontrolled (component manages its own state)
 * <Map locations={locations} />
 *
 * // Controlled (external state)
 * <Map
 *   locations={locations}
 *   isFullscreen={isFullscreen}
 *   onToggleFullscreen={setIsFullscreen}
 * />
 * ```
 */
export const Map: React.FC<MapProps> = ({
  locations,
  selectedId,
  activeId,
  onLocationSelect,
  onLocationActive,
  defaultCenter,
  defaultZoom,
  markerColor,
  selectedMarkerColor,
  markerVariant,
  isInspectorOpen,
  loading = false,
  error = false,
  isFullscreen: controlledIsFullscreen,
  onToggleFullscreen,
  compactMapProps,
  fullscreenMapProps,
}) => {
  const [internalIsFullscreen, setInternalIsFullscreen] = React.useState(false);

  // Use controlled state if provided, otherwise use internal state
  const isControlled = controlledIsFullscreen !== undefined;
  const isFullscreen = isControlled ? controlledIsFullscreen : internalIsFullscreen;

  const handleExpand = async () => {
    // Request fullscreen mode from ChatGPT host
    if (window.openai?.requestDisplayMode) {
      try {
        await window.openai.requestDisplayMode({ mode: 'fullscreen' });
      } catch (error) {
        console.warn('Failed to request fullscreen mode:', error);
      }
    }

    if (!isControlled) {
      setInternalIsFullscreen(true);
    }
    onToggleFullscreen?.(true);
  };

  const handleCollapse = async () => {
    // Request inline mode from ChatGPT host
    if (window.openai?.requestDisplayMode) {
      try {
        await window.openai.requestDisplayMode({ mode: 'inline' });
      } catch (error) {
        console.warn('Failed to request inline mode:', error);
      }
    }

    if (!isControlled) {
      setInternalIsFullscreen(false);
    }
    onToggleFullscreen?.(false);
  };

  // Common map props
  const commonMapProps = {
    locations,
    selectedId,
    activeId,
    onLocationSelect,
    onLocationActive,
    defaultCenter,
    defaultZoom,
    markerColor,
    selectedMarkerColor,
    markerVariant,
    isInspectorOpen,
    loading,
    error,
  };

  return (
    <>
      {/* Compact Map */}
      {!isFullscreen && (
        <CompactMap {...commonMapProps} onExpand={handleExpand} {...compactMapProps} />
      )}

      {/* Fullscreen Map */}
      {isFullscreen && (
        <FullscreenMap
          locations={locations}
          selectedId={selectedId}
          onLocationSelect={onLocationSelect}
          activeId={activeId}
          onLocationActive={onLocationActive}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          markerColor={markerColor}
          selectedMarkerColor={selectedMarkerColor}
          markerVariant={markerVariant}
          isInspectorOpen={isInspectorOpen}
          loading={loading}
          error={error}
          onCollapse={handleCollapse}
          {...fullscreenMapProps}
        />
      )}
    </>
  );
};

Map.displayName = 'Map';
