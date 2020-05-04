import { Entity } from "@bigby/core";
import { Sprite, Transform } from "@bigby/game";
import PlayerInput from "./behaviors/PlayerInput";
import PlayerController from "./behaviors/PlayerController";

export default () =>
  new Entity({
    name: "Player",
    behaviors: [
      Transform,
      [Sprite, { uri: "/assets/lemming.png" }],

      PlayerController,
    ],
  });
