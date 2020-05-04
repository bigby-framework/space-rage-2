import { Entity } from "@bigby/core";
import {
  Renderer,
  Ticker,
  Transform,
  Sprite,
  ResourceLoader,
} from "@bigby/game";

/* Set up PIXI */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.STRICT_TEXTURE_CACHE = true;

/* Main scene */
const mainScene = new Entity({
  name: "Main Scene",
  behaviors: [Transform, ResourceLoader],
});

mainScene.addChild({
  name: "Player",
  behaviors: [Transform, [Sprite, { uri: "/assets/lemming.png" }]],
});

/* Game */
const game = new Entity({
  name: "Main Game",
  behaviors: [Renderer, Ticker],
});

game.awake();

/* Preload main scene resources */
mainScene.preload();
mainScene.getBehavior(ResourceLoader)?.loader.load(() => {
  game.addChild(mainScene);
});
