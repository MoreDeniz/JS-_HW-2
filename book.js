// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    // title = "";
    // author = "";
    // pages = "";

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Book name: ${this.title}. Author: ${this.author}. Pages: ${this.pages}.`);
    }
};

const Skazka = new Book("Skazka o zolotom petushke", "A.S.Pushkin", 25);
const Rasskaz = new Book("Kladovaya solnza", "M.M.Prishvin", 67);

Skazka.displayInfo();
Rasskaz.displayInfo();
