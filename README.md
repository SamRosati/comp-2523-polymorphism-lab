# Polymorphism & Abstraction Lab: Generic Sorting Utility

This repository contains a refactored sorting application that demonstrates how to transition from rigid, type-specific code to a flexible, polymorphic architecture using **TypeScript Interfaces**.

## Project Overview

The goal of this lab was to act as a "Senior Developer" refactoring code written by a junior developer. The original code used repetitive `if/else` checks and `instanceof` guards to handle different data types. This project replaces that logic with **Abstraction**, allowing a single `SortUtil` class to sort any data structure that follows a specific contract.

---

## Technical Architecture

### The `ISortable` Interface
The heart of the refactor is the `ISortable` interface. It defines a set of requirements that any data structure must meet to be "sortable" by our utility:

* **`length`**: A property that returns the number of elements in the collection.
* **`compare(leftPos: number, rightPos: number): boolean`**: Logic to determine if two elements should be swapped.
* **`swap(leftPos: number, rightPos: number): void`**: The specific implementation for moving data within that structure.

<img width="900" height="727" alt="image" src="https://github.com/user-attachments/assets/2569b66e-8d95-446e-9a1d-0a80de7a0506" />


---

## Data Structures Implemented

### 1. NumberGroup (Arrays)
Handles standard arrays of numbers. This is the most straightforward implementation, utilizing mutable array indexing for both comparison and swapping.

### 2. CharacterGroup (Strings)
Solving the problem of string sorting required addressing two specific JavaScript behaviors:
* **Immutability**: Since strings cannot be modified directly, the data is split into an array of characters, mutated, and then joined back together.
* **Case Sensitivity**: To ensure intuitive sorting (where "X" comes after "a"), the comparison logic is converted to lowercase to ignore ASCII integer representation issues.

### 3. LinkedListGroup (Linked Lists)
This handles non-contiguous memory structures. 
* **Sequential Access**: Since linked lists do not support random access, it uses a helper method to traverse nodes from the `head` to a specific index.
* **Value Swapping**: To keep the implementation clean, the `swap` method exchanges the data values between nodes rather than re-linking pointers.

---

## The Sorter: `SortUtil`

The `SortUtil` class implements a **Bubble Sort** algorithm. Because of the polymorphic design, the sorting logic is now entirely decoupled from the data it sorts. 

```typescript
sort(): void {
  const { length } = this.collection;
  let isSorted = false;
  let lastUnsorted = length - 1;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      // The sorter doesn't know the data type, 
      // it just calls the interface methods.
      if (this.collection.compare(i, i + 1)) {
        this.collection.swap(i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
}
