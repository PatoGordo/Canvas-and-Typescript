import { PlayerInit } from './GameObjects/player'
import './Styles/style.css'

(() => {
  var canvas = <HTMLCanvasElement>document.querySelector('#canvas')
  const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')
  let player = PlayerInit(ctx)

  function game() {
    player.draw()

    requestAnimationFrame(game)
  }

  window.addEventListener('click', () => {
    player.update()
    console.log(player.w, player.x)
  })

  game()
})()