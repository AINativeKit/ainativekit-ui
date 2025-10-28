import { renderHook, act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  useOpenAiGlobal,
  useWidgetProps,
  useWidgetState,
  useMaxHeight,
  useDisplayMode,
  SetGlobalsEvent,
  type OpenAiGlobals,
  type OpenAiApi,
} from './index';

type TestWidgetState = { count: number };
type TestToolOutput = { message: string };

const createOpenAiMock = () => {
  const globals: Partial<OpenAiGlobals<TestToolOutput, TestToolOutput, unknown, TestWidgetState>> &
    Partial<OpenAiApi> = {
    theme: 'light',
    userAgent: {
      device: { type: 'desktop' },
      capabilities: { hover: true, touch: false },
    },
    locale: 'en-US',
    maxHeight: 480,
    displayMode: 'inline',
    safeArea: {
      insets: { top: 0, bottom: 0, left: 0, right: 0 },
    },
    toolInput: {},
    toolOutput: { message: 'initial' },
    toolResponseMetadata: null,
    widgetState: { count: 1 },
    setWidgetState: vi.fn().mockResolvedValue(undefined),
    callTool: vi.fn(),
    sendFollowUpMessage: vi.fn(),
    openExternal: vi.fn(),
    requestDisplayMode: vi.fn(),
  };

  return globals as OpenAiApi & OpenAiGlobals<
    TestToolOutput,
    TestToolOutput,
    unknown,
    TestWidgetState
  >;
};

const dispatchGlobalsEvent = (globals: Partial<OpenAiGlobals>) => {
  window.dispatchEvent(new SetGlobalsEvent({ globals }));
};

describe('OpenAI Hooks', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    delete (window as { openai?: unknown }).openai;
  });

  describe('useOpenAiGlobal', () => {
    beforeEach(() => {
      window.openai = createOpenAiMock();
    });

    it('returns the initial global value', () => {
      const { result } = renderHook(() => useOpenAiGlobal('displayMode'));
      expect(result.current).toBe('inline');
    });

    it('reacts to global updates emitted via events', () => {
      const { result } = renderHook(() => useOpenAiGlobal('displayMode'));

      act(() => {
        window.openai.displayMode = 'fullscreen';
        dispatchGlobalsEvent({ displayMode: 'fullscreen' });
      });

      expect(result.current).toBe('fullscreen');
    });
  });

  describe('useWidgetProps', () => {
    beforeEach(() => {
      window.openai = createOpenAiMock();
    });

    it('returns tool output from globals', () => {
      const { result } = renderHook(() => useWidgetProps<TestToolOutput>());
      expect(result.current).toEqual({ message: 'initial' });
    });

    it('falls back to provided default when tool output is null', () => {
      window.openai.toolOutput = null;

      const fallback = { message: 'fallback' };
      const { result } = renderHook(() =>
        useWidgetProps<TestToolOutput>(() => fallback)
      );

      expect(result.current).toBe(fallback);
    });

    it('updates when tool output changes', () => {
      const { result } = renderHook(() => useWidgetProps<TestToolOutput>());

      act(() => {
        window.openai.toolOutput = { message: 'updated' };
        dispatchGlobalsEvent({ toolOutput: { message: 'updated' } });
      });

      expect(result.current).toEqual({ message: 'updated' });
    });
  });

  describe('useWidgetState', () => {
    beforeEach(() => {
      window.openai = createOpenAiMock();
    });

    it('initialises from existing widget state', () => {
      const { result } = renderHook(() => useWidgetState<TestWidgetState>());
      expect(result.current[0]).toEqual({ count: 1 });
    });

    it('updates when globals broadcast new widget state', () => {
      const { result } = renderHook(() => useWidgetState<TestWidgetState>());

      act(() => {
        window.openai.widgetState = { count: 2 };
        dispatchGlobalsEvent({ widgetState: { count: 2 } });
      });

      expect(result.current[0]).toEqual({ count: 2 });
    });

    it('invokes window.openai.setWidgetState when setter is called', async () => {
      const { result } = renderHook(() => useWidgetState<TestWidgetState>());

      await act(async () => {
        result.current[1]({ count: 5 });
      });

      expect(window.openai.setWidgetState).toHaveBeenCalledWith({ count: 5 });
      expect(result.current[0]).toEqual({ count: 5 });
    });

    it('supports functional updates and skips host call when next state is null', async () => {
      const { result } = renderHook(() => useWidgetState<TestWidgetState>());

      await act(async () => {
        result.current[1]((prev) => ({
          count: (prev?.count ?? 0) + 1,
        }));
      });

      expect(window.openai.setWidgetState).toHaveBeenLastCalledWith({
        count: 2,
      });
      expect(result.current[0]).toEqual({ count: 2 });

      (window.openai.setWidgetState as ReturnType<typeof vi.fn>).mockClear();

      await act(async () => {
        result.current[1](() => null);
      });

      expect(window.openai.setWidgetState).not.toHaveBeenCalled();
      expect(result.current[0]).toBeNull();
    });
  });

  describe('useMaxHeight and useDisplayMode', () => {
    beforeEach(() => {
      window.openai = createOpenAiMock();
    });

    it('returns maxHeight updates from globals', () => {
      const { result } = renderHook(() => useMaxHeight());
      expect(result.current).toBe(480);

      act(() => {
        window.openai.maxHeight = 720;
        dispatchGlobalsEvent({ maxHeight: 720 });
      });

      expect(result.current).toBe(720);
    });

    it('returns displayMode updates from globals', () => {
      const { result } = renderHook(() => useDisplayMode());
      expect(result.current).toBe('inline');

      act(() => {
        window.openai.displayMode = 'pip';
        dispatchGlobalsEvent({ displayMode: 'pip' });
      });

      expect(result.current).toBe('pip');
    });
  });
});
