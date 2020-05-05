import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import PlayerController from "./behaviors/PlayerController";

export default () =>
  new Entity({
    name: "Player",
    behaviors: [
      Transform,
      [Sprite, { texture: "assets/sprites/lemming.png", anchor: 0.5 }],

      PlayerController,
    ],
  });
