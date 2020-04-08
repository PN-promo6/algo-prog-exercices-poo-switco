<?php
class Furniture {

  public $editor;
  public $designer;
  public $creation;

  function __construct($editor, $designer, $creation) {
    $this->editor = $editor;
    $this->designer = $designer;
    $this->creation = $creation;
  }
}

$wassily = new Furniture("Knoll", "Marcel Breuer", 1926);

// echo($wassily->editor. " " . $wassily->designer . " " . $wassily->creation);
print_r($wassily);
?>
