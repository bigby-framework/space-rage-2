import { Entity, $ } from "@bigby/core";
import {
  Keyboard,
  Renderer,
  ResourceLoader,
  Ticker,
  StatsPanel,
} from "@bigby/game";
import { Logger } from "@bigby/logger";
import * as PIXI from "pixi.js";
import mainScene from "./scenes/main";
import PlayerInput from "./scenes/main/behaviors/PlayerInput";

/* Set up PIXI */
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.STRICT_TEXTURE_CACHE = true;

/* Game */
const game = new Entity({
  name: "Main Game",
  behaviors: [Renderer, Ticker, Keyboard, PlayerInput, StatsPanel, Logger],
});

game.awake();

/* Preload main scene resources */
const scene = mainScene();
scene.preload();
$(scene, ResourceLoader)!.loader.load(() => {
  game.addChild(scene);
});
