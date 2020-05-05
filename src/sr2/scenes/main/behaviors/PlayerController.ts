import { GameBehavior } from "@bigby/game";
import PlayerInput from "./PlayerInput";
import { RigidBody2D } from "@bigby/game/esm/physics";
import { Vec2 } from "planck-js";

export default class PlayerController extends GameBehavior {
  thrust = 300;

  private input?: PlayerInput;
  private rb2d?: RigidBody2D;

  awake() {
    this.input = this.getNearestBehavior(PlayerInput);
    if (!this.input) throw "Couldn't find a PlayerInput behavior";

    this.rb2d = this.getBehavior(RigidBody2D);
    if (!this.rb2d)
      throw "This behavior needs a RigidBody2D on the same entity.";
  }

  update(dt: number) {
    const stick = this.input!.stick;

    this.rb2d?.body?.applyForceToCenter(
      new Vec2(stick.x * this.thrust, stick.y * this.thrust),
      true
    );
  }
}
