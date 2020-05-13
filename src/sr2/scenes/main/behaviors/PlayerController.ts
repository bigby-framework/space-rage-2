import { GameBehavior, vec2 } from "@bigby/game";
import { IVec2 } from "@bigby/game/dist/vec2";
import { RigidBody2D } from "@bigby/physics2d";
import { Cooldown } from "@bigby/timers";
import { $, $up } from "bigby";
import Bullet from "../Bullet";
import PlayerInput from "./PlayerInput";

export default class PlayerController extends GameBehavior {
  linearThrust = 4000;
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

    this.fireCooldown = this.entity.addBehavior(Cooldown, { duration: 0.05 });
  }

  update() {
    if (!this.rb2d) return;
    if (!this.input) return;

    const { leftStick, rightStick } = this.input!;

    /* Left Stick: Movement */
    if (vec2.length(leftStick) > 0) {
      /* Move ship into the direction of the stick */
      this.rb2d.accelerate(vec2.multiply(leftStick, this.linearThrust));

      /* Rotate it into the direction we're flying */
      this.rb2d.rotateTowardsVector(leftStick, this.angularThrust, Math.PI / 2);
    }

    /* Button A: Firing */
    if (this.input.buttons.a) {
      this.fireCooldown?.ifReady(() => this.fireBullet(rightStick));
    }
  }

  fireBullet(direction: IVec2) {
    /* Calculate bullet position */
    const bulletPos = vec2.add(
      this.transform!.position,
      vec2.multiply(this.rb2d!.getUpVector(), 10)
    );

    /* Spawn a new bullet */
    const bullet = Bullet({
      position: bulletPos,
      rotation: vec2.toRadians(direction) + Math.PI / 2,
    });

    this.entity.parent?.addChild(bullet);
  }
}
