
// Example 1:
// Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
// Output: [2,2,0,2,1,2]
// Explanation: Events in chronological order go as follows:
// - At second 0, task 0 is added and processed using server 2 until second 1.
// - At second 1, server 2 becomes free. Task 1 is added and processed using server 2 until second 3.
// - At second 2, task 2 is added and processed using server 0 until second 5.
// - At second 3, server 2 becomes free. Task 3 is added and processed using server 2 until second 5.
// - At second 4, task 4 is added and processed using server 1 until second 5.
// - At second 5, all servers become free. Task 5 is added and processed using server 2 until second 7.
// task 0 → server 2
// task 1 → server 2
// task 2 → server 0
// task 3 → server 2
// task 4 → server 1
// task 5 → server 2

// Example 2:
// Input: servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
// Output: [1,4,1,4,1,3,2]
// Explanation: Events in chronological order go as follows: 
// - At second 0, task 0 is added and processed using server 1 until second 2.
// - At second 1, task 1 is added and processed using server 4 until second 2.
// - At second 2, servers 1 and 4 become free. Task 2 is added and processed using server 1 until second 4. 
// - At second 3, task 3 is added and processed using server 4 until second 7.
// - At second 4, server 1 becomes free. Task 4 is added and processed using server 1 until second 9. 
// - At second 5, task 5 is added and processed using server 3 until second 7.
// - At second 6, task 6 is added and processed using server 2 until second 7.
// server 1 → weight 1
// server 4 → weight 2
// server 3 → weight 3
// server 2 → weight 4
// server 0 → weight 5

// Example 3:
// Input: servers = [10,63,95,16,85,57,83,95,6,29,71], tasks = [70,31,83,15,32,67,98,65,56,48,38,90,5]
// Output: [8,0,3,9,5,1,10,6,4,2,7,9,0]

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

    // CUSTOM COMPARATOR
    compare(a, b) {

        // smaller weight first
        if (a[0] !== b[0]) {
            return a[0] < b[0];
        }

        // if same weight -> smaller index first
        return a[1] < b[1];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = this.getParent(index);

            if (this.compare(this.heap[parent], this.heap[index])) {
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

            if (
                left < size &&
                this.compare(this.heap[left], this.heap[smallest])
            ) {
                smallest = left;
            }

            if (
                right < size &&
                this.compare(this.heap[right], this.heap[smallest])
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
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {

    // FREE SERVERS HEAP
    // [weight, index]
    let freeHeap = new MyMinHeap();

    // BUSY SERVERS HEAP
    // [freeTime, weight, index]
    let busyHeap = new BusyMinHeap();

    for (let i = 0; i < servers.length; i++) {
        freeHeap.insert([servers[i], i]);
    }

    let ans = [];
    let time = 0;

    for (let i = 0; i < tasks.length; i++) {

        // task arrives at second i
        time = Math.max(time, i);

        // release all free servers
        while (busyHeap.size() > 0 && busyHeap.peek()[0] <= time) {
            let server = busyHeap.extractMin();
            freeHeap.insert([server[1], server[2]]);
        }

        // if no free server available
        if (freeHeap.size() === 0) {
            // jump time
            time = busyHeap.peek()[0];

            // release all servers free at this time
            while (busyHeap.size() > 0 && busyHeap.peek()[0] <= time) {
                let server = busyHeap.extractMin();
                freeHeap.insert([server[1], server[2]]);
            }
        }

        // assign task
        let server = freeHeap.extractMin();

        ans.push(server[1]);

        busyHeap.insert([ time + tasks[i], server[0], server[1] ]);
    }

    return ans;
};

let servers = [10, 63, 95, 16, 85, 57, 83, 95, 6, 29, 71], tasks = [70, 31, 83, 15, 32, 67, 98, 65, 56, 48, 38, 90, 5]
let result = assignTasks(servers, tasks)
console.log('result=', result)