import { GameBehavior, vec2 } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";
import { $, $up } from "bigby";
import Bullet from "../Bullet";
import PlayerInput from "./PlayerInput";
import { Cooldown } from "@bigby/timers";

export default class PlayerController extends GameBehavior {
  linearThrust = 8000;
  angularThrust = 4000;

  private input?: PlayerInput;
  private rb2d?: RigidBody2D;
  private fireCooldown?: Cooldown;

  awake() {
    this.input = $up(this, PlayerInput);
    if (!this.input) throw "Couldn't find a PlayerInput behavior";

    this.rb2d = $(this, RigidBody2D);
    if (!this.rb2d)
      throw "This behavior needs a RigidBody2D on the same entity.";

    this.fireCooldown = this.entity.addBehavior(Cooldown, { duration: 0.065 });
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
      this.fireCooldown?.ifReady(() => this.fireBullet());
    }
  }

  fireBullet() {
    /* Calculate bullet position */
    const bulletPos = vec2.add(
      this.transform!.position,
      vec2.multiply(this.rb2d!.getUpVector(), 65)
    );

    /* Spawn a new bullet */
    const bullet = Bullet({
      position: bulletPos,
      rotation: this.transform!.rotation,
    });

    this.entity.parent?.addChild(bullet);
  }
}
