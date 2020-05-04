import { Node } from "~/bigby-core";
import { Game, Sprite, Transform } from "~/bigby-game";

/* Set up PIXI */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

/* Start the game */
const player = new Transform().set({ position: { x: 200, y: 200 } });
player.addChild(Sprite, { uri: "/assets/lemming.png" });

const game = new Game();
game.addChild(player);

Node.awake(game);
