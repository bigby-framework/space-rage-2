import { Node } from "../bigby-core";

import * as PIXI from "pixi.js";

export default class Game extends Node {
  app?: PIXI.Application;
  width = 1024;
  height = 576;

  onAwake() {
    this.app = new PIXI.Application({ width: this.width, height: this.height });
    document.body.appendChild(this.app.view);
  }

  onDestroy() {
    if (this.app) {
      document.body.removeChild(this.app.view);
      this.app.destroy();
    }
  }
}
