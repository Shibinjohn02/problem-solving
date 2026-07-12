
// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {

    const allWords = new Set(wordList);

    if (!allWords.has(endWord)) return 0;

    const queue = [];
    const visited = new Set();
    let jump = 1;
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    queue.push(beginWord);
    visited.add(beginWord);

    while (queue.length > 0) {

        const size = queue.length;

        for (let i = 0; i < size; i++) {

            const word = queue.shift();

            if (word === endWord) return jump;

            for (let j = 0; j < word.length; j++) {

                for (let k = 0; k < letters.length; k++) {

                    if (word[j] === letters[k]) continue;

                    const nextChar = letters[k];
                    const nextWord = word.slice(0, j) + nextChar + word.slice(j + 1);

                    if (!allWords.has(nextWord)) continue;

                    if (!visited.has(nextWord)) {
                        queue.push(nextWord);
                        visited.add(nextWord);
                    }
                }
            }
        }

        jump++;
    }

    return 0;
};

let beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
const result = ladderLength(beginWord, endWord, wordList);
console.log('result=', result);