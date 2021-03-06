import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { PhysicsDataLoader2D, RigidBody2D } from "@bigby/physics2d";
import { AutoDestroy } from "@bigby/timers";
import { bullet } from "../../../../assets/physics.json";
import BulletController from "./behaviors/BulletController";

export default ({ position = { x: 0, y: 0 }, rotation = 0 } = {}) => {
  return new Entity({
    name: "Bullet",
    behaviors: [
      [Transform, { position, rotation, scale: { x: 0.5, y: 0.5 } }],
      [Sprite, { resource: "assets/sprites/bullet.png", anchor: 0.5 }],
      [RigidBody2D, { fixedRotation: true, bullet: true }],
      [PhysicsDataLoader2D, { data: bullet }],
      [AutoDestroy, { duration: 1 }],
      [BulletController],
    ],
  });
};
