import Signal from "./Signal";

export type NodeConstructor<T extends Node> = new (...args: any[]) => T;

export default class Node {
  /** State of the node. */
  state: "new" | "awake" | "destroyed" = "new";

  /** Parent of this node. */
  parent?: Node;

  /** Children of this node. */
  children = new Array<Node>();

  /* Constructor */
  constructor() {
    this.setup();
  }

  setup() {}

  /* Signals */
  onAwake = Signal();

  awake() {
    if (this.state !== "new") return;
    this.state = "awake";
    this.onAwake.emit(null);
  }
}
