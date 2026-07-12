interface PaymentStrategy {
    pay(amount: number): boolean;
}

interface FareStrategy {
    calculateFare(ticket: Ticket): number;
}

interface Vehicle {
    start(): void;
    stop(): void;
    accelerate(): void;
}


// ---------------- VEHICLES ----------------

class Car implements Vehicle {

    licenseNumber: string;

    constructor(licenseNumber: string) {
        this.licenseNumber = licenseNumber;
    }

    start(): void {
        console.log("Car Started");
    }

    stop(): void {
        console.log("Car Stopped");
    }

    accelerate(): void {
        console.log("Car Accelerating");
    }
}


class Bike implements Vehicle {

    licenseNumber: string;

    constructor(licenseNumber: string) {
        this.licenseNumber = licenseNumber;
    }

    start(): void {
        console.log("Bike Started");
    }

    stop(): void {
        console.log("Bike Stopped");
    }

    accelerate(): void {
        console.log("Bike Accelerating");
    }
}


// ---------------- TICKET ----------------

class Ticket {

    ticketNo: number;
    entryTime: Date;
    vehicleType: string;
    parkingSpot: ParkingSpot;

    constructor(ticketNo: number, entryTime: Date, vehicleType: string, parkingSpot: ParkingSpot) {
        this.ticketNo = ticketNo;
        this.entryTime = entryTime;
        this.vehicleType = vehicleType;
        this.parkingSpot = parkingSpot;
    }
}


// ---------------- ENTRY GATE ----------------

class EntryGate {

    gateNumber: number;

    constructor(gateNumber: number) {
        this.gateNumber = gateNumber;
    }

    generateTicket(ticketNo: number, vehicleType: string, parkingSpot: ParkingSpot): Ticket {

        return new Ticket(ticketNo, new Date(), vehicleType, parkingSpot);
    }
}


// ---------------- PARKING SPOT ----------------

class ParkingSpot {

    id: number;
    occupied: boolean;
    vehicle: Vehicle | null;

    constructor(id: number) {
        this.id = id;
        this.occupied = false;
        this.vehicle = null;
    }

    parkVehicle(vehicle: Vehicle): void {

        this.vehicle = vehicle;
        this.occupied = true;
    }

    removeVehicle(): void {

        this.vehicle = null;
        this.occupied = false;
    }

    isAvailable(): boolean {
        return !this.occupied;
    }
}


// ---------------- EXIT GATE ----------------

class ExitGate {

    gateNumber: number;

    constructor(gateNumber: number) {
        this.gateNumber = gateNumber;
    }

    processPayment(payment: Payment): void {
        payment.processPayment();
    }
}


// ---------------- PARKING LOT ----------------

class ParkingLot {

    id: number;

    parkingSpots: ParkingSpot[];

    parkingManager!: ParkingManager;

    entryGate: EntryGate;

    exitGate: ExitGate;

    constructor(id: number, parkingSpots: ParkingSpot[], entryGate: EntryGate, exitGate: ExitGate) {
        this.id = id;
        this.parkingSpots = parkingSpots;
        this.entryGate = entryGate;
        this.exitGate = exitGate;
    }

    parkVehicle(spot: ParkingSpot, vehicle: Vehicle): void {

        spot.parkVehicle(vehicle);
    }

    removeVehicle(spot: ParkingSpot): void {

        spot.removeVehicle();
    }

    getParkingSpots(): ParkingSpot[] {
        return this.parkingSpots;
    }
}


// ---------------- PARKING MANAGER ----------------

class ParkingManager {

    id: number;
    name: string;
    parkingLot: ParkingLot;

    constructor(id: number, name: string, parkingLot: ParkingLot) {
        this.id = id;
        this.name = name;
        this.parkingLot = parkingLot;
    }

    parkVehicle(vehicle: Vehicle): ParkingSpot | null {

        const spot = this.findAvailableSpot();

        if (!spot) {
            console.log("No Parking Spots Available");
            return null;
        }

        this.parkingLot.parkVehicle(spot, vehicle);

        console.log(`Vehicle parked at Spot ${spot.id}`);

        return spot;
    }

    removeVehicle(ticket: Ticket): void {

        const spot = ticket.parkingSpot;

        if (!spot) {
            console.log("Invalid Ticket");
            return;
        }

        this.parkingLot.removeVehicle(spot);

        console.log(`Vehicle removed from Spot ${spot.id}`);
    }

    findAvailableSpot():
        ParkingSpot | null {

        const spots = this.parkingLot.getParkingSpots();

        for (const spot of spots) {
            if (spot.isAvailable()) {
                return spot;
            }
        }

        return null;
    }
}


// ---------------- PAYMENT ----------------

class Payment {

    amount: number;
    paymentStrategy: PaymentStrategy;

    constructor(amount: number, paymentStrategy: PaymentStrategy) {
        this.amount = amount;
        this.paymentStrategy = paymentStrategy;
    }

    processPayment(): void {
        const success = this.paymentStrategy.pay(this.amount);

        if (success) {
            console.log("Payment Successful");
        } else {
            console.log("Payment Failed");
        }
    }
}


// ---------------- PAYMENT STRATEGIES ----------------

class UPIPayment
    implements PaymentStrategy {

    upiId: string;

    constructor(upiId: string) {
        this.upiId = upiId;
    }

    pay(amount: number): boolean {
        console.log(`Paid ₹${amount} using UPI (${this.upiId})`);
        return true;
    }
}


class CardPayment
    implements PaymentStrategy {

    cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): boolean {
        console.log(`Paid ₹${amount} using Card (${this.cardNumber})`);
        return true;
    }
}


// ---------------- FARE STRATEGY ----------------

class HourlyFareStrategy implements FareStrategy {

    calculateFare(ticket: Ticket): number {
        const currentTime = new Date();
        const diff = currentTime.getTime() - ticket.entryTime.getTime();
        const hours = Math.ceil(diff / (1000 * 60 * 60));

        return hours * 50;
    }
}


// ---------------- MAIN ----------------

function main(): void {

    // Spots
    const spot1 = new ParkingSpot(1);

    const spot2 = new ParkingSpot(2);

    // Gates
    const entryGate = new EntryGate(101);

    const exitGate = new ExitGate(201);

    // Parking Lot
    const parkingLot = new ParkingLot(1, [spot1, spot2], entryGate, exitGate);

    // Manager
    const parkingManager = new ParkingManager(1, "Alex", parkingLot);

    parkingLot.parkingManager = parkingManager;

    // Vehicle
    const car = new Car("MP04-1234");

    // Park Vehicle
    const parkedSpot = parkingManager.parkVehicle(car);

    if (!parkedSpot) return;

    // Generate Ticket
    const ticket = entryGate.generateTicket(1001, "Car", parkedSpot);

    // Fare Calculation
    const fareStrategy = new HourlyFareStrategy();

    const fare = fareStrategy.calculateFare(ticket);

    console.log(`Fare: ₹${fare}`);

    // Payment
    const upi = new UPIPayment("alex@upi");

    const payment = new Payment(fare, upi);

    exitGate.processPayment(payment);

    // Remove Vehicle
    parkingManager.removeVehicle(ticket);
}

main();