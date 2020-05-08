import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";

export default () =>
  new Entity({
    name: "Asteroid",
    behaviors: [
      [Transform, { position: { x: 300, y: 300 } }],
      [Sprite, { resource: "assets/sprites/asteroid.png", anchor: 0.5 }],
      [RigidBody2D],
    ],
  });
