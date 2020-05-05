import { GameBehavior, Transform } from "@bigby/game";

export default class Camera extends GameBehavior {
  target?: Transform;

  lateUpdate() {
    if (this.target) {
      this.transform?.position.set(
        -this.target.position.x,
        -this.target.position.y
      );
    }
  }
}
