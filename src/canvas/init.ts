import {useRouter} from "next/router";

export class InitCanvas {
  public stageWidth: number = 0
  public stageHeight: number = 0
  public canvas: HTMLCanvasElement | null
  public parent: HTMLElement | null
  public ctx: CanvasRenderingContext2D | null = null

  constructor(canvas: HTMLCanvasElement | null, parent: HTMLDivElement | null) {
    this.canvas = canvas
    this.parent = parent

    if (this.canvas) {

      this.ctx = this.canvas.getContext("2d");

      if (this.parent !== null) {
        const style = window.getComputedStyle(this.parent);
        this.canvas.width = parseInt(style.width, 10)
        this.canvas.height = parseInt(style.height, 10)
      } else {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
      }
    }
  }
}
