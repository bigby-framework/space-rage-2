import { GameBehavior, Transform } from "@bigby/game";

export default class Camera extends GameBehavior {
  target?: Transform;

  lateUpdate() {
    if (!this.target || !this.transform) return;

    /* Look at target */
    const position = {
      x: -this.target.position.x,
      y: -this.target?.position.y,
    };

    /* Apply offset */
    position.x += 200;
    position.y += 200;

    this.transform.position = position;
  }
}
