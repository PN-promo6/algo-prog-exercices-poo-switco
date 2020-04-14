class Playground {
    public static void main(String[ ] args) {
        Book toup = new Book("Toup", 11);
        System.out.println(toup.title + " " + toup.price);
    }
}

class Book {

  public  String title;
  public int price;

  public Book(String title, int price) {
    this.title = title;
    this.price = price;
  }
}
