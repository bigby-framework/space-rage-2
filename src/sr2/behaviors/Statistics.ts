import { Behavior } from "@bigby/core";
import { Renderer } from "@bigby/game";
import * as GStats from "gstats/dist/main";
import * as Stats from "stats.js";

export default class Statistics extends Behavior {
  private stats = new Stats();

  awake() {
    const renderer = this.getBehavior(Renderer);
    // const hooks = new GStats.PIXIHooks(renderer!.app);
    // const stats = new GStats.StatsJSAdapter(hooks, new Stats());

    document.body.appendChild(this.stats.dom);
  }

  update() {
    this.stats.update();
  }
}
