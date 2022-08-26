class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  getBooks() {
    return this.books;
  }
}

const createBookTableRow = (book) => {
  const bookRow = document.createElement('tr');
  const title = document.createElement('th');
  const author = document.createElement('th');
  const pages = document.createElement('th');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;

  bookRow.appendChild(title);
  bookRow.appendChild(author);
  bookRow.appendChild(pages);

  return bookRow;
};

const addBookBtn = document.querySelector('#addBook');
const booksEl = document.querySelector('#books');

const books = new Library();

books.addBook(new Book('First Book', 'Me', 12));
books.addBook(new Book('Second Book', 'Me', 23));

books.books.forEach(book => {
  const bookEl = createBookTableRow(book);
  booksEl.append(bookEl);
});

addBookBtn.addEventListener('click', e => {
  e.preventDefault();
  
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;

  const newBook = new Book(title, author, pages);
  books.addBook(newBook);
  const newBookRow = createBookTableRow(newBook);
  booksEl.appendChild(newBookRow);
});