class Book {
    constructor(title,author,isbn) {
        this.title = title;
        this.author  = author;
        this.isbn = isbn
    }
    createUI () {
        let list = document.querySelector('table')
        let tr = document.createElement('tr');
        let title = document.createElement('td');
        let author = document.createElement('td');
        let isbn = document.createElement('td');
        let cross = document.createElement('td');
        title.innerHTML = this.title;
        author.innerHTML = this.author;
        isbn.innerHTML = this.isbn;
        cross.innerHTML = '❌'
        cross.classList.add('cross')
        tr.append(title,author,isbn,cross);
        list.append(tr)
        cross.addEventListener('click', function() {
            this.parentElement.innerHTML = '';
        });
    }
}
let btn = document.querySelector('#btn');
btn.addEventListener('click',function() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    new Book(title,author,isbn).createUI();
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
});
