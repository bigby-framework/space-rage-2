import * as PIXI from "pixi.js";
import { Node } from "~/bigby-core";

export default class Node2D extends Node {
  container = new PIXI.Container();

  get position() {
    return this.container.position;
  }

  set position(v: { x: number; y: number }) {
    this.container.position.set(v.x, v.y);
  }

  awake() {
    /* Add our container to the next Node2D. */
    this.getNearest(Node2D)?.container.addChild(this.container);
  }

  destroy() {
    this.container.destroy();
  }
}
