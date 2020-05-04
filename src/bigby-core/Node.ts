import Signal from "./Signal";

export type NodeConstructor<T extends Node> = new (...args: any[]) => T;

export default class Node {
  /** State of the node. */
  state: "new" | "awake" | "destroyed" = "new";

  /** Parent of this node. */
  parent?: Node;

  /** Children of this node. */
  children = new Array<Node>();

  onAwake() {}

  /**
   * Wake up this node and all of its children. Will trigger the onAwake signal.
   */
  awake() {
    /* Sanity check */
    if (this.state !== "new") return;

    /* Switch state */
    this.state = "awake";

    /* Invoke onAwake lifecycle method */
    this.onAwake();

    /* Wake up children */
    this.children.forEach((child) => child.awake());
  }
}
