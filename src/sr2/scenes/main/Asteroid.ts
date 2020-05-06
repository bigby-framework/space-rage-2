import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";

export default () =>
  new Entity({
    name: "Asteroid",
    behaviors: [
      [Transform, { position: { x: 300, y: 300 } }],
      [Sprite, { texture: "assets/sprites/asteroid.png", anchor: 0.5 }],
    ],
  });
