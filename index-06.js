// Створити класи Library та Book
// Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:
// Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
// Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці
// Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// author
// title
// price
// totalPages
// currentPage
// Також цей клас буде мати такі методи:
// Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта

class Library {
  constructor() {
    this.books = [];
    this.favourite = [];
  }

  toBuy(book) {
    if (this.books.includes(book)) {
      alert(`Такая книга уже есть в библиотеке`);
    }
    this.books.push(book);
  }

  toSell(bookName) {
    this.books.forEach(({ name }, idx) => {
      if (name === bookName) {
        this.books.splice(idx, 1);
      }
    });
    return this.books;
  }

  addToFavourite(bookName) {
    const favouriteBook = this.books.find(({ name }) => name === bookName);
    this.favourite.push(favouriteBook);
    return this.favourite;
  }

  removeFromFavourite(bookName) {
    this.favourite.forEach(({ name }, idx) => {
      if (name === bookName) {
        this.favourite.splice(idx, 1);
      }
    });
    return this.favourite;
  }

  get сountFavouriteBooks() {
    return this.favourite.length;
  }

  get finishedBook() {}
  totalCost() {}
}
const myLibrary = new Library();
console.log(myLibrary);
myLibrary.toBuy({ name: "Core JS", year: 2020 });
myLibrary.toSell("Core JS");
myLibrary.toBuy({ name: "React JS", year: 2020 });
myLibrary.toBuy({ name: "Node JS", year: 2020 });

myLibrary.addToFavourite("React JS");
myLibrary.addToFavourite("Node JS");

myLibrary.removeFromFavourite("React JS");

console.log(myLibrary.сountFavouriteBooks());
