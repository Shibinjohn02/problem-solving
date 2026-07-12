interface PaymentStrategy {
    pay(amount: number): boolean;
}

interface FareStrategy {
    calculateFare(): number;
}

interface Vehicle {
    isAvailable: boolean;

    start(): void;
    stop(): void;
    accelerate(): void;
}

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

class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}

class VehicleLocation {
    id: number;
    name: string
    address: string
    vehicles: Vehicle[]
    pincode: number
    contactNumber: string

    constructor(id: number, name: string, address: string, vehicles: Vehicle[], pincode: number, contactNumber: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.vehicles = vehicles;
        this.pincode = pincode;
        this.contactNumber = contactNumber;
    }

}

class Booking {
    id: number
    user: User
    vehicle: Vehicle
    pickupLocation: Location
    startDate: Date
    endDate: Date
    status: Boolean
    totalAmount: number

    constructor(id: number, user: User, vehicle: Vehicle, pickupLocation: Location, startDate: Date, endDate: Date,
        status: Boolean, totalAmount: number) {

        this.id = id;
        this.user = user
        this.vehicle = vehicle
        this.pickupLocation = pickupLocation
        this.startDate = startDate
        this.endDate = endDate
        this.status = status
        this.totalAmount = totalAmount
    }

    /* Flow:
        - check vehicle
        - assign vehicle
        - update status
    */
    confirmBooking(user: User, vehicle: Vehicle) {

        if (!vehicle.isAvailable) {
            console.log("Vehicle not available");
            return;
        }

        this.user = user;
        this.vehicle = vehicle;
        this.status = true;

        vehicle.isAvailable = false;
    }

    cancelBooking(bookingId: number) {

    }

    getBookingStatus(bookingId: number) {

    }
}

class RentalManager {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
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
