
// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Example 4:
// Input: asteroids = [3,5,-6,2,-1,4]​​​​​​​
// Output: [-6,2,4]
// Explanation: The asteroid -6 makes the asteroid 3 and 5 explode, and then continues going left. On the other side, the asteroid 2 makes the asteroid -1 explode and then continues going right, without reaching asteroid 4.

/*
Positive  → right move
Negative  → left move

sign = direction
absolute value = size

Collision kab hoga:  → ←
    positive on left
    negative on right
    (+ , -)  → collide
    (- , +)  → never collide
    (+ , +)  → never collide
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// My Version
var asteroidCollision = function (asteroids) {
    let collisionStack = [];

    for (let currentIndex = 0; currentIndex < asteroids.length; currentIndex++) {

        let currentAsteroid = asteroids[currentIndex];

        while (collisionStack.length && currentAsteroid < 0 &&
            collisionStack[collisionStack.length - 1] > 0 &&
            Math.abs(currentAsteroid) >= Math.abs(collisionStack[collisionStack.length - 1])
        ) {
            let val = collisionStack.pop();

            if (Math.abs(val) === Math.abs(currentAsteroid)) {
                currentAsteroid = -1001;
                break;
            }
        }

        if (currentAsteroid === -1001) continue;

        if (
            currentAsteroid > 0 ||
            (
                currentAsteroid < 0 &&
                (
                    !collisionStack.length ||
                    Math.abs(currentAsteroid) > Math.abs(collisionStack[collisionStack.length - 1]) ||
                    collisionStack[collisionStack.length - 1] < 0
                )
            )
        ) {
            collisionStack.push(currentAsteroid);
        }

    }

    return collisionStack;
};

// Optimal Version
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {

        let alive = true;

        while (
            alive &&
            stack.length &&
            asteroid < 0 &&
            stack[stack.length - 1] > 0
        ) {

            let top = stack[stack.length - 1];

            // current asteroid bigger
            if (Math.abs(asteroid) > top) {
                stack.pop();
            }

            // both equal
            else if (Math.abs(asteroid) === top) {
                stack.pop();
                alive = false;
            }

            // top asteroid bigger
            else {
                alive = false;
            }
        }

        if (alive) {
            stack.push(asteroid);
        }
    }

    return stack;
};

let asteroids = [3, 5, -6, 2, -1, 4]
const result = asteroidCollision(asteroids);
console.log('result=', result);