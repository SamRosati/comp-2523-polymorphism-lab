import type { ISortable } from "./ISortable.js";

export class SortUtil {
  constructor(public collection: ISortable) {} // Accepts any ISortable

  sort(): void {
    const { length } = this.collection;
    let isSorted = false;
    let lastUnsorted = length - 1;

    while (!isSorted) {

      isSorted = true;
      for (let i = 0; i < lastUnsorted; i++) {
        // Use polymorphism to call the correct compare/swap logic
        if (this.collection.compare(i, i + 1)) {
          this.collection.swap(i, i + 1);
          isSorted = false;
        }
      }
      lastUnsorted--;
    }
  }
}
