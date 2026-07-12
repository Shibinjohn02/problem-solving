
// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]
// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

/*
Notes:
Median lives at the boundary:
largest of left half
smallest of right half
*/

// [12, 5, 3, 8, 1]

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

class MyMaxHeap {
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

var MedianFinder = function () {
    this.leftHeap = new MyMaxHeap();
    this.rightHeap = new MyMinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {

    // Insertion rule decides
    // which side a number belongs to.
    if (this.leftHeap.size() === 0) {
        this.leftHeap.insert(num);
    }
    else if (this.rightHeap.size() === 0) {

        if (num >= this.leftHeap.peek()) {
            this.rightHeap.insert(num);
        } else {
            this.rightHeap.insert(this.leftHeap.extractMax());
            this.leftHeap.insert(num);
        }

    } else {

        if (num >= this.rightHeap.peek()) {
            this.rightHeap.insert(num);
        } else {
            this.leftHeap.insert(num);
        }

    }

    // Rebalancing rule decides
    // whether heap sizes remain valid.
    if (this.leftHeap.size() > this.rightHeap.size() + 1) {
        this.rightHeap.insert(this.leftHeap.extractMax());
    }

    if (this.rightHeap.size() > this.leftHeap.size() + 1) {
        this.leftHeap.insert(this.rightHeap.extractMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {

    if (this.leftHeap.size() === this.rightHeap.size()) {
        return (this.leftHeap.peek() + this.rightHeap.peek()) / 2;
    }

    return this.leftHeap.size() > this.rightHeap.size()
        ? this.leftHeap.peek()
        : this.rightHeap.peek();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */