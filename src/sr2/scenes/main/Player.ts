import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import { PhysicsDataLoader2D, RigidBody2D } from "@bigby/physics2d";
import { lemming } from "../../../../assets/physics.json";
import PlayerController from "./behaviors/PlayerController";

export default () =>
  new Entity({
    name: "Player",
    behaviors: [
      [Transform],
      [Sprite, { resource: "assets/sprites/lemming.png", anchor: 0.5 }],
      [RigidBody2D, { angularDamping: 1, linearDamping: 1 }],
      [PhysicsDataLoader2D, { data: lemming }],
      [PlayerController],
    ],
  });
