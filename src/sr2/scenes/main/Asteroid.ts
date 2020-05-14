import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { PhysicsDataLoader2D, RigidBody2D } from "@bigby/physics2d";
import { random } from "bigby";
import physics from "./physics";

export default () => {
  /* Create base asteroid */
  const asteroid = new Entity({
    name: "Asteroid",
    behaviors: [
      [
        Transform,
        { position: { x: random.minusPlus(500), y: random.minusPlus(500) } },
      ],
      [Sprite, { resource: "assets/sprites/asteroid-rock1.png", anchor: 0.5 }],
      [RigidBody2D],
      [PhysicsDataLoader2D, { data: physics.asteroidRock1 }],
    ],
  });

  /* Add another rock */
  const num = random.number(6);
  for (let i = 0; i < num; i++) {
    const rock = Math.floor(random.number(3)) + 1;

    asteroid.addChild({
      name: "Subasteroid",
      behaviors: [
        [
          Transform,
          {
            position: { x: random.minusPlus(80), y: random.minusPlus(50) },
            rotation: random.minusPlus(0.5),
            scale: { x: random.variance(1, 0.5), y: random.variance(1, 0.3) },
          },
        ],
        [
          Sprite,
          {
            resource: `assets/sprites/asteroid-rock${rock}.png`,
            anchor: 0.5,
          },
        ],
        [
          PhysicsDataLoader2D,
          { data: (physics as any)[`asteroidRock${rock}`] },
        ],
      ],
    });
  }

  /* Add gems */
  for (let i = 0; i < random.number(3); i++) {
    const gem = Math.floor(random.number(3)) + 1;

    asteroid.addChild({
      name: "Gem",
      behaviors: [
        [
          Transform,
          {
            position: { x: random.minusPlus(80), y: random.minusPlus(50) },
            rotation: random.radian(),
          },
        ],
        [
          Sprite,
          {
            resource: `assets/sprites/asteroid-gem${gem}.png`,
            anchor: 0.5,
          },
        ],
      ],
    });
  }

  return asteroid;
};
