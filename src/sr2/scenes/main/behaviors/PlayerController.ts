import { GameBehavior, vec2, Transform } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";
import PlayerInput from "./PlayerInput";
import Bullet from "../Bullet";
import * as planck from "planck-js";

export default class PlayerController extends GameBehavior {
  linearThrust = 8000;
  angularThrust = 4000;

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
    if (!this.input) return;

    /* Movement */
    const stick = this.input!.stick;

    if (vec2.length(stick) > 0) {
      /* Move ship into the direction of the stick */
      this.rb2d.accelerate(vec2.multiply(stick, this.linearThrust));

      /* Rotate it into the direction of the stick */
      this.rb2d.rotateTowardsVector(stick, this.angularThrust, Math.PI / 2);
    }

    /* Firing */
    if (this.input.buttons.a) {
      this.fireBullet();
    }
  }

  fireBullet() {
    /* Spawn a new bullet */
    const bullet = Bullet({
      position: this.transform!.position,
      rotation: this.transform!.rotation,
    });

    this.entity.parent?.addChild(bullet);

    const rb2d = bullet.getBehavior(RigidBody2D)!;
    rb2d.body?.setLinearVelocity(planck.Vec2(rb2d.getUpVector()).mul(1000));
  }
}
