import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'

@customElement('ll-button')
export class LLButton extends LitElement {
  static styles = [styles]

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
