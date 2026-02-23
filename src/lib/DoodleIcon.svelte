<script lang="ts">
  import type { DoodleIconName, DoodleIconSize } from './types.js';
  import { iconData } from './icon-data.js';

  interface Props {
    name: DoodleIconName;
    size?: DoodleIconSize | number;
    spin?: boolean;
    pulse?: boolean;
    bounce?: boolean;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    class?: string;
    [key: string]: unknown;
  }

  const sizeMap: Record<string, number> = {
    xs: 12, sm: 16, md: 24, lg: 32, xl: 48, '2xl': 64
  };

  let { name, size = 'md', spin = false, pulse = false, bounce = false, flipHorizontal = false, flipVertical = false, class: className = '', ...rest }: Props = $props();

  const icon = $derived(iconData[name]);
  const pixelSize = $derived(typeof size === 'number' ? size : (sizeMap[size] ?? 24));

  const transforms = $derived.by(() => {
    const t: string[] = [];
    if (flipHorizontal) t.push('scaleX(-1)');
    if (flipVertical) t.push('scaleY(-1)');
    return t.length ? t.join(' ') : undefined;
  });

  const animClass = $derived.by(() => {
    const classes: string[] = [];
    if (spin) classes.push('doodle-spin');
    if (pulse) classes.push('doodle-pulse');
    if (bounce) classes.push('doodle-bounce');
    return classes.join(' ');
  });
</script>

{#if icon}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox={icon.viewBox}
  width={pixelSize}
  height={pixelSize}
  fill={icon.stroke ? 'none' : 'currentColor'}
  stroke={icon.stroke ? 'currentColor' : undefined}
  stroke-width={icon.stroke ? 2 : undefined}
  stroke-linecap={icon.stroke ? 'round' : undefined}
  stroke-linejoin={icon.stroke ? 'round' : undefined}
  class="{animClass} {className}"
  style:transform={transforms}
  aria-hidden="true"
  {...rest}
>
  {#each icon.paths as d}
    <path {d} />
  {/each}
  {#if icon.circles}
    {#each icon.circles as c}
      <circle cx={c.cx} cy={c.cy} r={c.r} />
    {/each}
  {/if}
  {#if icon.lines}
    {#each icon.lines as l}
      <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
    {/each}
  {/if}
</svg>
{/if}

<style>
  @keyframes doodle-spin-kf { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes doodle-pulse-kf { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  @keyframes doodle-bounce-kf { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
  :global(.doodle-spin) { animation: doodle-spin-kf 1s linear infinite; }
  :global(.doodle-pulse) { animation: doodle-pulse-kf 2s ease-in-out infinite; }
  :global(.doodle-bounce) { animation: doodle-bounce-kf 1s ease infinite; }
</style>
