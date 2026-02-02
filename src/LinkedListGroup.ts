import type { ISortable } from './ISortable.js';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) { this.head = node; return; }
    let tail = this.head;
    while (tail.next) { tail = tail.next; }
    tail.next = node;
  }

  get length(): number {
    let counter = 0;
    let node = this.head;
    while (node) { counter++; node = node.next; }
    return counter;
  }

  at(index: number): Node {
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.at(leftPos).data > this.at(rightPos).data;
  }

  swap(leftPos: number, rightPos: number): void {
    // Simplified swap: swap values instead of pointers
    const leftNode = this.at(leftPos);
    const rightNode = this.at(rightPos);
    const leftValue = leftNode.data;
    leftNode.data = rightNode.data; 
    rightNode.data = leftValue;
  }

  print(): void {
    let node = this.head;
    while (node) { console.log(node.data); node = node.next; }
  }
}