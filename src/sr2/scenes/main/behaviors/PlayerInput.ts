import { Behavior } from "@bigby/core";
import { Keyboard } from "@bigby/game";

export default class PlayerInput extends Behavior {
  private keyboard?: Keyboard;

  stick = { x: 0, y: 0 };

  awake() {
    this.keyboard = this.getNearestBehavior(Keyboard);
  }

  update() {
    this.stick = { x: 0, y: 0 };

    const { isPressed } = this.keyboard!;
    if (isPressed("w")) this.stick.y -= 1;
    if (isPressed("s")) this.stick.y += 1;
    if (isPressed("a")) this.stick.x -= 1;
    if (isPressed("d")) this.stick.x += 1;
  }
}
