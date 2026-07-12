
// Example 1:
// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.:

// Positive climbs only:
/*
        3
      /   \
     5     5
*/

// Example 2:
// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7

// Positive climbs only: [8,5,15,2,16]
/*
           2
        /     \
       5       15
     /   \
    8     16
*/

// Example 3:
// Input: heights = [14,3,19,3], bricks = 17, ladders = 0
// Output: 3

/*
#Core thinking:
1. Where should bricks be used?
2. Where should ladders be used?

#Future dependency hi main thinking hai:
“Abhi ladder use karu?
Ya bricks save karu?
Ya ladder save karu for bigger climb later?”


// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
*/

class MyMinHeap {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return (2 * i) + 1;
  }

  getRight(i) {
    return (2 * i) + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = this.getParent(index);

      if (this.heap[parent] <= this.heap[index]) break;

      this.swap(parent, index);

      index = parent;
    }
  }

  // Remove smallest
  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.heapifyDown(0);

    return min;
  }

  heapifyDown(index) {
    const size = this.heap.length;

    while (true) {
      let smallest = index;

      let left = this.getLeft(index);
      let right = this.getRight(index);

      if (left < size && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < size && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      this.swap(index, smallest);

      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    let heap = new MyMinHeap();

    for (let i = 0; i < heights.length - 1; i++) {

        let diff = heights[i + 1] - heights[i];

        if (diff <= 0) continue;

        heap.insert(diff);

        // ladders reserved for biggest climbs
        if (heap.size() > ladders) {
            bricks -= heap.extractMin();
        }

        // cannot move further
        if (bricks < 0) {
            return i;
        }
    }

    return heights.length - 1;
};