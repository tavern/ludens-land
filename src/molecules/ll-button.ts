import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('ll-button')
export class LLButton extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
      button {
        border: none;
        background-color: var(--color-primary);
      }
    `,
  ]

  @property({ type: String })
  text: string = ''

  render() {
    return html`<button part="button"><slot></slot></button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'll-button': LLButton
  }
}
