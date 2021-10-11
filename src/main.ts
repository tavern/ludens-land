import { css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import config from './config'

@customElement('ludens-land')
export class LudensLand extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
      }
    `,
  ]

  @property({ attribute: false })
  private _gameRoot: HTMLElement

  @property({ attribute: false })
  private _Game?: Phaser.Game

  firstUpdated() {
    console.log('this.renderRoot')
    this._Game = new Phaser.Game({
      ...config,
      scene: {
        preload() {},
        create() {
          const particles = this.add.particles('blue')

          particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
          })
        },
      },
      scale: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      parent: this._gameRoot,
    })
    console.log('this._Game', this._Game)
  }

  constructor() {
    super()
    this._gameRoot = document.getElementById('ludens-land') as HTMLElement
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ludens-land': LudensLand
  }
}
