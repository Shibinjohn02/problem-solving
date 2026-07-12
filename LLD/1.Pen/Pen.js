
class Pen {
    constructor(color, size, price, ink) {
        this.color = color;
        this.size = size;
        this.price = price;
        this.ink = ink; // HAS-A
    }

    write() {
        if (this.ink.isEmpty()) {
            console.log("Ink finished!");
            return;
        }

        this.ink.provideInk(1);
        console.log(`Writing with ${this.ink.color} ink`);
    }

    refill(newInk) {
        this.ink = newInk;
    }
}

class Ink {
    constructor(color, level = 10) {
        this.color = color;
        this.level = level;
    }

    provideInk(amount) {
        this.level = Math.max(0, this.level - amount);
    }

    isEmpty() {
        return this.level <= 0;
    }
}

class BallPen extends Pen {
    write() {
        this.ink.provideInk(2); // consumes more ink
        console.log("BallPen writing...");
    }
}

class GelPen extends Pen {
    write() {
        this.ink.provideInk(1);
        console.log("GelPen smooth writing...");
    }
}

// Driver code (main)
function main() {
    const ink = new Ink("blue", 3);

    const pen = new BallPen("blue", "medium", 10, ink);

    pen.write(); // Writing with blue ink
    pen.write(); // Writing with blue ink
    pen.write(); // Writing with blue ink
    pen.write(); // Ink finished!

    // refill
    pen.refill(new Ink("black", 5));

    pen.write(); // Writing with black ink
}


// Upgrade your design:
// Add FountainPen: Yws
class FountainPen extends Pen {
    write() {
        if (this.ink.isEmpty()) {
            console.log("Ink finished!");
            return;
        }

        this.ink.use(5); // uses less ink
        console.log("Smooth writing with fountain pen...");
    }
}