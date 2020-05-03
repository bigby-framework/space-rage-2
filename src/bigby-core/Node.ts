export type NodeConstructor<T extends Node> = new (...args: any[]) => T;

export default class Node {
  /** Parent of this node. */
  parent?: Node;

  /** Children of this node. */
  children = new Array<Node>();
}
