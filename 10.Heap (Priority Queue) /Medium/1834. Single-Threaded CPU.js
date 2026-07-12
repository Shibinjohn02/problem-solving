
// Example 1:
// Input: tasks = [[1,2],[2,4],[3,2],[4,1]]
// Output: [0,2,3,1]
// Explanation: The events go as follows: 
// - At time = 1, task 0 is available to process. Available tasks = {0}.
// - Also at time = 1, the idle CPU starts processing task 0. Available tasks = {}.
// - At time = 2, task 1 is available to process. Available tasks = {1}.
// - At time = 3, task 2 is available to process. Available tasks = {1, 2}.
// - Also at time = 3, the CPU finishes task 0 and starts processing task 2 as it is the shortest. Available tasks = {1}.
// - At time = 4, task 3 is available to process. Available tasks = {1, 3}.
// - At time = 5, the CPU finishes task 2 and starts processing task 3 as it is the shortest. Available tasks = {1}.
// - At time = 6, the CPU finishes task 3 and starts processing task 1. Available tasks = {}.
// - At time = 10, the CPU finishes task 1 and becomes idle.
// Processing times:
// - task 0 → available at 1, takes 2
// - task 1 → available at 2, takes 4
// - task 2 → available at 3, takes 2
// - task 3 → available at 4, takes 1

// Example 2:
// Input: tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
// Output: [4,3,2,0,1]
// Explanation: The events go as follows:
// - At time = 7, all the tasks become available. Available tasks = {0,1,2,3,4}.
// - Also at time = 7, the idle CPU starts processing task 4. Available tasks = {0,1,2,3}.
// - At time = 9, the CPU finishes task 4 and starts processing task 3. Available tasks = {0,1,2}.
// - At time = 13, the CPU finishes task 3 and starts processing task 2. Available tasks = {0,1}.
// - At time = 18, the CPU finishes task 2 and starts processing task 0. Available tasks = {1}.
// - At time = 28, the CPU finishes task 0 and starts processing task 1. Available tasks = {}.
// - At time = 40, the CPU finishes task 1 and becomes idle.
// Processing times:
// - task 0 → available at 7 takes 10
// - task 1 → available at 7 takes 12
// - task 2 → available at 7 takes 5
// - task 3 → available at 7 takes 4
// - task 4 → available at 7 takes 2

// 1. Insert all tasks whose enqueueTime <= currentTime
// 2. Heap stores [processingTime, index]
// 3. Pick smallest processingTime
// 4. Advance currentTime
// 5. Repeat

/*
Notes:
    Priority becomes:
    1. smaller processingTime
    2. if tie → smaller index
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

    compare(a, b) {

        // processingTime
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        // index
        return a[1] - b[1];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {

        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = this.getParent(index);

            if (this.compare(this.heap[parent], this.heap[index]) <= 0) {
                break;
            }

            this.swap(parent, index);

            index = parent;
        }
    }

    extractMin() {

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return min;
    }

    heapifyDown(index) {

        let size = this.heap.length;

        while (true) {

            let smallest = index;

            let left = this.getLeft(index);
            let right = this.getRight(index);

            if (
                left < size &&
                this.compare(this.heap[left], this.heap[smallest]) < 0
            ) {
                smallest = left;
            }

            if (
                right < size &&
                this.compare(this.heap[right], this.heap[smallest]) < 0
            ) {
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
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    let arr = [];
    let n = tasks.length;

    for (let i = 0; i < n; i++) {
        arr.push([tasks[i][0], tasks[i][1], i]);
    }

    // sort by enqueueTime
    arr.sort((a, b) => a[0] - b[0]);

    let heap = new MyMinHeap();
    let ans = [];
    let idx = 0
    let currentTime = 0;

    while (idx < arr.length || heap.size() > 0) {

        if (heap.size() === 0 && currentTime < arr[idx][0]) {
            currentTime = arr[idx][0];
        }

        while (idx < n && arr[idx][0] <= currentTime) {
            heap.insert([arr[idx][1], arr[idx][2]]);
            idx++;
        }

        let [processingTime, index] = heap.extractMin();
        currentTime += processingTime;
        ans.push(index);
    }

    return ans;
};