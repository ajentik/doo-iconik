import type { DooIconikSize } from './types.js';

export const sizeMap: Record<string, number> = {
  xs: 12, sm: 16, md: 24, lg: 32, xl: 48, '2xl': 64
};

export function resolveSize(size: DooIconikSize | number): number {
  return typeof size === 'number' ? size : (sizeMap[size] ?? 24);
}

export function buildTransform(flipH: boolean, flipV: boolean): string | undefined {
  const t: string[] = [];
  if (flipH) t.push('scaleX(-1)');
  if (flipV) t.push('scaleY(-1)');
  return t.length ? t.join(' ') : undefined;
}

export function buildAnimationClasses(spin: boolean, pulse: boolean, bounce: boolean): string {
  const classes: string[] = [];
  if (spin) classes.push('doo-iconik-spin');
  if (pulse) classes.push('doo-iconik-pulse');
  if (bounce) classes.push('doo-iconik-bounce');
  return classes.join(' ');
}

// CSS keyframes that any framework can inject
export const animationCSS = `
@keyframes doo-iconik-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes doo-iconik-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes doo-iconik-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
.doo-iconik-spin { animation: doo-iconik-spin 1s linear infinite; }
.doo-iconik-pulse { animation: doo-iconik-pulse 2s ease-in-out infinite; }
.doo-iconik-bounce { animation: doo-iconik-bounce 1s ease infinite; }
`;
