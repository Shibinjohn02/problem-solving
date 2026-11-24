
// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let temp = head;

    function solve(node) {
        if (node === null) return true;

        if (!solve(node.next)) return false;

        if (temp.val === node.val) {
            temp = temp.next;
            return true;
        }

        return false;
    }

    return solve(head);
};