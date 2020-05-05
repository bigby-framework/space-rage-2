import { GameBehavior, Transform } from "@bigby/game";
import Camera from "~/sr2/behaviors/Camera";
import PlayerController from "./PlayerController";

export default class MainSceneController extends GameBehavior {
  preload() {
    this.loader.add("/assets/sprites.json");
  }

  awake() {
    this.getBehavior(Camera)!.target = this.entity
      .getChildBehavior(PlayerController)
      ?.getBehavior(Transform);
  }
}
