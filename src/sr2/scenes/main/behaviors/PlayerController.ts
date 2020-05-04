import { GameBehavior } from "@bigby/game";
import PlayerInput from "./PlayerInput";

export default class PlayerController extends GameBehavior {
  input?: PlayerInput;

  thrust = 100;

  awake() {
    this.input = this.getNearestBehavior(PlayerInput);
    if (!this.input) throw "Couldn't find a PlayerInput behavior";
  }

  update(dt: number) {
    if (this.input) {
      const stick = this.input.stick;
      this.transform!.position.x += stick.x * this.thrust * dt;
      this.transform!.position.y += stick.y * this.thrust * dt;
    }
  }
}
