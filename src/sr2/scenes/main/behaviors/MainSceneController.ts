import { GameBehavior } from "@bigby/game";

export default class MainSceneController extends GameBehavior {
  preload() {
    this.loader.add("/assets/sprites.json");
  }
}
