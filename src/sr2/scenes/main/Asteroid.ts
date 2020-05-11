import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { PhysicsDataLoader2D } from "@bigby/physics2d";
import { random } from "bigby";
import physics from "./physics";

export default () =>
  new Entity({
    name: "Asteroid",
    behaviors: [
      [
        Transform,
        { position: { x: random.minusPlus(500), y: random.minusPlus(500) } },
      ],
      [Sprite, { resource: "assets/sprites/asteroid.png", anchor: 0.5 }],
      [PhysicsDataLoader2D, { data: physics.asteroid }],
    ],
  });
