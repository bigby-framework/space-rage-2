import { Entity } from "@bigby/core";
import { ResourceLoader, Transform } from "@bigby/game";
import player from "./player";

export default () =>
  new Entity({
    name: "Main Scene",
    behaviors: [Transform, ResourceLoader],
    children: [player()],
  });
