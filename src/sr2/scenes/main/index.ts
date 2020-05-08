import { Entity } from "@bigby/core";
import { ResourceLoader, Transform, Sprite, TilingSprite } from "@bigby/game";
import { Physics2D } from "@bigby/physics2d";
import FollowCamera from "~/sr2/behaviors/FollowCamera";
import Asteroid from "./Asteroid";
import MainSceneController from "./behaviors/MainSceneController";
import Player from "./Player";

const background = new Entity({
  name: "Space Background",
  behaviors: [
    Transform,
    [
      TilingSprite,
      {
        uri: "/assets/backgrounds/space.jpg",
        bounds: { width: 4096, height: 4096 },
        anchor: 0.5,
      },
    ],
  ],
});

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [
      Transform,
      ResourceLoader,
      FollowCamera,
      MainSceneController,
      [Physics2D, { gravity: { x: 0, y: 0 } }],
    ],
    children: [background, Player(), Asteroid()],
  });
