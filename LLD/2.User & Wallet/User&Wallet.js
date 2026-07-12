class User {
    constructor(id, name, wallet) {
        this.id = id;
        this.name = name;
        this.wallet = wallet; // HAS-A relation
    }

    viewBalance() {
        return this.wallet.getBalance();
    }
}

class Wallet {
    constructor(amount = 0) {
        this.amount = amount;
    }

    addMoney(amount) {
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }
        this.amount += amount;
    }

    deductMoney(amount) {
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }

        if (amount > this.amount) {
            console.log("Insufficient balance");
            return;
        }

        this.amount -= amount;
    }

    getBalance() {
        return this.amount;
    }

    isEmpty() {
        return this.amount <= 0;
    }
}

function main() {
    const wallet1 = new Wallet(100);
    const wallet2 = new Wallet(200);

    const user1 = new User(1, 'shibin', wallet1);
    const user2 = new User(2, 'sonia', wallet2); // fixed duplicate id

    console.log(user1.viewBalance()); // 100

    wallet1.addMoney(50);
    console.log(user1.viewBalance()); // 150

    wallet1.deductMoney(200); // insufficient balance
    console.log(user1.viewBalance()); // still 150
}

main();