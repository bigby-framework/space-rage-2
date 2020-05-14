import { GameBehavior, Transform } from "@bigby/game";
import FollowCamera from "~/sr2/behaviors/FollowCamera";
import PlayerController from "./PlayerController";

export default class MainSceneController extends GameBehavior {
  preload() {
    this.loader.add("/assets/sprites.json");
  }

  awake() {
    const camera = this.$(FollowCamera)!;
    const player = this.entity.children.find((child) =>
      child.$(PlayerController)
    )!;
    camera.target = player.$(Transform);
  }
}
