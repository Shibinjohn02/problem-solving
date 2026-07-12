interface PaymentStrategy {
    pay(amount: number): boolean;
}

class User {
    id: number;
    name: string;

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

class CardPayment implements PaymentStrategy {
    cardNumber: number;
    cvv: number;
    expiryDate: Date;

    constructor(cardNumber: number, cvv: number, expiryDate: Date) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    pay(amount: number): boolean {
        console.log(`Paid ₹${amount} using Card (${this.cardNumber})`);
        return true;
    }
}

class WalletPayment implements PaymentStrategy {
    walletId: number;
    balance: number;

    constructor(walletId: number, balance: number) {
        this.walletId = walletId;
        this.balance = balance;
    }

    pay(amount: number): boolean {

        if (this.balance < amount) {
            console.log("Insufficient Wallet Balance");
            return false;
        }

        this.balance -= amount;

        console.log(`Paid ₹${amount} using Wallet (${this.walletId})`);

        return true;
    }
}


// ---------------- MAIN ----------------

function main() {

    const user1 = new User(1, "Nick");

    // UPI Payment
    const upi = new UPIPayment("nick@upi");

    const payment1 = new Payment(500, upi);

    payment1.processPayment();


    // Card Payment
    const card = new CardPayment(
        123456789,
        123,
        new Date("2028-01-01")
    );

    const payment2 = new Payment(1000, card);

    payment2.processPayment();


    // Wallet Payment
    const wallet = new WalletPayment(101, 300);

    const payment3 = new Payment(500, wallet);

    payment3.processPayment();
}

main();