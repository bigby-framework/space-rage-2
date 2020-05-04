import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";

export default () =>
  new Entity({
    name: "Player",
    behaviors: [Transform, [Sprite, { uri: "/assets/lemming.png" }]],
  });
