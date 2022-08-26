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

const books = new Library();
