import { GameBehavior, vec2 } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";
import PlayerInput from "./PlayerInput";

export default class PlayerController extends GameBehavior {
  linearThrust = 8000;
  angularThrust = 9000;

  private input?: PlayerInput;
  private rb2d?: RigidBody2D;

  awake() {
    this.input = this.getNearestBehavior(PlayerInput);
    if (!this.input) throw "Couldn't find a PlayerInput behavior";

    this.rb2d = this.getBehavior(RigidBody2D);
    if (!this.rb2d)
      throw "This behavior needs a RigidBody2D on the same entity.";
  }

  update() {
    if (!this.rb2d) return;

    const stick = this.input!.stick;

    /* Move ship into the direction of the stick */
    this.rb2d.accelerate(vec2.multiply(stick, this.linearThrust));
  }
}
