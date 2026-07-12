
// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

/*
         1
       /   \
      3     2
     / \   /
    5   6 4
*/

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

/*
             1
          /     \
         2       3
       /   \    / \
      3     2  4   5
     / \
    5   6
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
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

var findKthLargest = function (nums, k) {
    this.heap = new MyMinHeap();

    for (const num of nums) {
        this.heap.insert(num);

        if (this.heap.size() > k) {
            this.heap.extractMin();
        }
    }

    return this.heap.peek();
};