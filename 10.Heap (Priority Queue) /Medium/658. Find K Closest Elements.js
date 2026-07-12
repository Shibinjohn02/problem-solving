
// Example 1:
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// 4 elements closest to 3
// Distance from 3:
// 1 -> |1 - 3| = 2
// 2 -> |2 - 3| = 1
// 3 -> |3 - 3| = 0
// 4 -> |4 - 3| = 1
// 5 -> |5 - 3| = 2

// Example 2:
// Input: arr = [1,1,2,3,4,5], k = 4, x = -1
// Output: [1,1,2,3]

// Distances:
// 1 -> |1 - (-1)| = 2
// 1 -> 2
// 2 -> 3
// 3 -> 4
// 4 -> 5
// 5 -> 6

// An integer a is closer to x than an integer b if:
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

class MyMaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(pair) {
        this.heap.push(pair);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            (
                this.heap[index][0] > this.heap[this.parent(index)][0] ||
                (
                    this.heap[index][0] === this.heap[this.parent(index)][0] &&
                    this.heap[index][1] > this.heap[this.parent(index)][1]
                )
            )
        ) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    pop() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index) {
        let largest = index;

        const left = this.left(index);
        const right = this.right(index);

        if (
            left < this.heap.length &&
            (
                this.heap[left][0] > this.heap[largest][0] ||
                (
                    this.heap[left][0] === this.heap[largest][0] &&
                    this.heap[left][1] > this.heap[largest][1]
                )
            )
        ) {
            largest = left;
        }

        if (
            right < this.heap.length &&
            (
                this.heap[right][0] > this.heap[largest][0] ||
                (
                    this.heap[right][0] === this.heap[largest][0] &&
                    this.heap[right][1] > this.heap[largest][1]
                )
            )
        ) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var findClosestElements = function (arr, k, x) {
    let heap = new MyMaxHeap();

    for (let num of arr) {
        heap.insert([Math.abs(num - x), num]);

        if (heap.size() > k) {
            heap.pop();
        }
    }

    let res = [];

    for (const item of heap.heap) {
        res.push(item[1]);
    }

    return res.sort((a, b) => a - b);
};

let arr = [1, 2, 3, 4, 5], k = 4, x = 3
const result = findClosestElements(arr, k, x);
console.log('result=', result);