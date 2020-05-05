import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import Player from "./Player";
import Asteroid from "./Asteroid";
import MainSceneController from "./behaviors/MainSceneController";

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [Transform, ResourceLoader, MainSceneController],
    children: [Player(), Asteroid()],
  });
