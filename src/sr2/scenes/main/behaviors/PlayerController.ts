import { GameBehavior } from "@bigby/game";
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
    const stick = this.input!.stick;

    /* Rotate ship with the horizontal axis */
    if (stick.x != 0) {
      this.rb2d!.body!.applyTorque(this.angularThrust * stick.x, true);
    }

    /* Move ship forward/backward with the vertical axis */
    this.rb2d?.accelerate(
      this.rb2d.getUpVector(),
      this.linearThrust * -stick.y
    );
  }
}
