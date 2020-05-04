import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import Player from "./Player";

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [Transform, ResourceLoader],
    children: [Player()],
  });
