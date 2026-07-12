class Account {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    debit(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }
        this.balance -= amount;
    }

    credit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this.balance += amount;
    }
}

class Card {
    constructor(cardNumber, holderName, expiryDate, pin, account) {
        this.cardNumber = cardNumber;
        this.holderName = holderName;
        this.expiryDate = expiryDate;
        this.pin = pin;
        this.account = account; // linked-to Account
    }
}

class Bank {
    constructor(name, branchCode) {
        this.name = name;
        this.branchCode = branchCode;
        this.accounts = new Map(); // accountNumber → Account
    }

    addAccount(account) {
        this.accounts.set(account.accountNumber, account);
    }

    authenticate(card, pin) {
        return card.pin === pin;
    }

    getBalance(account) {
        return account.getBalance();
    }

    debit(account, amount) {
        account.debit(amount);
    }

    credit(account, amount) {
        account.credit(amount);
    }
}

class CashDispenser {
    constructor(cashAvailable) {
        this.cashAvailable = cashAvailable;
    }

    dispenseCash(amount) {
        if (amount > this.cashAvailable) {
            throw new Error("ATM has insufficient cash");
        }
        this.cashAvailable -= amount;
        console.log(`Dispensed: ₹${amount}`);
    }
}

class ATM {
    constructor(id, location, bank, cashDispenser) {
        this.id = id;
        this.location = location;
        this.bank = bank;
        this.cashDispenser = cashDispenser;
        this.currentCard = null;
        this.isAuthenticated = false;
    }

    insertCard(card) {
        this.currentCard = card;
        this.isAuthenticated = false;
        console.log("Card inserted");
    }

    ejectCard() {
        console.log("Card ejected");
        this.currentCard = null;
        this.isAuthenticated = false;
    }

    authenticate(pin) {
        if (!this.currentCard) {
            console.log("No card inserted");
            return false;
        }

        const result = this.bank.authenticate(this.currentCard, pin);
        this.isAuthenticated = result;

        console.log(result ? "Authentication successful" : "Invalid PIN");
        return result;
    }

    showBalance() {
        if (!this.isAuthenticated) {
            console.log("Please authenticate first");
            return;
        }

        const balance = this.bank.getBalance(this.currentCard.account);
        console.log("Balance:", balance);
    }

    withdraw(amount) {
        if (!this.isAuthenticated) {
            console.log("Please authenticate first");
            return;
        }

        try {
            this.bank.debit(this.currentCard.account, amount);
            this.cashDispenser.dispenseCash(amount);
            console.log("Withdrawal successful");
        } catch (err) {
            console.log(err.message);
        }
    }

    deposit(amount) {
        if (!this.isAuthenticated) {
            console.log("Please authenticate first");
            return;
        }

        try {
            this.bank.credit(this.currentCard.account, amount);
            console.log("Deposit successful");
        } catch (err) {
            console.log(err.message);
        }
    }
}

class User {
    constructor(id, name, card) {
        this.id = id;
        this.name = name;
        this.card = card; // HAS-A
    }
}


// ---------------- MAIN FLOW ----------------

function main() {
    // Create Account
    const account = new Account("ACC123", 1000);

    // Create Bank
    const bank = new Bank("SBI", "001");
    bank.addAccount(account);

    // Create Card
    const card = new Card("CARD123", "Shibin", "12/30", "1234", account);

    // Create User
    const user = new User(1, "Shibin", card);

    // Create ATM
    const dispenser = new CashDispenser(5000);
    const atm = new ATM("ATM1", "Bhopal", bank, dispenser);

    // Flow
    atm.insertCard(user.card);
    atm.authenticate("1234");

    atm.showBalance();
    atm.withdraw(300);
    atm.showBalance();

    atm.deposit(500);
    atm.showBalance();

    atm.ejectCard();
}

main();