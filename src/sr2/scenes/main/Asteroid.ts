import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import PlayerController from "./behaviors/PlayerController";

export default () =>
  new Entity({
    name: "Asteroid",
    behaviors: [
      [Transform, { position: { x: 300, y: 300 } }],
      [Sprite, { uri: "/assets/images/asteroid.png", anchor: 0.5 }],
    ],
  });
