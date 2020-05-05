import { GameBehavior, Transform, Renderer } from "@bigby/game";
import { vec2 } from "gl-matrix";

export default class FollowCamera extends GameBehavior {
  target?: Transform;

  private renderer?: Renderer;
  private offset?: vec2;

  awake() {
    this.renderer = this.getNearestBehavior(Renderer);
    this.offset = vec2.fromValues(
      this.renderer!.width / 2,
      this.renderer!.height / 2
    );
  }

  lateUpdate() {
    if (!this.target || !this.transform || !this.renderer) return;

    /* Look at target */
    const position = vec2.fromValues(
      -this.target.position.x,
      -this.target.position.y
    );

    /* Apply offset */
    vec2.add(position, position, this.offset!);

    this.transform.position.set(...position);
  }
}
