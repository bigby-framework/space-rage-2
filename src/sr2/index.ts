import { Entity } from "@bigby/core";
import { Renderer, Ticker } from "@bigby/game";

/* Set up PIXI */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

/* Game */

const game = new Entity({ name: "Main Game", behaviors: [Renderer, Ticker] });

game.awake();
