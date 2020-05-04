import { Node } from "~/bigby-core";
import { Game, Sprite } from "~/bigby-game";

/* Set up PIXI */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

/* Start the game */
const game = new Game();
game.addChild(Sprite, { uri: "/assets/lemming.png" });

Node.awake(game);
