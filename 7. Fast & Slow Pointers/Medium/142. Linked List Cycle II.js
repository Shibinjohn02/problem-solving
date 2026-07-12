
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Example 4:
// Input: head = [1,2,3,4], pos = 0
// Output: tail connects to node index 0
// Given: tail connects to node index 2

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Brute Force:
var detectCycle = function (head) {
    let current = head;
    let set = new Set();

    while (current !== null) {
        if (set.has(current)) {
            return current;
        }

        set.add(current);
        current = current.next;
    }

    return null;
};

// Fast & Slow Pointer
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    // Phase 1: detect cycle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Phase 2: find start
            let p = head;

            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }

            return p;
        }
    }

    return null;
};