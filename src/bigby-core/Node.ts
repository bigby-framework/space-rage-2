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

  set(props: Partial<this>) {
    Object.assign(this, props);
    return this;
  }

  add(child: Node) {
    this.children.push(child);
    child.parent = this;
    return child;
  }

  /* Finder methods */
  getChild<T extends Node = Node>(
    constructor: NodeConstructor<T>
  ): T | undefined {
    return this.children.find((child) => child instanceof constructor) as T;
  }
  getSibling<T extends Node = Node>(constructor: NodeConstructor<T>) {}
  getNearest<T extends Node = Node>(
    constructor: NodeConstructor<T>
  ): T | undefined {
    return this.parent instanceof constructor
      ? this.parent
      : this.parent?.getNearest(constructor);
  }

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
