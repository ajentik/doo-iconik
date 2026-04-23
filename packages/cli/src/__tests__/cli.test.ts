import { describe, it, expect } from 'vitest';
import { search, listIcons, listCategories, getInfo } from '../index.js';

describe('search', () => {
  it('finds icons containing "heart"', () => {
    const results = search('heart');
    expect(results).toContain('heart');
    expect(results).toContain('heart-beat');
    expect(results.length).toBeGreaterThanOrEqual(2);
  });

  it('returns empty array for nonexistent query', () => {
    const results = search('nonexistent-xyz-12345');
    expect(results).toEqual([]);
  });

  it('returns multiple results for "arrow"', () => {
    const results = search('arrow');
    expect(results.length).toBeGreaterThan(5);
    expect(results).toContain('arrow-left');
    expect(results).toContain('arrow-right');
  });

  it('is case-insensitive', () => {
    const lower = search('heart');
    const upper = search('HEART');
    expect(lower).toEqual(upper);
  });
});

describe('listIcons', () => {
  it('returns all 595 icons when called without category', () => {
    const icons = listIcons();
    expect(icons).toHaveLength(595);
  });

  it('returns icons for a valid category', () => {
    const icons = listIcons('arrow');
    expect(icons.length).toBeGreaterThan(0);
    expect(icons).toContain('chevron-down');
  });

  it('returns empty array for unknown category', () => {
    const icons = listIcons('nonexistent-category');
    expect(icons).toEqual([]);
  });
});

describe('listCategories', () => {
  it('returns all 19 categories', () => {
    const cats = listCategories();
    expect(cats).toHaveLength(19);
    expect(cats).toContain('arrow');
    expect(cats).toContain('health');
    expect(cats).toContain('weather');
  });
});

describe('getInfo', () => {
  it('returns metadata for a valid icon', () => {
    const info = getInfo('heart');
    expect(info).not.toBeNull();
    expect(info!.name).toBe('heart');
    expect(info!.viewBox).toBe('0 0 24 24');
    expect(info!.pathCount).toBeGreaterThan(0);
    expect(info!.type).toMatch(/^(stroke|fill)$/);
    expect(typeof info!.circleCount).toBe('number');
    expect(typeof info!.lineCount).toBe('number');
  });

  it('returns null for nonexistent icon', () => {
    const info = getInfo('nonexistent-icon-xyz');
    expect(info).toBeNull();
  });
});
