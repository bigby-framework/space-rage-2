import { Entity } from "@bigby/core";
import {
  Renderer,
  Ticker,
  Transform,
  Sprite,
  ResourceLoader,
} from "@bigby/game";
import mainScene from "./scenes/main";

/* Set up PIXI */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.STRICT_TEXTURE_CACHE = true;

/* Game */
const game = new Entity({
  name: "Main Game",
  behaviors: [Renderer, Ticker],
});

game.awake();

/* Preload main scene resources */
const scene = mainScene();
scene.preload();
scene.getBehavior(ResourceLoader)?.loader.load(() => {
  game.addChild(scene);
});
