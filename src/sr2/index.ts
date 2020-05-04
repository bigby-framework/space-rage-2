import { Entity } from "@bigby/core";
import { Renderer, Ticker, Transform, Sprite } from "@bigby/game";

/* Set up PIXI */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.STRICT_TEXTURE_CACHE = true;

/* Main scene */
const mainScene = new Entity({ name: "Main Scene", behaviors: [Transform] });
mainScene.addChild({
  name: "Player",
  behaviors: [Transform, [Sprite, { uri: "/assets/lemming.png" }]],
});

/* Game */
const game = new Entity({
  name: "Main Game",
  behaviors: [Renderer, Ticker],
  children: [mainScene],
});

game.awake();
