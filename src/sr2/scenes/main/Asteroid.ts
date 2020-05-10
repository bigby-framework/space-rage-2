import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { RigidBody2D, CircleCollider2D } from "@bigby/physics2d";
import { random } from "bigby";

export default () =>
  new Entity({
    name: "Asteroid",
    behaviors: [
      [
        Transform,
        { position: { x: random.minusPlus(500), y: random.minusPlus(500) } },
      ],
      [Sprite, { resource: "assets/sprites/asteroid.png", anchor: 0.5 }],
      [RigidBody2D],
      [CircleCollider2D, { radius: 6 }],
    ],
  });
