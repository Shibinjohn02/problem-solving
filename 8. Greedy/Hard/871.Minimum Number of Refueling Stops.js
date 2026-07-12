
// Example 1:

// Input: target = 1, startFuel = 1, stations = []
// Output: 0
// Explanation: We can reach the target without refueling.

// Example 2:
// Input: target = 100, startFuel = 1, stations = [[10,100]]
// Output: -1
// Explanation: We can not reach the target (or even the first gas station).

// Example 3:
// Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
// Output: 2
// Explanation: We start with 10 liters of fuel.
// We drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.
// Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
// and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
// We made 2 refueling stops along the way, so we return 2.

// Example 4:
// Input: target = 200, startFuel = 50, stations = [[25,25],[50,50],[75,25],[100,100],[125,25],[150,50]]
// Output: 2 

// Example 5:
// Input: target = 1000, startFuel = 83, stations = [[15,457],[156,194],[160,156],[230,314],[390,159],[621,20],[642,123],[679,301],[739,229],[751,174]]
// Output: 3

/*
Sahi brute-force: Har station pe rukna ya skip karna — dono possibilities try karo
*/

/*
Note:
1. Jab fuel kam padta hai, tab pichle stations me se sabse bada fuel choose karte ho.
2. Problem fuel ka nahi hai, decision ka hai (stop ya skip).
3. Skip ka matlab: Us station ka fuel use nahi karna abhi / Skip = postpone decision
4. Future guess nahi karte, past me se best pick karte hain
*/

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */

var minRefuelStops = function (target, startFuel, stations) {

    let stops = 0;
    let currentFuel = startFuel;
    let prevPosition = 0;

    // store all past fuels
    let fuels = [];

    for (let station of stations) {

        let position = station[0];
        let fuel = station[1];

        // fuel needed to reach this station
        currentFuel -= (position - prevPosition);

        // if fuel < 0 → need refuel from past
        while (currentFuel < 0 && fuels.length > 0) {
            fuels.sort((a, b) => b - a); // pick max
            currentFuel += fuels.shift();
            stops++;
        }

        // still can't reach → impossible
        if (currentFuel < 0) return -1;

        // store this station fuel for future
        fuels.push(fuel);

        prevPosition = position;
    }

    // final stretch to target
    currentFuel -= (target - prevPosition);

    while (currentFuel < 0 && fuels.length > 0) {
        fuels.sort((a, b) => b - a);
        currentFuel += fuels.shift();
        stops++;
    }

    return currentFuel >= 0 ? stops : -1;
};

let target = 1, startFuel = 1, stations = [];
const result = minRefuelStops(target, startFuel, stations);
console.log('result=', result);