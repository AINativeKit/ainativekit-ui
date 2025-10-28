import { useSyncExternalStore } from 'react';
import {
  SET_GLOBALS_EVENT_TYPE,
  type OpenAiGlobals,
  type SetGlobalsEvent,
} from './types';

export function useOpenAiGlobal<K extends keyof OpenAiGlobals>(
  key: K
): OpenAiGlobals[K] | null {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window === 'undefined') {
        return () => {};
      }

      const handleSetGlobal = (event: SetGlobalsEvent) => {
        if (event.detail.globals[key] === undefined) {
          return;
        }

        onChange();
      };

      window.addEventListener(SET_GLOBALS_EVENT_TYPE, handleSetGlobal, {
        passive: true,
      });

      return () => {
        window.removeEventListener(SET_GLOBALS_EVENT_TYPE, handleSetGlobal);
      };
    },
    () => window?.openai?.[key] ?? null,
    () => null
  );
}
