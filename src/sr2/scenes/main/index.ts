import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import Player from "./Player";
import Asteroid from "./Asteroid";

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [Transform, ResourceLoader],
    children: [Player(), Asteroid()],
  });
