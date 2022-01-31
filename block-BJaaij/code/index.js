class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead () {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor(arrayOfBooks, currentBookIndex) {
        this.arrayOfBooks = arrayOfBooks;
        this.currentBookIndex = currentBookIndex;
    }
    add([Book]) {
        for(let i = 0; i < Book.length; i++) {
            this.arrayOfBooks.push(Book[i])
        }
    }
    getCurrentBook() {
        return this.arrayOfBooks[this.currentBookIndex];
    }
    getNextBook() {
        return this.arrayOfBooks[this.currentBookIndex + 1];
    }
    getPrevBook() {
        return this.arrayOfBooks[this.currentBookIndex - 1];
    }
    changeCurrentBook(index) {
        this.currentBookIndex = index;
    }
}

let book1 = new Book(`Harry Potter and the Philosopher's Stone`,'Magic','JK Rowling', true, '2-09-09');
let book2 = new Book(`Harry Potter and the Chamber of Secrets`,'Magic','JK Rowling');
let bookArray = new BookList([`Harry Potter and the Prisoner of Azkaban`,`Harry Potter and the Goblet of Fire`,`Harry Potter and the Order of Phoenix`],1);
bookArray.add([`Harry Potter and the Half Blood Prince`,`Harry Potter and the Deathly Hallows`,]);
console.log(bookArray.getCurrentBook());
console.log(bookArray.getNextBook());
console.log(bookArray.getPrevBook());
bookArray.changeCurrentBook(2);
console.log(bookArray.getCurrentBook());
book2.markBookAsRead();
console.log(book2.finishedDate);
console.log(book2.isRead);