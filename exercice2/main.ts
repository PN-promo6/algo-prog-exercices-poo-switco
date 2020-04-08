class Furniture {

  editor : string;
  designer :string;
  creation : number;

  constructor(editor:string, designer: string, creation:number) {
    this.editor = editor;
    this.designer = designer;
    this.creation = creation;
  }
}

let wassily: Furniture = new Furniture("Knoll", "Marcel Breuer", 1926);
console.log(wassily.editor, wassily.designer, wassily.creation);
