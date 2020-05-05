import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import Player from "./Player";
import Asteroid from "./Asteroid";
import MainSceneController from "./behaviors/MainSceneController";
import Camera from "~/sr2/behaviors/Camera";

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [Transform, ResourceLoader, Camera, MainSceneController],
    children: [Player(), Asteroid()],
  });
