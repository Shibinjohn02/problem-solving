class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}


// OBSERVER INTERFACE 
interface Observer {
    update(message: string): void;
}


// SUBJECT INTERFACE 
interface NotificationService {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}


// CONCRETE SUBJECT 
class NotificationManager implements NotificationService {

    private observers: Observer[];
    private message: string;

    constructor() {
        this.observers = [];
        this.message = "";
    }

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }

    sendMessage(message: string): void {
        console.log(`\nNew Notification: ${message}`);

        this.message = message;

        this.notify();
    }
}


// OBSERVERS 
class SMSNotification implements Observer {

    private phoneNumber: string;

    constructor(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    update(message: string): void {
        console.log(`SMS sent to ${this.phoneNumber}: ${message}`);
    }
}


class EmailNotification implements Observer {

    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    update(message: string): void {
        console.log(`Email sent to ${this.email}: ${message}`);
    }
}


class PushNotification implements Observer {

    private deviceId: string;

    constructor(deviceId: string) {
        this.deviceId = deviceId;
    }

    update(message: string): void {
        console.log(`Push notification sent to device ${this.deviceId}: ${message}`);
    }
}


// MAIN 
function main(): void {

    const user1 = new User(1, "Alex");

    // Subject
    const notificationManager = new NotificationManager();


    // Observers
    const sms = new SMSNotification("9876543210");

    const email = new EmailNotification("alex@gmail.com");

    const push = new PushNotification("DEVICE-101");


    // Subscribe observers
    notificationManager.subscribe(sms);

    notificationManager.subscribe(email);

    notificationManager.subscribe(push);


    // Send notification
    notificationManager.sendMessage("Your order has been placed successfully!");


    // Unsubscribe SMS
    notificationManager.unsubscribe(sms);


    // Send another notification
    notificationManager.sendMessage("Your order is out for delivery!");
}

main();