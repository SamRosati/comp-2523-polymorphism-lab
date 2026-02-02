import type { ISortable } from './ISortable.js';

export class NumberGroup implements ISortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos]! > this.data[rightPos]!;
  }

  swap(leftPos: number, rightPos: number): void {
    const tempLeft = this.data[leftPos]!;
    this.data[leftPos] = this.data[rightPos]!;
    this.data[rightPos] = tempLeft;
  }
}