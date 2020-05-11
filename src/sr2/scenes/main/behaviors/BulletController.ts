import { GameBehavior, vec2 } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";

export default class BulletController extends GameBehavior {
  awake() {
    /* Set velocity */
    const rb2d = this.getBehavior(RigidBody2D)!;
    rb2d.linearVelocity = vec2.multiply(rb2d.getUpVector(), 1000);

    /* Destroy automatically */
    setTimeout(() => this.entity.destroy(), 200);

    /* TODO: use a Timer/Countdown behavior for this, and introduce embedded/nested/etc. behaviors */
  }
}
