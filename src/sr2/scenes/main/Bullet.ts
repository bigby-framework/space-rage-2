import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";

export default ({ position = { x: 0, y: 0 }, rotation = 0 } = {}) => {
  return new Entity({
    name: "Bullet",
    behaviors: [
      [Transform, { position, rotation, scale: 0.5 }],
      [Sprite, { resource: "assets/sprites/bullet.png", anchor: 0.5 }],
      [RigidBody2D, { fixedRotation: true, bullet: true }],
    ],
  });
};
