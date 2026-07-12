
// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
// After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

// Example 2:
// Input: tasks = ["A","C","A","B","D","B"], n = 1
// Output: 6
// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:
// Input: tasks = ["A","A","A", "B","B","B"], n = 3
// Output: 10
// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

/*
constraint: tasks[i] is an uppercase English letter, This indicates use an array of 26 letters.

Heap: pick most frequent available task.
Queue: store task until it becomes reusable again.

Queue items usually look like:
[remainingCount, availableTime]

means:
this task still needs 2 executions
and can be reused at time = 5

*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
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

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.heap[index] > this.heap[this.parent(index)]
        ) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
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
        let largest = index;

        let left = this.left(index);
        let right = this.right(index);

        if (
            left < this.heap.length &&
            this.heap[left] > this.heap[largest]
        ) {
            largest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] > this.heap[largest]
        ) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    size() {
        return this.heap.length;
    }
}

var leastInterval = function(tasks, n) {

    let freq = new Array(26).fill(0);

    for (let task of tasks) {
        freq[task.charCodeAt(0) - 65]++;
    }

    let heap = new MyMaxHeap();

    for (let count of freq) {
        if (count > 0) {
            heap.insert(count);
        }
    }

    let queue = [];
    let time = 0;

    while (heap.size() > 0 || queue.length > 0) {

        time++;

        if (heap.size() > 0) {

            let count = heap.extractMax();

            count--;

            if (count > 0) {
                queue.push([count, time + n]);
            }
        }

        if (queue.length > 0 && queue[0][1] === time) {
            heap.insert(queue.shift()[0]);
        }
    }

    return time;
};