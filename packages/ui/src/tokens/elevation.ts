/**
 * Elevation (shadow) tokens for AI Native Kit
 * Defines shadow depth with metadata for proper usage
 *
 * @example
 * ```typescript
 * import { elevation } from '@ainativekit/ui/tokens';
 * const cardShadow = elevation['1'].shadow;
 * const className = elevation['1'].className; // 'ai-elevation-1'
 * ```
 */

export type ElevationLevel = '0' | '1' | '2' | '3' | '4' | '5';

type ElevationDefinition = {
  shadow: string;
  lightOverlay: string;
  darkOverlay: string;
  className: string;
  meta: {
    description: string;
    usage: string;
    zIndex?: string;
  };
};

export const elevation: Record<ElevationLevel, ElevationDefinition> = {
  '0': {
    shadow: 'none',
    lightOverlay: 'rgba(0,0,0,0)',
    darkOverlay: 'rgba(255,255,255,0)',
    className: 'ai-elevation-0',
    meta: {
      description: 'No elevation - flat surface',
      usage: 'Use for elements flush with the background',
    },
  },
  '1': {
    shadow: '0px 4px 16px rgba(0,0,0,0.05)',
    lightOverlay: 'rgba(0,0,0,0)',
    darkOverlay: 'rgba(255,255,255,0.05)',
    className: 'ai-elevation-1',
    meta: {
      description: 'Subtle elevation for cards and containers',
      usage: 'Default elevation for cards, panels, and raised surfaces',
      zIndex: '1-100',
    },
  },
  '2': {
    shadow: '0px 6px 24px rgba(0,0,0,0.08)',
    lightOverlay: 'rgba(0,0,0,0)',
    darkOverlay: 'rgba(255,255,255,0.07)',
    className: 'ai-elevation-2',
    meta: {
      description: 'Medium elevation for interactive elements',
      usage: 'Use for hover states, dropdowns, and floating elements',
      zIndex: '100-200',
    },
  },
  '3': {
    shadow: '0px 10px 32px rgba(0,0,0,0.10)',
    lightOverlay: 'rgba(0,0,0,0)',
    darkOverlay: 'rgba(255,255,255,0.08)',
    className: 'ai-elevation-3',
    meta: {
      description: 'Prominent elevation for modals and popovers',
      usage: 'Use for dialogs, tooltips, and important UI elements',
      zIndex: '200-500',
    },
  },
  '4': {
    shadow: '0px 12px 40px rgba(0,0,0,0.12)',
    lightOverlay: 'rgba(0,0,0,0)',
    darkOverlay: 'rgba(255,255,255,0.09)',
    className: 'ai-elevation-4',
    meta: {
      description: 'High elevation for overlays',
      usage: 'Use for modals, drawers, and important overlays',
      zIndex: '500-1000',
    },
  },
  '5': {
    shadow: '0px 16px 48px rgba(0,0,0,0.14)',
    lightOverlay: 'rgba(0,0,0,0)',
    darkOverlay: 'rgba(255,255,255,0.12)',
    className: 'ai-elevation-5',
    meta: {
      description: 'Maximum elevation for critical overlays',
      usage: 'Use for toast notifications, alerts, and critical modals',
      zIndex: '1000+',
    },
  },
} as const;

export const defaultElevation: ElevationLevel = '1';
