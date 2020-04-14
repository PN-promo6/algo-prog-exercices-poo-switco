class Playground {
    public static void main(String[ ] args) {
        Furniture wassily = new Furniture("Knoll", "Marcel Breuer", 1926);
        System.out.println(wassily.editor + " " + wassily.designer + " " + wassily.creation);
    }
}

class Furniture {

  public  String editor;
  public String designer;
  public int creation;

  public Furniture(String editor, String designer, int creation) {
      
    this.editor = editor;
    this.designer = designer;
    this.creation = creation;
  }
}
