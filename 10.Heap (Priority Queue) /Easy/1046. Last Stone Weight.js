
// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
// Input: stones = [1]
// Output: 1

/*
y = largest stone
x = second largest stone

Important Formula:
Agar current index = i

Then:

Relation	Formula
parent	    (i - 1) / 2
left child	2i + 1
right child	2i + 2

*/

// MAX HEAP TEMPLATE
class MaxHeap {
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

            if (this.heap[parent] >= this.heap[index]) break;

            this.swap(parent, index);
            index = parent;
        }
    }

    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index) {
        const size = this.heap.length;

        while (true) {
            let largest = index;

            let left = this.getLeft(index);
            let right = this.getRight(index);

            if (left < size && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < size && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            this.swap(index, largest);

            index = largest;
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
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const heap = new MaxHeap();

    for (const num of stones) {
        heap.insert(num);
    }

    // 3. Repeatedly process top elements
    while (heap.size() > 1) {

        const first = heap.extractMax();
        const second = heap.extractMax();

        // process
        const result = first - second;

        // optional reinsert
        if (result > 0) {
            heap.insert(result);
        }
    }

    // 4. Final answer
    return heap.size() ? heap.peek() : 0;
};

const stones = [2, 7, 4, 1, 8, 1];
const result = lastStoneWeight(stones);
console.log('result=', result);