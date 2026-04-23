import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DooIconik from '../DooIconik.vue';

describe('DooIconik', () => {
  it('renders an SVG element', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart' } });
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('renders nothing for unknown icon name', () => {
    const wrapper = mount(DooIconik, { props: { name: 'nonexistent-icon' as any } });
    expect(wrapper.find('svg').exists()).toBe(false);
  });

  it('applies default size (24px)', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart' } });
    const svg = wrapper.find('svg');
    expect(svg.attributes('width')).toBe('24');
    expect(svg.attributes('height')).toBe('24');
  });

  it('applies named size (lg = 32)', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart', size: 'lg' } });
    const svg = wrapper.find('svg');
    expect(svg.attributes('width')).toBe('32');
    expect(svg.attributes('height')).toBe('32');
  });

  it('applies numeric size (64)', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart', size: 64 } });
    const svg = wrapper.find('svg');
    expect(svg.attributes('width')).toBe('64');
    expect(svg.attributes('height')).toBe('64');
  });

  it('is aria-hidden by default', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart' } });
    const svg = wrapper.find('svg');
    expect(svg.attributes('aria-hidden')).toBe('true');
  });

  it('applies aria-label and role="img" when ariaLabel set', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart', ariaLabel: 'Heart icon' } });
    const svg = wrapper.find('svg');
    expect(svg.attributes('aria-label')).toBe('Heart icon');
    expect(svg.attributes('role')).toBe('img');
    expect(svg.attributes('aria-hidden')).toBeUndefined();
  });

  it('applies animation class (spin)', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart', spin: true } });
    const svg = wrapper.find('svg');
    expect(svg.classes()).toContain('doo-iconik-spin');
  });

  it('applies variant class (glow)', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart', variant: 'glow' } });
    const svg = wrapper.find('svg');
    expect(svg.classes()).toContain('doo-iconik-glow');
  });

  it('applies transform for flipHorizontal', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart', flipHorizontal: true } });
    const svg = wrapper.find('svg');
    expect(svg.attributes('style')).toContain('scaleX(-1)');
  });

  it('renders path elements', () => {
    const wrapper = mount(DooIconik, { props: { name: 'heart' } });
    const paths = wrapper.findAll('path');
    expect(paths.length).toBeGreaterThanOrEqual(1);
  });
});
