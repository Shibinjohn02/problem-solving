class Car {
    constructor(name, color, price, carNumber, engine, wheels) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.carNumber = carNumber;
        this.engine = engine;
        this.wheels = wheels; // array
    }

    start() {
        this.engine.on();
    }

    drive() {
        this.wheels.forEach(w => w.rotate());
    }

    accelerate() {
        console.log("Accelerating...");
        this.engine.on(); // ensure engine is running
        this.wheels.forEach(w => w.rotate());
    }

    stop() {
        this.engine.off();
        this.wheels.forEach(w => w.stop());
    }
}

class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

    on() {
        console.log('Engine On.');
    }

    off() {
        console.log('Engine Off.');
    }
}

class Wheels {
    constructor(size, grip) {
        this.size = size;
        this.grip = grip;
    }

    rotate() {
        console.log('Wheel rotating...');
    }

    stop() {
        console.log('Wheel stopped.');
    }
}

function main() {
    const engine = new Engine('petrol', 1200);

    const wheels = [
        new Wheels(16, 'high'),
        new Wheels(16, 'high'),
        new Wheels(16, 'high'),
        new Wheels(16, 'high')
    ];

    const car1 = new Car('alto', 'grey', 100000, 'MP-04 3368', engine, wheels);

    car1.start();
    car1.drive();
    car1.stop();
}

main();