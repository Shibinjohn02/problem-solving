
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

// ### **Approach 1: Using an Array (Brute Force)**
// This approach involves traversing the linked list once to store all its values in an array, then using two pointers to check if that array is a palindrome,. It is considered the most straightforward "brute force" method,.

// *   **Time Complexity:** $O(n)$,.
// *   **Space Complexity:** $O(n)$ to store the values in an array,.

var isPalindrome = function (head) {
    const temp = []; // Use an array to store values,
    let current = head;

    // Traverse the list and push values into the array,
    while (current !== null) {
        temp.push(current.val);
        current = current.next;
    }

    // Use two pointers to compare elements from both ends,
    let i = 0;
    let j = temp.length - 1;
    while (i < j) {
        if (temp[i] !== temp[j]) {
            return false; // Not a palindrome,
        }
        i++;
        j--;
    }
    return true; // All elements matched,
};

// ### **Approach 2: Reversing the Second Half**
// In this method, you find the middle of the linked list using **slow and fast pointers**, split the list into two halves, reverse the second half, and then compare them,,. This avoids using extra space for an array.

// *   **Time Complexity:** $O(n)$.
// *   **Space Complexity:** $O(1)$.


// Helper function to reverse a linked list
const reverseList = (head) => {
    if (!head || !head.next) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};

var isPalindrome = function (head) {
    if (!head || !head.next) return true; // Single node or empty list

    let slow = head;
    let fast = head;
    let prev = null;

    // Find middle (slow) and keep track of node before middle (prev),,
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null; // Split the list into two halves,
    let tail = reverseList(slow); // Reverse the second half,

    // Compare the first half and the reversed second half,
    while (head !== null && tail !== null) {
        if (head.val !== tail.val) return false;
        head = head.next;
        tail = tail.next;
    }
    return true;
};

// ### **Approach 3: Reversing the First Half "On the Fly"**
// This is a slight optimization of Approach 2 where the **first half** of the list is reversed while the slow and fast pointers are still moving to find the middle,,. This eliminates the need for a separate reverse function and extra passes,.

// *   **Time Complexity:** $O(n)$.
// *   **Space Complexity:** $O(1)$.

var isPalindrome = function (head) {
    if (!head || !head.next) return true; //

    let slow = head;
    let fast = head;
    let prev = null;

    // Find middle and reverse the first half simultaneously,,
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;

        // Reverse logic on the fly,,
        let tempNext = slow.next;
        slow.next = prev;
        prev = slow;
        slow = tempNext;
    }

    // If fast is not null, the list has an odd number of nodes,,
    if (fast !== null) {
        slow = slow.next; // Skip the middle unique element,
    }

    // Compare the reversed first half (prev) with the second half (slow),
    while (prev !== null && slow !== null) {
        if (prev.val !== slow.val) return false;
        prev = prev.next;
        slow = slow.next;
    }
    return true;
};

// ### **Approach 4: Using Recursion (System Stack)**
// This approach uses recursion to reach the end of the list and then compares nodes while the recursion unwinds (moving backward) against a pointer moving forward,,. This avoids changing the list's structure.

// *   **Time Complexity:** $O(n)$.
// *   **Space Complexity:** $O(n)$ (due to the recursive system stack).


var isPalindrome = function (head) {
    let current = head; // Global-like pointer to move from front to back,

    const solve = (head) => {
        if (head === null) return true; // Base case: reached end of list,,

        // Move to the end of the list first,
        let res = solve(head.next);

        // Upon returning (rewinding), compare current back node with front pointer,,
        if (head.val !== current.val) return false;

        // Move front pointer forward for the next comparison,,
        current = current.next;

        return res; // Return the result of the recursive chain,
    };

    return solve(head);
};