<?php
class Book
{

    public $title;
    public $price;

    function __construct($title, $price)
    {
        $this->title = $title;
        $this->price = $price;
    }
}

$toup = new Book("Toup", 11);

echo ($toup->title . " " . $toup->price);
//print_r($toup);
