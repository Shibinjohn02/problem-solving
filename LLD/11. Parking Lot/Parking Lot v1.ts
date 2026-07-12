

interface PaymentStrategy {
    pay(amount: number): boolean;
}

interface PaymentStrategy {
    pay(amount: number): boolean;
}

interface FareStrategy {
    calculateFare(ticket: Ticket): number;
}

interface Vehicle {
    start(): void;
    stop(): void;
    accerlerate(): void;
}

class Ticket {
    ticketNo: number;
    entryTime: Date;
    vehicleType: string;
    parkingSpot: ParkingSpot;

    constructor(ticketNo: number, entryTime: Date, vehicleType: string, parkingSpot: ParkingSpot) {
        this.ticketNo = ticketNo;
        this.entryTime = entryTime
        this.vehicleType = vehicleType
        this.vehicleType = vehicleType
        this.parkingSpot = parkingSpot
    }
}

class EntryGate {
    gateNumber: number;

    constructor(gateNumber: number) {
        this.gateNumber = gateNumber;
    }
}

class ParkingManager {
    id: number;
    name: string;
    parkingLot: ParkingLot;

    constructor(id: number, name: string, parkingLot: ParkingLot) {
        this.id = id;
        this.name = name;
        this.parkingLot = parkingLot;
    }

    parkVehicle(vehicle: Vehicle): void {
        const spot = this.findAvailableSpot();

        if (!spot) {
            console.log("No Parking Spots Available");
            return;
        }

        this.parkingLot.parkVehicle(spot, vehicle);

        console.log(`Vehicle parked at Spot ${spot.id}`);
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

    findAvailableSpot(): ParkingSpot | null {

        const spots = this.parkingLot.getParkingSpots();

        for (const spot of spots) {

            if (spot.isAvailable()) {
                return spot;
            }
        }

        return null;
    }
}

class ParkingLot {
    id: number;
    occupied: boolean;
    vehicle: Vehicle;
    parkingSpots: ParkingSpot[];
    parkingManager: ParkingManager;
    entryGate: EntryGate;
    exitGate: ExitGate;

    constructor(
        id: number, occupied: boolean, vehicle: Vehicle, parkingSpots: ParkingSpot[],
        parkingManager: ParkingManager, entryGate: EntryGate, exitGate: ExitGate
    ) {

        this.id = id;
        this.occupied = occupied;
        this.vehicle = vehicle;
        this.parkingSpots = parkingSpots;
        this.parkingManager = parkingManager;
        this.entryGate = entryGate;
        this.exitGate = exitGate;
    }

    parkVehicle(spot: ParkingSpot, vehicle: Vehicle) {
        spot.parkVehicle(vehicle);
    }

    removeVehicle(spot: ParkingSpot) {
        spot.removeVehicle();
    }

    getParkingSpots() {
        return this.parkingSpots;
    }
}

class ParkingSpot {
    id: number;
    occupied: boolean;
    vehicle: Vehicle;

    constructor(id: number, occupied: boolean, vehicle: Vehicle) {
        this.id = id;
        this.occupied = occupied;
        this.vehicle = vehicle;
    }

    parkVehicle(vehicle: Vehicle) {
        this.vehicle = vehicle
        this.occupied = true;
    }

    removeVehicle() {
        this.occupied = false;
    }

    isAvailable() {
        return !this.occupied;
    }
}

class ExitGate {
    gateNumber: number;

    constructor(gateNumber: number) {
        this.gateNumber = gateNumber;
    }

    processPayment(amount: number, payment: Payment) {
        payment.processPayment(amount)
    }
}

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

class UPIPayment implements PaymentStrategy {
    upiId: string;

    constructor(upiId: string) {
        this.upiId = upiId;
    }

    pay(amount: number): boolean {
        console.log(`Paid ₹${amount} using UPI (${this.upiId})`);
        return true;
    }
}


function main() {

}