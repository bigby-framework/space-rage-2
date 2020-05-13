import { GameBehavior, Transform, Renderer, vec2 } from "@bigby/game";
import { $up } from "@bigby/core";

export default class FollowCamera extends GameBehavior {
  target?: Transform;

  private renderer?: Renderer;
  private offset?: vec2.IVec2;

  awake() {
    this.renderer = $up(this, Renderer);
    this.offset = vec2.make(
      this.renderer!.width / 2,
      this.renderer!.height / 2
    );
  }

  lateUpdate() {
    if (!this.target || !this.transform || !this.renderer) return;

    /* Look at target */
    const position = vec2.make(
      -this.target.position.x,
      -this.target.position.y
    );

    /* Apply offset */
    const pos = vec2.add(position, this.offset!);

    this.transform.position.set(pos.x, pos.y);
  }
}
