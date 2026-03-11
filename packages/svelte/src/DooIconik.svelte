<script lang="ts">
  import type { DooIconikName, DooIconikSize } from '@doo-iconik/core';
  import { iconData, resolveSize, buildTransform, buildAnimationClasses } from '@doo-iconik/core';

  interface Props {
    name: DooIconikName;
    size?: DooIconikSize | number;
    spin?: boolean;
    pulse?: boolean;
    bounce?: boolean;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    class?: string;
    [key: string]: unknown;
  }

  let { name, size = 'md', spin = false, pulse = false, bounce = false, flipHorizontal = false, flipVertical = false, class: className = '', ...rest }: Props = $props();

  const icon = $derived(iconData[name]);
  const pixelSize = $derived(resolveSize(size));
  const transforms = $derived(buildTransform(flipHorizontal, flipVertical));
  const animClass = $derived(buildAnimationClasses(spin, pulse, bounce));
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
  @keyframes doo-iconik-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes doo-iconik-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  @keyframes doo-iconik-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
  :global(.doo-iconik-spin) { animation: doo-iconik-spin 1s linear infinite; }
  :global(.doo-iconik-pulse) { animation: doo-iconik-pulse 2s ease-in-out infinite; }
  :global(.doo-iconik-bounce) { animation: doo-iconik-bounce 1s ease infinite; }
</style>
