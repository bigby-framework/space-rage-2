import { $ } from "@bigby/core";
import { GameBehavior, vec2 } from "@bigby/game";
import { RigidBody2D } from "@bigby/physics2d";
import { minusPlus } from "~/../../bigby/packages/bigby-random/dist";

export default class BulletController extends GameBehavior {
  spread = 0.07;

  awake() {
    const rb2d = $(this, RigidBody2D)!;

    /* Slightly randomize angle */
    rb2d.rotation += minusPlus(this.spread);

    /* Set velocity */
    rb2d.linearVelocity = vec2.multiply(rb2d.getUpVector(), 1000);
  }
}
