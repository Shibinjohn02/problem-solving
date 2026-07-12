
// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"


/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let p1 = 0, p2 = (s.length - 1), str = '';

    while (p1 < s.length) {
        if (p2 >= 0 && !'abcdefghijklmnopqrstuvwxyz'.includes(s[p2].toLowerCase())) {
            p2--;
        } else {
            if ('abcdefghijklmnopqrstuvwxyz'.includes(s[p1].toLowerCase())) {
                str += s[p2];
                p2--;
            } else {
                str += s[p1];
            }
            p1++;
        }
        console.log('p1=', p1, 'p2=', p2, "s[p1]=", s[p1], "s[p2]=", s[p2], 'str=', str)
    }
    return str;
};

let s = "Test1ng-Leet=code-Q!";
const result = reverseOnlyLetters(s);
console.log(result);


