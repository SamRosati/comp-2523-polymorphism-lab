import type { ISortable } from './ISortable.js';

export class CharacterGroup implements ISortable {
  constructor(public data: string) {} 

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    // Case-insensitive comparison so capital letters don't hold "lesser" value
    return (this.data[leftPos]?.toLowerCase() ?? '') > (this.data[rightPos]?.toLowerCase() ?? ''); 
  }

  swap(leftPos: number, rightPos: number): void {
    const characters = this.data.split(''); // Convert to array to mutate 
    const tempLeft = characters[leftPos];
    characters[leftPos] = characters[rightPos]!;
    characters[rightPos] = tempLeft!;
    this.data = characters.join(''); // Join back into a string
  }
}