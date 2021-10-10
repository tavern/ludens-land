import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './molecules/ll-button'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ludens-land')
export class LudensLand extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `,
  ]

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <ll-button @click=${this._onClick} part="button">Click Count: ${this.count}</ll-button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
  }

  foo(): string {
    return 'foo'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ludens-land': LudensLand
  }
}
