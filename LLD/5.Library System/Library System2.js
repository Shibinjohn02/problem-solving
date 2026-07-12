class Book {
    constructor(title, authorName, publishedYear, pageCount) {
        this.title = title;
        this.authorName = authorName;
        this.publishedYear = publishedYear;
        this.pageCount = pageCount;
        this.isIssued = false
    }
}

class LibraryCard {
    constructor(studentId, validUpto) {
        this.studentId = studentId;
        this.validUpto = validUpto;
    }

    validate() {
        const today = new Date();
        return today <= this.validUpto;
    }
}

class Student {
    constructor(id, name, rollNumber, college, card) {
        this.id = id;
        this.name = name;
        this.rollNumber = rollNumber;
        this.college = college;
        this.card = card;
    }

    requestBook(librarian, book) {
        librarian.requestBook(this, book);
    }
}

class Librarian {
    constructor(name, college, library) {
        this.name = name;
        this.college = college;
        this.library = library;
    }

    requestBook(student, book) {
        const isValid = student.card.validate();

        if (!isValid) {
            console.log('Invalid Card');
            return;
        }

        const isAvailable = this.library.checkBookAvailable(book);

        if (!isAvailable) {
            console.log('Book Not Available');
            return;
        }

        this.approveIssue(student, book);
    }

    approveIssue(student, book) {
        this.library.issueBook(student, book);
    }
}

class Library {
    constructor(books = [], openingTime, closingTime) {
        this.books = books;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b.title !== book.title);
    }

    checkBookAvailable(book) {
        return this.books.filter(b => b.title === book.title && !b.isIssue);
    }

    issueBook(student, book) {
        book.isIssued = true;
        console.log(`${book.title} issued to ${student.name}`);
    }
}


function main() {
    // Books
    const book1 = new Book("Clean Code", "Robert C. Martin", 2008, 400);
    const book2 = new Book("JS Basics", "John Doe", 2015, 250);

    // Library
    const library = new Library([book1, book2], "9AM", "6PM");

    // Librarian
    const librarian = new Librarian("Mr. Sharma", "ABC College", library);

    // Card
    const card = new LibraryCard(1, new Date("2027-01-01"));

    // Student
    const student = new Student(1, "Shibin", "101", "ABC College", card);

    // Flow
    student.requestBook(librarian, book1); // success
    student.requestBook(librarian, book1); // already issued
}