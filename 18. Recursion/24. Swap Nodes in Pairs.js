
// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Explanation:

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

// Example 4:
// Input: head = [1,2,3]
// Output: [2,1,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {

    function solve(node) {
        if (node === null || node.next === null) {
            return node;
        }

        let res = solve(node.next.next);

        let temp = node.next;
        temp.next = node;
        node.next = res;

        return temp;
    }

    return solve(head);
};
