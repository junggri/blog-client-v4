import {InitCanvas} from "../init";

export class CountCanvas extends InitCanvas {
  public canvas: HTMLCanvasElement | null = null
  public parent: HTMLDivElement | null = null


  constructor(
    canvas: HTMLCanvasElement | null,
    parent: HTMLDivElement | null,
  ) {
    super(canvas, parent);
  }


}
