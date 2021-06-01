type playerConfigTypes = {
  x: number;
  y: number;
  w: number;
  h: number;
  draw(): void;
  update(): void;
}

function PlayerInit(ctx: CanvasRenderingContext2D) {
  let player: playerConfigTypes = {
    x: 0,
    y: 0,
    w: 25,
    h: 25,
    draw() {
      const { x, y, w, h } = this
      ctx.rect(x, y, w, h)
      ctx.fill()
      ctx.fillStyle = `rgb(149,117,205)`
    },
    update() {
      ctx.moveTo(this.x += 25, this.y)
      ctx.closePath()
    }
  }
  return player
}
export {
  PlayerInit
}