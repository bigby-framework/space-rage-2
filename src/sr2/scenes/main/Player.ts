import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import PlayerController from "./behaviors/PlayerController";
import { RigidBody2D } from "@bigby/game/esm/physics";

export default () =>
  new Entity({
    name: "Player",
    behaviors: [
      [Transform],
      [Sprite, { texture: "assets/sprites/lemming.png", anchor: 0.5 }],
      [RigidBody2D],
      [PlayerController],
    ],
  });
