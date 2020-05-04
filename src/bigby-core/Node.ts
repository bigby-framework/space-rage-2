import Signal from "./Signal";

export type NodeConstructor<T extends Node> = new (...args: any[]) => T;

export default class Node {
  /** State of the node. */
  state: "new" | "awake" | "destroyed" = "new";

  /** Parent of this node. */
  parent?: Node;

  /** Children of this node. */
  children = new Array<Node>();

  /* LIFECYCLE METHODS */
  awake() {}
  update(dt: number) {}
  lateUpdate(dt: number) {}
  destroy() {}

  /**
   * Wake up a node and all of its children.
   */
  static awake(node: Node) {
    /* Sanity check */
    if (node.state !== "new") return;

    /* Switch state */
    node.state = "awake";

    /* Invoke lifecycle method */
    node.awake();

    /* Wake up children */
    node.children.forEach((child) => Node.awake(child));
  }

  static destroy(node: Node) {
    /* Sanity check */
    if (node.state === "destroyed") return;

    /* Destroy all children */
    node.children.forEach((child) => Node.destroy(child));

    /* Switch state */
    node.state = "destroyed";

    /* Invoke lifecycle method */
    node.destroy();
  }
}
