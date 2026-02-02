import { SortUtil } from "./SortUtil.js";
import { NumberGroup } from "./NumberGroup.js";
import { CharacterGroup } from "./CharacterGroup.js";
import { LinkedListGroup } from "./LinkedListGroup.js";

// 1. Test NumberGroup
const numberGroup = new NumberGroup([30, 3, -15, 0]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log("Numbers Sorted:", numberGroup.data); // Expected: [-15, 0, 3, 30]
console.log("------------------------------");

// 2. Test CharacterGroup
const characterGroup = new CharacterGroup("Xaeyb");
const sorter2 = new SortUtil(characterGroup);
sorter2.sort();
console.log("String Sorted:", characterGroup.data); // Expected: "abeXy"
console.log("------------------------------");

// 3. Test LinkedListGroup
const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);

const sorter3 = new SortUtil(linkedListGroup);
sorter3.sort();
console.log("Linked List Sorted:");
linkedListGroup.print(); // Expected: -10, -7, 4, 520
