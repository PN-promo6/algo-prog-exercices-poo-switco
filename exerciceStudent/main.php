<?php
class Student {

  public $name;
  public $age;

  function __construct($name, $age) {
    $this->name = $name;
    $this->age = $age;
  }

  function studentInfos() {
    echo("Hi, my name is ". $this->name . ", I'm " . $this->age);
  }
}

$jessica = new Student("Jessica", 29);
$jessica->studentInfos();
?>
