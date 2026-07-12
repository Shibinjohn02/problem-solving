
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
/*
         1
       /   \
      1     1
     / \   /
    2   2 3
*/

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Example 3:
// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
// Output: [1,2]
/*
               1
            /     \
           1       1
         /   \    / \
        1     2  2   3
       / \   /
      2   3 2
*/

// Example 4:
// Input: nums = [4,4,4,6,6,1,1,1,1,2,2,3], k = 2
// Output: [1,4]
/*
                 1
             /       \
            1         1
          /   \     /   \
         1     2   3     4
        / \   / \  /
       6   2 4  6 4
*/

/*
Strong Analogy

Imagine:

10 lakh students
top 10 toppers chahiye

Would you:

fully rank every student?

OR:

maintain only current top 10 candidates?

Heap chooses second approach.

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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

            if (this.heap[parent][0] <= this.heap[index][0]) break;

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

            if (left < size && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            if (right < size && this.heap[right][0] < this.heap[smallest][0]) {
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

var topKFrequent = function (nums, k) {
    let heap = new MyMinHeap();
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
        heap.insert([value, key]);

        if (heap.size() > k) {
            heap.extractMin();
        }
    }

    let res = [];

    for (const item of heap.heap) {
        res.push(item[1])
    }

    return res;
};

let nums = [1, 1, 1, 2, 2, 3], k = 2;
const result = topKFrequent(nums, k);
console.log('result=', result);