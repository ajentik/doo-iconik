import { describe, it, expect, vi } from 'vitest';
import dooIconikPlugin from '../index.js';

describe('dooIconikPlugin', () => {
  it('is a function', () => {
    expect(typeof dooIconikPlugin).toBe('function');
  });

  it('registers a directive and magic helper', () => {
    const directiveFn = vi.fn();
    const magicFn = vi.fn();
    const mockAlpine = {
      directive: directiveFn,
      magic: magicFn,
    };

    dooIconikPlugin(mockAlpine as any);

    expect(directiveFn).toHaveBeenCalledWith('doo-iconik', expect.any(Function));
    expect(magicFn).toHaveBeenCalledWith('dooIconik', expect.any(Function));
  });

  it('magic helper returns SVG string for valid icon', () => {
    let magicCallback: Function | undefined;
    const mockAlpine = {
      directive: vi.fn(),
      magic: vi.fn((name: string, cb: Function) => {
        if (name === 'dooIconik') magicCallback = cb;
      }),
    };

    dooIconikPlugin(mockAlpine as any);
    const helper = magicCallback!();

    const result = helper('heart');
    expect(result).toContain('<svg');
    expect(result).toContain('<path');
    expect(result).toContain('width="24"');
    expect(result).toContain('height="24"');
    expect(result).toContain('aria-hidden="true"');
  });

  it('magic helper returns empty string for unknown icon', () => {
    let magicCallback: Function | undefined;
    const mockAlpine = {
      directive: vi.fn(),
      magic: vi.fn((name: string, cb: Function) => {
        if (name === 'dooIconik') magicCallback = cb;
      }),
    };

    dooIconikPlugin(mockAlpine as any);
    const helper = magicCallback!();

    expect(helper('nonexistent-icon')).toBe('');
  });

  it('magic helper applies size option', () => {
    let magicCallback: Function | undefined;
    const mockAlpine = {
      directive: vi.fn(),
      magic: vi.fn((name: string, cb: Function) => {
        if (name === 'dooIconik') magicCallback = cb;
      }),
    };

    dooIconikPlugin(mockAlpine as any);
    const helper = magicCallback!();

    const result = helper('heart', { size: 'lg' });
    expect(result).toContain('width="32"');
    expect(result).toContain('height="32"');
  });

  it('magic helper applies ariaLabel', () => {
    let magicCallback: Function | undefined;
    const mockAlpine = {
      directive: vi.fn(),
      magic: vi.fn((name: string, cb: Function) => {
        if (name === 'dooIconik') magicCallback = cb;
      }),
    };

    dooIconikPlugin(mockAlpine as any);
    const helper = magicCallback!();

    const result = helper('heart', { ariaLabel: 'Heart' });
    expect(result).toContain('aria-label="Heart"');
    expect(result).toContain('role="img"');
    expect(result).not.toContain('aria-hidden');
  });

  it('magic helper applies animation class', () => {
    let magicCallback: Function | undefined;
    const mockAlpine = {
      directive: vi.fn(),
      magic: vi.fn((name: string, cb: Function) => {
        if (name === 'dooIconik') magicCallback = cb;
      }),
    };

    dooIconikPlugin(mockAlpine as any);
    const helper = magicCallback!();

    const result = helper('heart', { spin: true });
    expect(result).toContain('doo-iconik-spin');
  });

  it('magic helper applies variant class', () => {
    let magicCallback: Function | undefined;
    const mockAlpine = {
      directive: vi.fn(),
      magic: vi.fn((name: string, cb: Function) => {
        if (name === 'dooIconik') magicCallback = cb;
      }),
    };

    dooIconikPlugin(mockAlpine as any);
    const helper = magicCallback!();

    const result = helper('heart', { variant: 'glow' });
    expect(result).toContain('doo-iconik-glow');
  });
});
