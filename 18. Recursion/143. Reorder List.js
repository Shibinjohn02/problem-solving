
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let list = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return list;
};

var mergeTwoLists = function (list1, list2) {
    if (!list2) return;

    let next1 = list1.next;
    let next2 = list2.next;

    list1.next = list2;
    list2.next = next1;

    mergeTwoLists(next1, next2);
};

var reorderList = function (head) {

    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = slow.next;
    slow.next = null;

    let reversedSecondHalf = reverseList(secondHalf);

    return mergeTwoLists(head, reversedSecondHalf);
};