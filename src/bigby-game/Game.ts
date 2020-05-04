import * as PIXI from "pixi.js";
import Node2D from "./Node2D";

export default class Game extends Node2D {
  app?: PIXI.Application;
  width = 1024;
  height = 576;

  awake() {
    super.awake();

    /* Create PIXI Application */
    this.app = new PIXI.Application({ width: this.width, height: this.height });
    document.body.appendChild(this.app.view);

    /* Add our container to the stage. */
    this.app.stage.addChild(this.container);
  }

  destroy() {
    if (this.app) {
      document.body.removeChild(this.app.view);
      this.app.destroy();
    }
  }
}
