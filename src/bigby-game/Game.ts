import { Node } from "../bigby-core";

import * as PIXI from "pixi.js";

export default class Game extends Node {
  app?: PIXI.Application;

  setup() {
    this.onAwake(() => {
      this.app = new PIXI.Application({ resizeTo: document.body });
      document.body.appendChild(this.app.view);
    });
  }
}
