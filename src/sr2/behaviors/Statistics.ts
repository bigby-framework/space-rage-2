import { Behavior } from "@bigby/core";
import * as Stats from "stats.js";

/**
 * Provides a runtime statistics panel powered by mrdoob's excellent Stats.js.
 */
export default class Statistics extends Behavior {
  private stats = new Stats();

  awake() {
    document.body.appendChild(this.stats.dom);
  }

  update() {
    this.stats.begin();
  }

  lateUpdate() {
    this.stats.end();
  }

  destroy() {
    document.body.removeChild(this.stats.dom);
  }
}
