import { describe, it, expect, beforeAll } from 'vitest';
import '../DooIconik.js';

// Helper to create the element and wait for update
async function createElement(attrs: Record<string, string | boolean> = {}): Promise<HTMLElement> {
  const el = document.createElement('doo-iconik-lit');
  for (const [key, value] of Object.entries(attrs)) {
    if (typeof value === 'boolean') {
      if (value) el.setAttribute(key, '');
    } else {
      el.setAttribute(key, value);
    }
  }
  document.body.appendChild(el);
  // Wait for Lit to render
  await (el as any).updateComplete;
  return el;
}

function getSvg(el: HTMLElement): SVGSVGElement | null {
  return el.shadowRoot?.querySelector('svg') ?? null;
}

function cleanup(el: HTMLElement) {
  el.remove();
}

describe('DooIconikElement (Lit)', () => {
  it('renders an SVG element', async () => {
    const el = await createElement({ name: 'heart' });
    expect(getSvg(el)).not.toBeNull();
    cleanup(el);
  });

  it('renders nothing for unknown icon name', async () => {
    const el = await createElement({ name: 'nonexistent-icon' });
    expect(getSvg(el)).toBeNull();
    cleanup(el);
  });

  it('applies default size (24px)', async () => {
    const el = await createElement({ name: 'heart' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
    cleanup(el);
  });

  it('applies named size (lg = 32)', async () => {
    const el = await createElement({ name: 'heart', size: 'lg' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
    cleanup(el);
  });

  it('applies numeric size (64) via property', async () => {
    const el = await createElement({ name: 'heart' });
    (el as any).size = 64;
    await (el as any).updateComplete;
    const svg = getSvg(el)!;
    expect(svg.getAttribute('width')).toBe('64');
    expect(svg.getAttribute('height')).toBe('64');
    cleanup(el);
  });

  it('is aria-hidden by default', async () => {
    const el = await createElement({ name: 'heart' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    cleanup(el);
  });

  it('applies aria-label and role="img" when aria-label set', async () => {
    const el = await createElement({ name: 'heart', 'aria-label': 'Heart icon' });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('aria-label')).toBe('Heart icon');
    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('aria-hidden')).toBeNull();
    cleanup(el);
  });

  it('applies animation class (spin)', async () => {
    const el = await createElement({ name: 'heart', spin: true });
    const svg = getSvg(el)!;
    expect(svg.classList.contains('doo-iconik-spin')).toBe(true);
    cleanup(el);
  });

  it('applies variant class (glow)', async () => {
    const el = await createElement({ name: 'heart', variant: 'glow' });
    const svg = getSvg(el)!;
    expect(svg.classList.contains('doo-iconik-glow')).toBe(true);
    cleanup(el);
  });

  it('applies transform for flip-horizontal', async () => {
    const el = await createElement({ name: 'heart', 'flip-horizontal': true });
    const svg = getSvg(el)!;
    expect(svg.getAttribute('style')).toContain('scaleX(-1)');
    cleanup(el);
  });

  it('renders path elements', async () => {
    const el = await createElement({ name: 'heart' });
    const paths = el.shadowRoot?.querySelectorAll('path') ?? [];
    expect(paths.length).toBeGreaterThanOrEqual(1);
    cleanup(el);
  });
});
