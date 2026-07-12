
// Example 1:
// Input: answerKey = "TTFF", k = 2
// Output: 4
// Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
// There are four consecutive 'T's.

// Example 2:
// Input: answerKey = "TFFT", k = 1
// Output: 3
// Explanation: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
// Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
// In both cases, there are three consecutive 'F's.

// Example 3:
// Input: answerKey = "TTFTTFTT", k = 1
// Output: 5
// Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
// Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT". 
// In both cases, there are five consecutive 'T's.

// Questions:
// What am I tracking? → Length of the longest substring
// Is the substring contiguous? → Yes
// What operation is allowed? → Replace characters (limited by k)
// What does a “valid window” mean? → It can be made uniform within k replacements
// When is window invalid? → If within k replacements are not possible
// What is the cheapest way to make it uniform? → Keep the most frequent character
// What breaks the window? → (window length − max frequency) > k
// How do I fix a broken window or How do I restore validity? → Shrink from the left
// Do I ever need to recompute the window from scratch? → No — always update incrementally

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let left = 0 , maxFreq = 0, longest = 0;

    const freq = new Map();

    for (let right = 0; right < answerKey.length; right++) {

        freq.set(answerKey[right], (freq.get(answerKey[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, freq.get(answerKey[right]));

        while ((right - left + 1) - maxFreq > k) {
            freq.set(answerKey[left], freq.get(answerKey[left]) - 1);
            left++;
        }

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

let answerKey = "TFFT", k = 1
const result = maxConsecutiveAnswers(answerKey, k);
console.log('result=', result)

