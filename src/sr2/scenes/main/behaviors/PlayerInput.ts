import { Behavior } from "@bigby/core";
import { Keyboard, vec2 } from "@bigby/game";

export default class PlayerInput extends Behavior {
  private keyboard?: Keyboard;

  stick = vec2.make(0, 0);
  buttons = {
    a: false,
  };

  awake() {
    this.keyboard = this.getNearestBehavior(Keyboard);
  }

  update() {
    this.stick.x = 0;
    this.stick.y = 0;

    const { isPressed } = this.keyboard!;
    if (isPressed("w")) this.stick.y -= 1;
    if (isPressed("s")) this.stick.y += 1;
    if (isPressed("a")) this.stick.x -= 1;
    if (isPressed("d")) this.stick.x += 1;

    /* Determine button state */
    this.buttons.a = isPressed("space");
  }
}
