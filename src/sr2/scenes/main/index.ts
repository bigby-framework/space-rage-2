import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import { Physics2D } from "@bigby/physics2d";
import FollowCamera from "~/sr2/behaviors/FollowCamera";
import Asteroid from "./Asteroid";
import MainSceneController from "./behaviors/MainSceneController";
import Player from "./Player";

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
    children: [Player(), Asteroid()],
  });
