
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let l3 = new ListNode();
    let tail = l3;

    function solve(l1, l2) {
        if (l1 === null && l2 === null) {
            return;
        }

        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

        tail.next = new ListNode(sum % 10);
        tail = tail.next;

        carry = Math.floor(sum / 10);

        solve(l1?.next ?? null, l2?.next ?? null);
    }

    solve(l1, l2);

    if (carry !== 0) {
        tail.next = new ListNode(carry);
    }

    return l3.next;
};