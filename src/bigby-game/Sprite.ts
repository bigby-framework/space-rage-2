import { Node } from "../bigby-core";
import * as PIXI from "pixi.js";
import Game from "./Game";

export default class Sprite extends Node {
  private _uri = "";

  get uri() {
    return this._uri;
  }

  set uri(v) {
    this._uri = v;
    this.sprite.texture = PIXI.Texture.from(this._uri);
  }

  private sprite = new PIXI.Sprite();

  awake() {
    const game = this.getNearest(Game);
    if (game) {
      game.app?.stage.addChild(this.sprite);
    }
  }
}
