
// Example 1:
// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.

/*
    20 = 10 + 5 | 5 + 5 + 5 
    10 = 5
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {

    if (bills.length > 0 && bills[0] === 10 || bills[0] === 20) return false;

    let totalFive = 0, totalTen = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            totalFive++;
            continue;
        }

        let returnAmount = 0, change = bills[i] - 5;

        while (returnAmount < change) {
            if ((returnAmount + 10) <= change && totalTen > 0) {
                returnAmount += 10;
                totalTen--;
            } else if ((returnAmount + 5) <= change && totalFive > 0) {
                returnAmount += 5;
                totalFive--;
            } else {
                return false;
            }
        }

        if (bills[i] === 10) totalTen++;
    }

    return true;
};

// Better Approach
var lemonadeChange = function (bills) {
    let five = 0, ten = 0;

    for (let bill of bills) {

        if (bill === 5) {
            five++;

        } else if (bill === 10) {
            if (five === 0) return false;
            five--;
            ten++;

        } else { // 20

            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};

let bills = [5, 5, 5, 10, 20];
let result = lemonadeChange(bills);
console.log('result=', result);


// Note:
// When problem has limited fixed choices,
// avoid simulation → directly encode decisions