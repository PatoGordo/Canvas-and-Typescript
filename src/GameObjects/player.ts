export class Player {
  ctx: CanvasRenderingContext2D
  color: string
  x: number;
  y: number;
  h: number; 
  w: number;
  constructor(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, w: number, h: number) {
    this.ctx = ctx
    this.color = color
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  draw() {
    const { x, y, w, h, ctx, color } = this
    ctx.rect(x, y, w, h)
    ctx.fill()
    ctx.fillStyle = color
  }
}