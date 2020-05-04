import { GameBehavior } from "@bigby/game";
import PlayerInput from "./PlayerInput";

export default class PlayerController extends GameBehavior {
  input?: PlayerInput;

  thrust = 100;

  awake() {
    this.input = this.getBehavior(PlayerInput);
  }

  update(dt: number) {
    const stick = this.input!.stick;
    this.transform!.position.x += stick.x * this.thrust * dt;
    this.transform!.position.y += stick.y * this.thrust * dt;
  }
}
