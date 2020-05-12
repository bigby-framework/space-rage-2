import { Behavior, $up } from "@bigby/core";
import { Keyboard, vec2 } from "@bigby/game";

export default class PlayerInput extends Behavior {
  private keyboard?: Keyboard;

  leftStick = vec2.make(0, 0);
  rightStick = vec2.make(0, 0);

  buttons = {
    a: false,
  };

  awake() {
    this.keyboard = $up(this, Keyboard);
  }

  update() {
    /* Reset sticks */
    this.leftStick.x = 0;
    this.leftStick.y = 0;
    this.rightStick.x = 0;
    this.rightStick.y = 0;

    /* Handle left stick */
    const { isPressed } = this.keyboard!;
    if (isPressed("w")) this.leftStick.y -= 1;
    if (isPressed("s")) this.leftStick.y += 1;
    if (isPressed("a")) this.leftStick.x -= 1;
    if (isPressed("d")) this.leftStick.x += 1;

    /* Determine button state */
    this.buttons.a = isPressed("space");
  }
}
