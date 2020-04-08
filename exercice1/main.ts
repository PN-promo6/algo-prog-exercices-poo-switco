class Book {

  title: string;
  price: number;

  constructor(title:string, price:number) {
    this.title = title
    this.price = price
  }
}

let toup: Book = new Book("toup", 12); // une instance de la classe Book
let nep: Book = new Book("nep", 12); // une seconde instance de la classe Book

console.log(toup.title, toup.price );
