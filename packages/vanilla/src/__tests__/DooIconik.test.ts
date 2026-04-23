import { describe, it, expect, beforeAll } from 'vitest';
import { DooIconikElement } from '../DooIconik.js';
import { register, createIcon } from '../index.js';

beforeAll(() => {
  register();
});

function createElement(attrs: Record<string, string | boolean> = {}): HTMLElement {
  const el = document.createElement('doo-iconik');
  for (const [key, value] of Object.entries(attrs)) {
    if (typeof value === 'boolean') {
      if (value) el.setAttribute(key, '');
    } else {
      el.setAttribute(key, value);
    }
  }
  document.body.appendChild(el);
  return el;
}

function getSvg(el: HTMLElement): SVGSVGElement | null {
  return el.shadowRoot?.querySelector('svg') ?? null;
}

function cleanup(el: HTMLElement) {
  el.remove();
}

describe('DooIconikElement (Vanilla Web Component)', () => {
  it('renders an SVG element', () => {
    const el = createElement({ name: 'heart' });
    expect(getSvg(el)).not.toBeNull();
    cleanup(el);
  });

  it('renders nothing for unknown icon name', () => {
    const el = createElement({ name: 'nonexistent-icon' });
    expect(getSvg(el)).toBeNull();
    cleanup(el);
  });

  it('applies default size (24px)', () => {
    const el = createElement({ name: 'heart' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
    cleanup(el);
  });

  it('applies named size (lg = 32)', () => {
    const el = createElement({ name: 'heart', size: 'lg' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
    cleanup(el);
  });

  it('is aria-hidden by default', () => {
    const el = createElement({ name: 'heart' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    cleanup(el);
  });

  it('applies aria-label and role="img" when aria-label set', () => {
    const el = createElement({ name: 'heart', 'aria-label': 'Heart icon' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('aria-label')).toBe('Heart icon');
    expect(svg.getAttribute('role')).toBe('img');
    cleanup(el);
  });

  it('applies animation class (spin)', () => {
    const el = createElement({ name: 'heart', spin: true });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('class')).toContain('doo-iconik-spin');
    cleanup(el);
  });

  it('applies variant class (glow)', () => {
    const el = createElement({ name: 'heart', variant: 'glow' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('class')).toContain('doo-iconik-glow');
    cleanup(el);
  });

  it('applies transform for flip-horizontal', () => {
    const el = createElement({ name: 'heart', 'flip-horizontal': true });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('style')).toContain('scaleX(-1)');
    cleanup(el);
  });

  it('renders path elements', () => {
    const el = createElement({ name: 'heart' });
    const paths = el.shadowRoot?.querySelectorAll('path') ?? [];
    expect(paths.length).toBeGreaterThanOrEqual(1);
    cleanup(el);
  });
});

describe('createIcon (programmatic)', () => {
  it('returns an SVG element for valid icon', () => {
    const svg = createIcon('heart');
    expect(svg).not.toBeNull();
    expect(svg?.tagName.toLowerCase()).toBe('svg');
  });

  it('returns null for unknown icon', () => {
    expect(createIcon('nonexistent-icon' as any)).toBeNull();
  });

  it('applies size', () => {
    const svg = createIcon('heart', { size: 'lg' })!;
    expect(svg.getAttribute('width')).toBe('32');
  });

  it('applies ariaLabel', () => {
    const svg = createIcon('heart', { ariaLabel: 'Heart' })!;
    expect(svg.getAttribute('aria-label')).toBe('Heart');
    expect(svg.getAttribute('role')).toBe('img');
  });
});
