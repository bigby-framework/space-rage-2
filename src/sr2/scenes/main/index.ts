import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import Player from "./Player";
import Asteroid from "./Asteroid";
import MainSceneController from "./behaviors/MainSceneController";
import FollowCamera from "~/sr2/behaviors/FollowCamera";

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [Transform, ResourceLoader, FollowCamera, MainSceneController],
    children: [Player(), Asteroid()],
  });
