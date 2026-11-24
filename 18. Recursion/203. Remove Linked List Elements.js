
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// My Approach
// var removeElements = function (head, val) {

//     if (head === null) return null;

//     let res = head.val

//     let list = removeElements(head.next, val);

//     if (res === val) {
//         return list
//     } else {
//         head.next = list
//         return head;
//     }
// };

var removeElements = function (head, val) {
    if (head === null) return null;

    let list = removeElements(head.next, val);

    if (head.val === val) {
        return list;
    }

    head.next = list;
    return head;
};