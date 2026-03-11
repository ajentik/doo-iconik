import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { iconData, resolveSize, buildTransform, buildAnimationClasses } from '@doo-iconik/core';
import type { DooIconikName, DooIconikSize } from '@doo-iconik/core';

@customElement('doo-iconik-lit')
export class DooIconikElement extends LitElement {
  static styles = css`
    :host { display: inline-flex; }
    @keyframes doo-iconik-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes doo-iconik-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    @keyframes doo-iconik-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
    .doo-iconik-spin { animation: doo-iconik-spin 1s linear infinite; }
    .doo-iconik-pulse { animation: doo-iconik-pulse 2s ease-in-out infinite; }
    .doo-iconik-bounce { animation: doo-iconik-bounce 1s ease infinite; }
  `;

  @property({ type: String }) name: DooIconikName = '' as DooIconikName;
  @property() size: DooIconikSize | number = 'md';
  @property({ type: Boolean }) spin = false;
  @property({ type: Boolean }) pulse = false;
  @property({ type: Boolean }) bounce = false;
  @property({ type: Boolean, attribute: 'flip-horizontal' }) flipHorizontal = false;
  @property({ type: Boolean, attribute: 'flip-vertical' }) flipVertical = false;

  render() {
    const icon = iconData[this.name];
    if (!icon) return nothing;

    const px = resolveSize(this.size);
    const cls = buildAnimationClasses(this.spin, this.pulse, this.bounce);
    const transform = buildTransform(this.flipHorizontal, this.flipVertical);

    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${icon.viewBox}
        width=${px}
        height=${px}
        fill=${icon.stroke ? 'none' : 'currentColor'}
        stroke=${icon.stroke ? 'currentColor' : nothing}
        stroke-width=${icon.stroke ? 2 : nothing}
        stroke-linecap=${icon.stroke ? 'round' : nothing}
        stroke-linejoin=${icon.stroke ? 'round' : nothing}
        class=${cls || nothing}
        style=${transform ? `transform: ${transform}` : nothing}
        aria-hidden="true"
      >
        ${icon.paths.map(d => svg`<path d=${d} />`)}
        ${(icon.circles || []).map(c => svg`<circle cx=${c.cx} cy=${c.cy} r=${c.r} />`)}
        ${(icon.lines || []).map(l => svg`<line x1=${l.x1} y1=${l.y1} x2=${l.x2} y2=${l.y2} />`)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'doo-iconik-lit': DooIconikElement;
  }
}
