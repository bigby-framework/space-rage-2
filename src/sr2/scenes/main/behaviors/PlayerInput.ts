import { Behavior } from "@bigby/core";
import { Keyboard, Mouse, vec2 } from "@bigby/game";

export default class PlayerInput extends Behavior {
  private keyboard?: Keyboard;
  private mouse?: Mouse;

  leftStick = vec2.make(0, 0);
  rightStick = vec2.make(0, 0);

  buttons = {
    a: false,
  };

  awake() {
    this.keyboard = this.$(Keyboard, true);
    this.mouse = this.$(Mouse, true);
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

    /* Handle right stick */
    const pos = this.mouse?.getPosition()!;

    pos.x -= 640; /* XXX: noooo */
    pos.y -= 360; /* XXX: nooooooo */

    this.rightStick = pos;

    /* Determine button state */
    this.buttons.a =
      isPressed("space") || this.mouse!.isButtonPressed(Mouse.LeftButton);
  }
}
