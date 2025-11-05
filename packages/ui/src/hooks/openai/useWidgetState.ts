import { useCallback, useEffect, useState, type SetStateAction } from 'react';
import { useOpenAiGlobal } from './useOpenAiGlobal';
import type { UnknownObject } from './types';

export function useWidgetState<T extends UnknownObject>(
  defaultState: T | (() => T)
): readonly [T, (state: SetStateAction<T>) => void];
export function useWidgetState<T extends UnknownObject>(
  defaultState?: T | (() => T | null) | null
): readonly [T | null, (state: SetStateAction<T | null>) => void];
export function useWidgetState<T extends UnknownObject>(
  defaultState?: T | (() => T | null) | null
): readonly [T | null, (state: SetStateAction<T | null>) => void] {
  const widgetStateFromWindow = useOpenAiGlobal('widgetState') as T | null;

  const [widgetState, setLocalWidgetState] = useState<T | null>(() => {
    if (widgetStateFromWindow != null) {
      return widgetStateFromWindow;
    }

    return typeof defaultState === 'function'
      ? (defaultState as () => T | null)()
      : (defaultState ?? null);
  });

  useEffect(() => {
    setLocalWidgetState(widgetStateFromWindow);
  }, [widgetStateFromWindow]);

  const setWidgetState = useCallback((state: SetStateAction<T | null>) => {
    setLocalWidgetState((prevState) => {
      const nextState = typeof state === 'function' ? state(prevState) : state;

      if (nextState != null) {
        void window?.openai?.setWidgetState?.(nextState as T);
      }

      return nextState;
    });
  }, []);

  return [widgetState, setWidgetState] as const;
}
