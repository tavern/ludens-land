import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('ll-game')
export class LLGame extends LitElement {
  static styles = []
}

declare global {
  interface HTMLElementTagNameMap {
    'll-game': LLGame
  }
}
