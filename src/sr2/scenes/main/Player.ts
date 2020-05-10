import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import PlayerController from "./behaviors/PlayerController";
import { RigidBody2D, CircleCollider2D } from "@bigby/physics2d";

export default () =>
  new Entity({
    name: "Player",
    behaviors: [
      [Transform],
      [Sprite, { resource: "assets/sprites/lemming.png", anchor: 0.5 }],
      [RigidBody2D, { linearDamping: 1, angularDamping: 1 }],
      [CircleCollider2D, { radius: 6 }],
      [PlayerController],
    ],
  });
